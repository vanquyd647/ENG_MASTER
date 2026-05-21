/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  reauthenticateWithPopup,
  onAuthStateChanged, 
  User, 
  signOut
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  getDocs,
  updateDoc,
  writeBatch
} from 'firebase/firestore';
import { auth, db } from './lib/firebase';
import { VOCABULARY, Word } from './data/vocabulary';
import { initialSRS, calculateNextReview } from './lib/srs';
import { 
  BookOpen, 
  GraduationCap, 
  LayoutDashboard, 
  LogOut, 
  CheckCircle2, 
  Volume2,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Trophy,
  History,
  FileDown,
  ClipboardList,
  ExternalLink,
  CheckSquare,
  AlertCircle,
  Flame,
  CalendarDays,
  Target,
  Brain,
  Settings,
  Trash2,
  Moon,
  Sun,
  Bell,
  Calendar,
  User as UserIcon,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster, toast } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { cn } from './lib/utils';

const StatsView = lazy(() =>
  import('./components/StatsView').then((module) => ({ default: module.StatsView }))
);

// --- Types ---
interface UserProgress {
  [wordId: string]: {
    userId?: string;
    wordId?: string;
    easiness: number;
    interval: number;
    repetitions: number;
    nextReviewDate: string;
    lastReviewDate?: string;
    wrongCount?: number;
  };
}

export type AppSessionType = 'review' | 'quiz';
type SyncAction = 'tasks' | 'calendar' | 'drive';

export interface StudySessionLog {
  id: string;
  date: string;
  type: AppSessionType;
  score?: string; 
  details: string;
}

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  totalWordsLearned: number;
  studyTimeMinutes: number;
  streak: number;
  dailyGoal?: number;
  lastStudyDate?: string;
  history?: StudySessionLog[];
}

type ProgressItem = UserProgress[string];

const toStoredProgress = (uid: string, wordId: string, item: ProgressItem) =>
  Object.fromEntries(
    Object.entries({
      ...item,
      userId: uid,
      wordId,
    }).filter(([, value]) => value !== undefined),
  ) as ProgressItem & { userId: string; wordId: string };

// --- Components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative bg-zinc-900 border border-zinc-800 w-full max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl sm:rounded-[32px] shadow-2xl p-5 sm:p-8 space-y-6">
          <div className="flex justify-between items-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-all">
              <LogOut className="w-5 h-5 rotate-180 text-zinc-500" />
            </button>
          </div>
          <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-li:my-1 prose-h3:text-lg prose-h3:font-bold prose-h3:mt-4 text-slate-300">
             {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Button = ({ 
  children, 
  onClick, 
  className, 
  variant = 'primary',
  disabled = false,
  type = 'button',
  id
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}) => {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20',
    secondary: 'bg-zinc-800 text-slate-200 hover:bg-zinc-700',
    outline: 'border border-zinc-700 text-slate-300 hover:bg-zinc-800 hover:text-white',
    ghost: 'text-zinc-500 hover:bg-zinc-800 hover:text-slate-300',
    success: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-500/20',
  };

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2 cursor-pointer',
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className, id, onClick }: { children: React.ReactNode; className?: string; id?: string; onClick?: () => void }) => (
  <div id={id} onClick={onClick} className={cn('bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl shadow-black/10', className)}>
    {children}
  </div>
);

// --- Main App ---

const createGoogleProvider = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/tasks');
  provider.addScope('https://www.googleapis.com/auth/drive.file');
  provider.addScope('https://www.googleapis.com/auth/calendar.events');
  provider.setCustomParameters({ prompt: 'select_account' });
  return provider;
};

const getApiErrorMessage = async (res: Response) => {
  try {
    const data = await res.json();
    return data?.error || data?.message || `${res.status} ${res.statusText}`;
  } catch {
    return `${res.status} ${res.statusText}`;
  }
};

let studyReminderTimer: number | null = null;

const scheduleStudyReminder = () => {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  if (studyReminderTimer) window.clearTimeout(studyReminderTimer);

  const nextReminder = new Date();
  nextReminder.setHours(20, 0, 0, 0);
  if (nextReminder.getTime() <= Date.now()) {
    nextReminder.setDate(nextReminder.getDate() + 1);
  }

  studyReminderTimer = window.setTimeout(() => {
    new Notification('TOEIC Master', {
      body: 'Đến giờ ôn lại kế hoạch từ vựng hôm nay.',
      icon: '/favicon.ico',
    });
    scheduleStudyReminder();
  }, nextReminder.getTime() - Date.now());
};

const clearStudyReminder = () => {
  if (studyReminderTimer) window.clearTimeout(studyReminderTimer);
  studyReminderTimer = null;
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [progress, setProgress] = useState<UserProgress>({});
  const [currentView, setCurrentView] = useState<'dashboard' | 'review' | 'browse' | 'quiz' | 'practice' | 'settings' | 'stats'>('dashboard');
  const [loading, setLoading] = useState(true);
  const [explainingWord, setExplainingWord] = useState<{ word: string; meaning: string; content: string } | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  const [syncingAction, setSyncingAction] = useState<SyncAction | null>(null);

  // --- Auth & Data Fetching ---
  useEffect(() => {
    // Check for existing guest session
    const savedGuestProfile = localStorage.getItem('guest_profile');
    if (savedGuestProfile) {
      setIsGuest(true);
      setProfile(JSON.parse(savedGuestProfile));
      const savedProgress = localStorage.getItem('guest_progress');
      if (savedProgress) setProgress(JSON.parse(savedProgress));
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        setIsGuest(false);
        await fetchUserData(user.uid);
      } else if (!isGuest) {
        setProfile(null);
        setProgress({});
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [isGuest]);

  const fetchUserData = async (uid: string) => {
    try {
      const profileRef = doc(db, 'users', uid);
      const profileDoc = await getDoc(profileRef);
      
      if (profileDoc.exists()) {
        setProfile(profileDoc.data() as UserProfile);
      } else {
        const newProfile: UserProfile = {
          uid,
          email: auth.currentUser?.email || '',
          displayName: auth.currentUser?.displayName || 'User',
          totalWordsLearned: 0,
          studyTimeMinutes: 0,
          streak: 1,
          dailyGoal: 15,
        };
        await setDoc(profileRef, newProfile);
        setProfile(newProfile);
      }

      const progressSnap = await getDocs(collection(db, `users/${uid}/progress`));
      const progressData: UserProgress = {};
      progressSnap.forEach((d) => {
        progressData[d.id] = d.data() as any;
      });
      setProgress(progressData);
    } catch (err: any) {
      console.error('Error fetching data:', err);
      if (err.message?.includes('offline') || err.code === 'unavailable') {
        toast.error('Không thể kết nối đến Cloud. Đang chuyển sang chế độ Offline...');
        handleGuestLogin();
      } else {
        toast.error('Lỗi đồng bộ dữ liệu: ' + err.message);
      }
    }
  };

  const login = async () => {
    try {
      await signInWithPopup(auth, createGoogleProvider());
    } catch (err: any) {
      console.error('Login error:', err);
      if (err.code === 'auth/configuration-not-found') {
        toast.error('Firebase Auth chưa được cấu hình. Thử chế độ Khách.');
      } else if (err.code === 'auth/unauthorized-domain') {
        toast.error('Domain chưa được ủy quyền trong Firebase. Vui lòng sử dụng chế độ Khách hoặc kiểm tra lại Whitelist.');
      } else {
        toast.error('Đăng nhập thất bại: ' + err.message);
      }
    }
  };

  const handleGuestLogin = () => {
    const guestId = 'guest_' + Math.random().toString(36).substr(2, 9);
    const guestProfile: UserProfile = {
      uid: guestId,
      email: 'guest@local',
      displayName: 'Khách (Guest)',
      totalWordsLearned: 0,
      studyTimeMinutes: 0,
      streak: 1,
      dailyGoal: 15,
    };
    setIsGuest(true);
    setProfile(guestProfile);
    localStorage.setItem('guest_profile', JSON.stringify(guestProfile));
    
    const savedProgress = localStorage.getItem('guest_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
    toast.success('Đã vào chế độ Khách (Offline)');
  };

  const logout = () => {
    if (isGuest) {
      setIsGuest(false);
      localStorage.removeItem('guest_profile');
      localStorage.removeItem('guest_progress');
      setProfile(null);
      setProgress({});
    } else {
      signOut(auth);
    }
  };

  // --- Google Workspace Services ---
  const getGoogleAccessToken = async () => {
    if (isGuest || !user) {
      toast.error('Cần đăng nhập Google để sử dụng tính năng này.');
      return null;
    }

    const result = await reauthenticateWithPopup(user, createGoogleProvider());
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken || null;

    if (!accessToken) {
      toast.error('Không thể lấy quyền Google Workspace. Vui lòng thử lại.');
    }

    return accessToken;
  };

  const googleFetch = async (url: string, init: RequestInit = {}, retry = true): Promise<Response> => {
    const token = await getGoogleAccessToken();
    if (!token) throw new Error('Missing Google access token');

    const headers = new Headers(init.headers);
    headers.set('Authorization', `Bearer ${token}`);
    const res = await fetch(url, { ...init, headers });

    if ((res.status === 401 || res.status === 403) && retry) {
      return googleFetch(url, init, false);
    }

    return res;
  };

  const syncToGoogleCalendar = async () => {
    if (isGuest) {
      toast.error('Cần đăng nhập Google để đồng bộ Lịch thi/Lịch học');
      return;
    }
    
    if (!window.confirm("Thêm lịch ôn tập vào Google Calendar của bạn?")) return;

    setSyncingAction('calendar');
    const toastId = toast.loading('Đang lên lịch trên Google Calendar...');

    try {
      // Add a session 1 hour from now for 30 minutes
      const startTime = new Date();
      startTime.setHours(startTime.getHours() + 1);
      const endTime = new Date(startTime.getTime() + 30 * 60000);

      const event = {
        summary: 'TOEIC Master - Ôn tập từ vựng',
        description: 'Đã đến giờ ôn tập các từ vựng khó trong TOEIC Master!',
        start: { dateTime: startTime.toISOString(), timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
        end: { dateTime: endTime.toISOString(), timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
        reminders: {
          useDefault: false,
          overrides: [ { method: 'popup', minutes: 10 } ]
        }
      };

      const res = await googleFetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });

      if (!res.ok) throw new Error(await getApiErrorMessage(res));
      
      toast.success('Đã lên lịch học trên Google Calendar!', { id: toastId });
    } catch (err: any) {
      console.error(err);
      toast.error('Lỗi khi đồng bộ Calendar', { id: toastId });
    } finally {
      setSyncingAction(null);
    }
  };

  const syncToGoogleTasks = async (wordToSync?: Word) => {
    if (isGuest) {
      toast.error('Cần đăng nhập Google để sử dụng tính năng này');
      return;
    }
    
    setSyncingAction('tasks');
    const toastId = toast.loading('Đang chuẩn bị danh sách Tasks...');

    try {
      // 1. Get or Create Task List
      const listsRes = await googleFetch('https://www.googleapis.com/tasks/v1/users/@me/lists');
      if (!listsRes.ok) throw new Error(await getApiErrorMessage(listsRes));
      const listsData = await listsRes.json();
      let listId = listsData.items?.find((l: any) => l.title === 'TOEIC Master - Words to Learn')?.id;

      if (!listId) {
        const newListRes = await googleFetch('https://www.googleapis.com/tasks/v1/users/@me/lists', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: 'TOEIC Master - Words to Learn' })
        });
        if (!newListRes.ok) throw new Error(await getApiErrorMessage(newListRes));
        const newList = await newListRes.json();
        listId = newList.id;
      }

      // 2. Add word(s)
      const words = wordToSync ? [wordToSync] : VOCABULARY.filter(w => !progress[w.id]).slice(0, 5);
      
      if (!wordToSync) {
        toast.loading(`Đang đồng bộ ${words.length} từ mới...`, { id: toastId });
      }

      for (const w of words) {
        const taskRes = await googleFetch(`https://www.googleapis.com/tasks/v1/lists/${listId}/tasks`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: `Học từ: ${w.word}`,
            notes: `${w.pos} - ${w.meaning}\nVD: ${w.example}`,
            due: new Date(Date.now() + 86400000).toISOString() // Tomorrow
          })
        });
        if (!taskRes.ok) throw new Error(await getApiErrorMessage(taskRes));
      }

      toast.success('Đã đồng bộ sang Google Tasks!', { id: toastId });
    } catch (err: any) {
      console.error(err);
      toast.error('Lỗi khi đồng bộ Tasks', { id: toastId });
    } finally {
      setSyncingAction(null);
    }
  };

  const exportToGoogleDrive = async () => {
    if (isGuest) {
      toast.error('Cần đăng nhập Google để sử dụng tính năng này');
      return;
    }

    if (!window.confirm('Bạn có muốn xuất báo cáo tiến độ học tập sang Google Drive không?')) return;

    setSyncingAction('drive');
    const toastId = toast.loading('Đang khởi tạo tệp báo cáo...');

    try {
      const masteredWords = VOCABULARY.filter(w => progress[w.id]?.repetitions >= 7);
      const report = {
        userName: profile?.displayName,
        exportDate: new Date().toLocaleDateString(),
        stats: {
          totalWords: VOCABULARY.length,
          learned: profile?.totalWordsLearned,
          mastered: masteredWords.length
        },
        masteredList: masteredWords.map(w => ({ word: w.word, meaning: w.meaning }))
      };

      const boundary = 'foo_bar_baz';
      const metadata = {
        name: `TOEIC_Master_Report_${new Date().toISOString().split('T')[0]}.json`,
        mimeType: 'application/json'
      };

      const multipartBody = 
        `--${boundary}\r\n` +
        `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
        JSON.stringify(metadata) + `\r\n` +
        `--${boundary}\r\n` +
        `Content-Type: application/json\r\n\r\n` +
        JSON.stringify(report, null, 2) + `\r\n` +
        `--${boundary}--`;

      const res = await googleFetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: {
          'Content-Type': `multipart/related; boundary=${boundary}`
        },
        body: multipartBody
      });

      if (!res.ok) throw new Error(await getApiErrorMessage(res));
      
      toast.success('Đã lưu báo cáo vào Google Drive!', { id: toastId });
    } catch (err: any) {
      console.error(err);
      toast.error('Lỗi khi xuất Drive', { id: toastId });
    } finally {
      setSyncingAction(null);
    }
  };

  const logSessionHistory = async (type: AppSessionType, score: string | undefined, details: string) => {
    if (!profile) return;
    const newLog: StudySessionLog = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      type,
      score,
      details
    };
    
    const maxHistory = 50;
    const newHistory = [newLog, ...(profile.history || [])].slice(0, maxHistory);
    const updatedProfile = { ...profile, history: newHistory };
    
    if (!isGuest) {
      try {
        await updateDoc(doc(db, 'users', profile.uid), { history: newHistory });
      } catch (err) {
        console.error('Failed to log history', err);
      }
    } else {
      localStorage.setItem('guest_profile', JSON.stringify(updatedProfile));
    }
    setProfile(updatedProfile);
  };

  const handleLearnMore = async (word: string, meaning: string) => {
    setIsExplaining(true);
    setExplainingWord({ word, meaning, content: '' });
    try {
      const res = await fetch('/api/gemini/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, meaning }),
      });
      if (!res.ok) throw new Error(await getApiErrorMessage(res));
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setExplainingWord({ word, meaning, content: data.text });
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : 'Không thể lấy thông tin chi tiết');
      setExplainingWord(null);
    } finally {
      setIsExplaining(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 font-sans">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user && !isGuest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] text-slate-200 p-4 sm:p-6 font-sans overflow-hidden relative">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-8 sm:space-y-12 relative z-10"
        >
          <div className="space-y-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-600 rounded-[28px] sm:rounded-[32px] mx-auto flex items-center justify-center shadow-2xl shadow-indigo-500/40">
              <GraduationCap className="text-white w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white">TOEIC Master</h1>
              <p className="text-zinc-500 text-base sm:text-lg font-medium">Học từ vựng thông minh với SRS v2.0</p>
            </div>
          </div>
          <div className="space-y-4">
            <Button onClick={login} className="w-full py-3.5 sm:py-4 text-base sm:text-lg rounded-2xl">
              Đăng nhập với Google
            </Button>
            <Button onClick={handleGuestLogin} variant="outline" className="w-full py-3.5 sm:py-4 text-base sm:text-lg rounded-2xl border-zinc-800 text-zinc-400 hover:text-white">
              Tiếp tục với tư cách Khách
            </Button>
          </div>
          <div className="pt-8 sm:pt-10 border-t border-zinc-800/50 grid grid-cols-3 gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
            <div className="space-y-2">
              <div className="text-slate-300 text-lg sm:text-xl font-bold tracking-tight">1000+</div>
              <div>Từ vựng</div>
            </div>
            <div className="space-y-2 border-x border-zinc-800/50">
              <div className="text-slate-300 text-lg sm:text-xl font-bold tracking-tight">SM-2</div>
              <div>Thuật toán</div>
            </div>
            <div className="space-y-2">
              <div className="text-slate-300 text-lg sm:text-xl font-bold tracking-tight">27+</div>
              <div>Chủ đề</div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] font-sans text-slate-200 overflow-x-hidden">
      <Toaster 
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#f8fafc',
            border: '1px solid #27272a',
            borderRadius: '16px'
          }
        }}
        position="top-center" 
      />
      
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0c0c0e]/90 backdrop-blur-2xl border-t border-zinc-800 px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] z-50 md:top-0 md:bottom-auto md:bg-transparent md:border-b-0 md:backdrop-blur-none md:px-6 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between">
          <div className="hidden md:flex items-center gap-3 md:bg-zinc-900 md:px-5 md:py-2.5 md:rounded-2xl md:border md:border-zinc-800 md:shadow-lg">
            <div className="bg-indigo-600 p-1 rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:inline text-white">TOEIC Master</span>
          </div>
          
          <div className="grid grid-cols-5 gap-1 w-full md:w-auto md:flex md:items-center md:bg-zinc-900 md:p-1.5 md:rounded-2xl md:border md:border-zinc-800 md:shadow-lg">
            {[
              { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
              { id: 'browse', icon: BookOpen, label: 'Thư viện' },
              { id: 'quiz', icon: CheckSquare, label: 'Kiểm tra' },
              { id: 'practice', icon: Target, label: 'Luyện tập' },
              { id: 'stats', icon: TrendingUp, label: 'Thống kê' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as any)}
                className={cn(
                  'min-w-0 flex flex-col items-center gap-1 px-1.5 py-2 rounded-xl transition-all md:flex-row md:px-5 md:py-2.5',
                  currentView === item.id ? 'text-indigo-400 bg-indigo-500/10' : 'text-zinc-500 hover:text-slate-300'
                )}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className="w-full truncate text-[9px] leading-tight font-bold md:text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end mr-2">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Premium</span>
              <span className="text-sm font-bold text-white">{profile?.displayName}</span>
            </div>
            <button onClick={() => setCurrentView('settings')} className="p-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all text-zinc-500 shadow-lg hover:text-slate-300">
              <Settings className="w-5 h-5" />
            </button>
            <button onClick={logout} className="p-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all text-zinc-500 shadow-lg hover:text-rose-500">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed right-3 top-3 z-40 flex gap-2 md:hidden">
        <button onClick={() => setCurrentView('settings')} className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl text-zinc-400 shadow-lg active:scale-95">
          <Settings className="w-5 h-5" />
        </button>
        <button onClick={logout} className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl text-zinc-400 shadow-lg active:scale-95">
          <LogOut className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-28 md:pt-32">
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' && (
            <div className="space-y-8">
              <Dashboard 
                profile={profile} 
                progress={progress} 
                onStartReview={() => setCurrentView('review')}
                onStartQuiz={() => setCurrentView('quiz')}
                onStartPractice={() => setCurrentView('practice')}
                onSyncTasks={() => syncToGoogleTasks()}
                onSyncCalendar={() => syncToGoogleCalendar()}
                onExportDrive={exportToGoogleDrive}
                syncingAction={syncingAction}
                isGuest={isGuest}
                onViewStats={() => setCurrentView('stats')}
              />
            </div>
          )}
          {currentView === 'browse' && (
            <Browse 
              progress={progress} 
              onLearnMore={handleLearnMore} 
              onSyncTask={syncToGoogleTasks}
            />
          )}
          {currentView === 'review' && (
            <ReviewSession 
              key="review" 
              progress={progress} 
              profile={profile}
              isGuest={isGuest}
              setProfile={setProfile}
              onFinish={(newProgress, wordsReviewed) => {
                setProgress(newProgress);
                logSessionHistory('review', `${wordsReviewed} từ`, `Hoàn thành ôn tập từ vựng (${wordsReviewed} thẻ)`);
                setCurrentView('dashboard');
              }}
              onCancel={() => setCurrentView('dashboard')}
              onLearnMore={handleLearnMore}
            />
          )}
          {currentView === 'quiz' && (
            <QuizSession 
              onCancel={() => setCurrentView('dashboard')}
              onFinish={(score, total) => {
                logSessionHistory('quiz', `${score}/${total}`, `Hoàn thành bài kiểm tra (${Math.round((score/total)*100)}%)`);
              }}
              onWordResult={async (wordId, isCorrect) => {
                const currentItem = progress[wordId] || {
                  easiness: initialSRS.easiness,
                  interval: initialSRS.interval,
                  repetitions: initialSRS.repetitions,
                  nextReviewDate: new Date().toISOString()
                };
                
                let newWrongCount = currentItem.wrongCount || 0;
                if (!isCorrect) {
                  newWrongCount += 1;
                } else if (newWrongCount > 0) {
                  newWrongCount -= 1;
                }

                const updatedItem = {
                  ...currentItem,
                  wrongCount: newWrongCount,
                  lastReviewDate: new Date().toISOString()
                };

                const updatedProgress = {
                  ...progress,
                  [wordId]: updatedItem
                };

                setProgress(updatedProgress);
                if (isGuest) {
                  localStorage.setItem('guest_progress', JSON.stringify(updatedProgress));
                } else if (profile) {
                  try {
                    await setDoc(
                      doc(db, `users/${profile.uid}/progress`, wordId),
                      toStoredProgress(profile.uid, wordId, updatedItem)
                    );
                  } catch (err) {
                    console.error("Failed to update progress for quiz word in DB", err);
                    setProgress(progress);
                    toast.error('Không thể lưu tiến độ quiz lên Cloud.');
                  }
                }
              }}
            />
          )}
          {currentView === 'practice' && (
            <PracticeSession 
              progress={progress}
              onCancel={() => setCurrentView('dashboard')}
              onFinish={(mode, wordsCount) => {
                logSessionHistory('review', `${wordsCount} từ`, `Luyện tập tự do (${mode})`);
                setCurrentView('dashboard');
              }}
              onUpdateProgress={async (wordId, nextSRS) => {
                const updatedProgress = {
                  ...progress,
                  [wordId]: {
                     ...nextSRS,
                     nextReviewDate: nextSRS.nextReviewDate.toISOString(),
                     lastReviewDate: nextSRS.lastReviewDate?.toISOString(),
                     wrongCount: nextSRS.wrongCount !== undefined ? nextSRS.wrongCount : (progress[wordId]?.wrongCount || 0)
                  }
                };
                setProgress(updatedProgress);
                if (isGuest) {
                  localStorage.setItem('guest_progress', JSON.stringify(updatedProgress));
                } else if (profile) {
                  try {
                    await setDoc(
                      doc(db, `users/${profile.uid}/progress`, wordId),
                      toStoredProgress(profile.uid, wordId, updatedProgress[wordId])
                    );
                  } catch (err) {
                     console.error("Failed to update progress in DB", err);
                     setProgress(progress);
                     toast.error('Không thể lưu tiến độ luyện tập lên Cloud.');
                  }
                }
              }}
            />
          )}
          {currentView === 'settings' && (
            <SettingsView 
              isGuest={isGuest}
              profile={profile}
              progress={progress}
              onCancel={() => setCurrentView('dashboard')}
              onImportBackup={async (backup) => {
                const importedProgress = backup.progress || {};
                const importedProfile = backup.profile ? { ...profile, ...backup.profile } : profile;

                if (isGuest) {
                  setProgress(importedProgress);
                  if (importedProfile) {
                    setProfile(importedProfile);
                    localStorage.setItem('guest_profile', JSON.stringify(importedProfile));
                  }
                  localStorage.setItem('guest_progress', JSON.stringify(importedProgress));
                  return;
                }

                if (user && importedProfile) {
                  const cloudProfile = {
                    ...importedProfile,
                    uid: user.uid,
                    email: user.email || importedProfile.email,
                  };
                  const batch = writeBatch(db);
                  batch.set(doc(db, 'users', user.uid), cloudProfile);
                  Object.entries(importedProgress).forEach(([wordId, item]) => {
                    batch.set(doc(db, `users/${user.uid}/progress`, wordId), toStoredProgress(user.uid, wordId, item));
                  });
                  await batch.commit();
                  setProfile(cloudProfile);
                  setProgress(importedProgress);
                }
              }}
              onUpdateProfile={async (updates: Partial<UserProfile>) => {
                 if (profile && !isGuest) {
                    const previousProfile = profile;
                    const newProfile = { ...profile, ...updates };
                    setProfile(newProfile);
                    try {
                       await updateDoc(doc(db, 'users', profile.uid), updates);
                    } catch (err) {
                       console.error('Failed to update profile', err);
                       setProfile(previousProfile);
                       toast.error('Lỗi khi lưu cấu hình.');
                    }
                 } else if (profile && isGuest) {
                    const newProfile = { ...profile, ...updates };
                    setProfile(newProfile);
                    localStorage.setItem('guest_profile', JSON.stringify(newProfile));
                 }
              }}
              onResetProgress={async () => {
                if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ tiến độ học tập? (Dữ liệu không thể khôi phục)")) {
                  try {
                    const resetProfile = profile ? { ...profile, totalWordsLearned: 0, streak: 1, history: [] } : null;

                    if (isGuest) {
                      localStorage.removeItem('guest_progress');
                      if (resetProfile) {
                        localStorage.setItem('guest_profile', JSON.stringify(resetProfile));
                      }
                    } else if (user) {
                      const progressSnap = await getDocs(collection(db, `users/${user.uid}/progress`));
                      const batch = writeBatch(db);
                      progressSnap.forEach((progressDoc) => {
                        batch.delete(progressDoc.ref);
                      });
                      batch.update(doc(db, 'users', user.uid), {
                        totalWordsLearned: 0,
                        streak: 1,
                        history: []
                      });
                      await batch.commit();
                      toast.success("Đã xóa tiến độ học tập trên Cloud.");
                    }

                    setProgress({});
                    setProfile(resetProfile);
                    toast.success("Đã cài đặt lại tiến trình học tập.");
                  } catch (err) {
                    console.error('Failed to reset progress', err);
                    toast.error('Không thể xóa tiến độ học tập. Vui lòng thử lại.');
                  }
                }
              }}
            />
          )}
          {currentView === 'stats' && (
            <Suspense fallback={<div className="py-24 text-center text-zinc-500 font-bold">Đang tải thống kê...</div>}>
              <StatsView 
                progress={progress}
                onBack={() => setCurrentView('dashboard')}
              />
            </Suspense>
          )}
        </AnimatePresence>

        <Modal 
          isOpen={!!explainingWord} 
          onClose={() => setExplainingWord(null)} 
          title={`Tìm hiểu thêm: ${explainingWord?.word}`}
        >
          {isExplaining ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 border-2 border-black border-t-transparent rounded-full" />
              <p className="text-neutral-500 font-medium animate-pulse">AI đang giải thích...</p>
            </div>
          ) : (
            <ReactMarkdown>{explainingWord?.content || ''}</ReactMarkdown>
          )}
        </Modal>
      </main>
    </div>
  );
}

// --- Views ---

function Dashboard({ 
  profile, 
  progress, 
  onStartReview,
  onStartQuiz,
  onStartPractice,
  onSyncTasks,
  onSyncCalendar,
  onExportDrive,
  syncingAction,
  isGuest,
  onViewStats
}: { 
  profile: UserProfile | null; 
  progress: UserProgress;
  onStartReview: () => void;
  onStartQuiz: () => void;
  onStartPractice: () => void;
  onSyncTasks: () => void;
  onSyncCalendar: () => void;
  onExportDrive: () => void;
  syncingAction: SyncAction | null;
  isGuest: boolean;
  onViewStats: () => void;
}) {
  const reviewCount = VOCABULARY.filter(w => {
    const p = progress[w.id];
    if (!p) return true; // New words
    return new Date(p.nextReviewDate) <= new Date();
  }).length;
  const dailyGoal = profile?.dailyGoal || 15;
  const todayKey = new Date().toLocaleDateString();
  const todayStudiedCount = profile?.history
    ?.filter((session) => new Date(session.date).toLocaleDateString() === todayKey)
    .reduce((total, session) => {
      const value = Number(session.score?.replace(/\D/g, '') || 0);
      return total + (Number.isFinite(value) ? value : 0);
    }, 0) || 0;
  const dailyPlan = VOCABULARY
    .map((word) => ({ word, progress: progress[word.id] }))
    .sort((a, b) => {
      const aWrong = a.progress?.wrongCount || 0;
      const bWrong = b.progress?.wrongCount || 0;
      if (aWrong !== bWrong) return bWrong - aWrong;
      const aDue = a.progress ? new Date(a.progress.nextReviewDate).getTime() : 0;
      const bDue = b.progress ? new Date(b.progress.nextReviewDate).getTime() : 0;
      return aDue - bDue;
    })
    .slice(0, Math.min(20, dailyGoal));
  const weakWords = VOCABULARY
    .filter((word) => (progress[word.id]?.wrongCount || 0) > 0)
    .sort((a, b) => (progress[b.id]?.wrongCount || 0) - (progress[a.id]?.wrongCount || 0))
    .slice(0, 5);
  const syncDisabled = syncingAction !== null || isGuest;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-[#0c0c0e] text-white border-zinc-800 shadow-2xl flex flex-col justify-between min-h-[auto] sm:min-h-[320px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10 space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
              <div className={cn(
                "px-3 py-1 rounded-full w-fit text-[10px] font-black tracking-widest inline-flex items-center gap-1.5 border uppercase",
                isGuest
                  ? "bg-zinc-800/60 text-zinc-400 border-zinc-700"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              )}>
                <Sparkles className="w-3 h-3" />
                {isGuest ? "Offline guest" : "Google connected"}
              </div>
              <div className="grid grid-cols-3 gap-2 sm:flex">
                <Button 
                  onClick={onSyncTasks} 
                  disabled={syncDisabled} 
                  variant="outline" 
                  className="rounded-full py-1.5 px-2 sm:px-3 text-[9px] border-zinc-800 bg-zinc-900/50 hover:bg-indigo-600 hover:border-indigo-500"
                >
                  <ClipboardList className="w-3 h-3" />
                  {syncingAction === 'tasks' ? "Syncing..." : "Tasks"}
                </Button>
                <Button 
                  onClick={onExportDrive} 
                  disabled={syncDisabled} 
                  variant="outline" 
                  className="rounded-full py-1.5 px-2 sm:px-3 text-[9px] border-zinc-800 bg-zinc-900/50 hover:bg-emerald-600 hover:border-emerald-500"
                >
                  <FileDown className="w-3 h-3" />
                  {syncingAction === 'drive' ? "Exporting..." : "Drive"}
                </Button>
                <Button 
                  onClick={onSyncCalendar} 
                  disabled={syncDisabled} 
                  variant="outline" 
                  className="rounded-full py-1.5 px-2 sm:px-3 text-[9px] border-zinc-800 bg-zinc-900/50 hover:bg-rose-600 hover:border-rose-500"
                >
                  <Calendar className="w-3 h-3" />
                  {syncingAction === 'calendar' ? "Syncing..." : "Calendar"}
                </Button>
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight break-words">Chào mừng,<br />{profile?.displayName}!</h2>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-8">
            <Button onClick={onStartReview} className="w-full sm:w-auto bg-white text-black hover:bg-zinc-100 px-5 sm:px-10 py-4 sm:py-5 rounded-[20px] text-base sm:text-lg font-bold shadow-2xl">
              Ôn bài ({reviewCount})
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button onClick={onStartQuiz} variant="secondary" className="w-full sm:w-auto px-5 sm:px-8 py-4 sm:py-5 rounded-[20px] text-base sm:text-lg font-bold border border-zinc-800">
              Kiểm tra
              <CheckSquare className="w-5 h-5" />
            </Button>
            <Button onClick={onStartPractice} variant="secondary" className="w-full sm:w-auto px-5 sm:px-8 py-4 sm:py-5 rounded-[20px] text-base sm:text-lg font-bold border border-zinc-800 text-indigo-400 hover:text-indigo-300">
              Luyện tập tự do
              <Target className="w-5 h-5" />
            </Button>
            <div className="flex gap-3 sm:gap-4 items-center pl-0 sm:pl-2">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0c0c0e] bg-zinc-800 shadow-lg" />)}
              </div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{dailyPlan.length} từ trong kế hoạch hôm nay</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4 md:block md:space-y-6">
          <Card className="flex flex-col items-center justify-center text-center p-4 sm:p-6 border-zinc-800/50 bg-[#0c0c0e]/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 rounded-[18px] sm:rounded-[22px] flex items-center justify-center mb-4 border border-orange-500/20 relative">
              <Flame 
                className="text-orange-500 w-6 h-6 sm:w-7 sm:h-7" 
                fill={(profile?.streak || 0) > 0 ? "currentColor" : "none"} 
              />
              {(profile?.streak || 0) > 2 && (
                <motion.div 
                  className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white">{profile?.streak || 0}</div>
            <div className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.2em] mt-2 mb-6">Ngày liên tiếp</div>
            
            {/* 7-day mini heatmap representation */}
            <div className="flex gap-1 w-full justify-center">
              {Array.from({ length: 7 }).map((_, i) => {
                // Calculate if studied on this day (simplified representation)
                // Just visually filling it based on `streak` for a simple robust UI if accurate history filtering is complex inline
                // A better approach: 
                const date = new Date();
                date.setDate(date.getDate() - (6 - i));
                const dateStr = date.toLocaleDateString();
                
                // Let's accurately see if there's history for this day.
                const hasStudied = profile?.history?.some(h => new Date(h.date).toLocaleDateString() === dateStr);
                
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div 
                      className={cn(
                        "w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-[5px] sm:rounded-[6px] border transition-all duration-300",
                        hasStudied 
                          ? "bg-orange-500 border-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]" 
                          : "bg-zinc-800/40 border-zinc-700/50"
                      )}
                    />
                    <span className="text-[9px] text-zinc-600 font-bold">
                      {date.toLocaleDateString('vi-VN', { weekday: 'short' }).charAt(0)}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center py-8 sm:py-10 border-zinc-800/50 bg-[#0c0c0e]/50">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/10 rounded-[18px] sm:rounded-[22px] flex items-center justify-center mb-4 border border-emerald-500/20">
              <CheckCircle2 className="text-emerald-500 w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white">{profile?.totalWordsLearned || 0}</div>
            <div className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.2em] mt-2">Từ đã học</div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-zinc-800/50 bg-[#0c0c0e]/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-400" />
                Kế hoạch hôm nay
              </h3>
              <p className="text-sm text-zinc-500 mt-1">Ưu tiên từ đến hạn, từ sai nhiều và từ mới.</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-indigo-400">{Math.min(todayStudiedCount, dailyGoal)} / {dailyGoal}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">mục tiêu ngày</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dailyPlan.slice(0, 6).map(({ word, progress: item }) => (
              <div key={word.id} className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                <div className="min-w-0">
                  <div className="font-bold text-white truncate">{word.word}</div>
                  <div className="text-xs text-zinc-500 truncate">{word.meaning}</div>
                </div>
                <span className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black uppercase border",
                  item?.wrongCount
                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    : item
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                )}>
                  {item?.wrongCount ? "weak" : item ? "due" : "new"}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-zinc-800/50 bg-[#0c0c0e]/50">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-5">
            <Brain className="w-5 h-5 text-rose-400" />
            Weak Words
          </h3>
          {weakWords.length > 0 ? (
            <div className="space-y-3">
              {weakWords.map((word) => (
                <div key={word.id} className="rounded-2xl border border-rose-500/10 bg-rose-500/5 p-3">
                  <div className="flex justify-between gap-3">
                    <span className="font-bold text-white">{word.word}</span>
                    <span className="text-xs font-black text-rose-400">{progress[word.id]?.wrongCount || 0} lỗi</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">{word.meaning}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500 leading-relaxed">Chưa có từ yếu. Làm quiz hoặc ôn tập để hệ thống ghi nhận các từ cần luyện thêm.</p>
          )}
        </Card>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <History className="w-6 h-6 text-indigo-400" />
            Tiến độ học tập
          </h3>
          <Button 
            onClick={onViewStats} 
            variant="outline" 
            className="rounded-full py-2 px-4 text-xs bg-zinc-900 border-zinc-850 hover:bg-zinc-800 hover:text-indigo-400 hover:border-indigo-505/50 flex items-center gap-2 font-black tracking-wide"
          >
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            Biểu đồ chi tiết
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {[
            { label: 'Từ mới', color: 'text-indigo-400' },
            { label: 'Đang học', color: 'text-orange-400' },
            { label: 'Đã thuộc', color: 'text-emerald-400' },
            { label: 'Thành thạo', color: 'text-indigo-600' }
          ].map((item, i) => {
            const counts = Object.values(progress).filter(p => {
              if (i === 0) return false;
              if (i === 1) return p.repetitions > 0 && p.repetitions < 3;
              if (i === 2) return p.repetitions >= 3 && p.repetitions < 7;
              return p.repetitions >= 7;
            }).length;
            
            const totalWords = VOCABULARY.length;
            const finalCount = i === 0 ? totalWords - Object.keys(progress).length : counts;

            return (
              <Card key={item.label} className="p-4 sm:p-6 flex flex-col gap-2 border-zinc-800/50 bg-[#0c0c0e]/50 hover:border-zinc-700 transition-colors">
                <div className={cn("text-2xl sm:text-3xl font-black", item.color)}>{finalCount}</div>
                <div className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">{item.label}</div>
              </Card>
            );
          })}
        </div>
      </div>

      {profile?.history && profile.history.length > 0 && (
        <div className="space-y-6 pt-10 border-t border-zinc-800/50 mt-12">
          <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <History className="w-6 h-6 text-zinc-400" />
            Lịch sử học tập
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.history.map(session => (
              <Card key={session.id} className="p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-zinc-800/50 bg-[#0c0c0e]/50 hover:bg-zinc-900 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-[16px] flex items-center justify-center border",
                    session.type === 'quiz' ? "bg-rose-500/10 border-rose-500/20 text-rose-500" : "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                  )}>
                    {session.type === 'quiz' ? <CheckSquare className="w-5 h-5" /> : <RotateCcw className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[15px]">
                      {session.type === 'quiz' ? 'Kiểm tra từ vựng' : 'Ôn tập SRS'}
                    </h4>
                    <p className="text-zinc-500 text-xs font-semibold mt-0.5">{session.details}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right sm:pl-4">
                  {session.score && (
                    <div className="flex flex-col items-end">
                       {session.type === 'quiz' ? (
                          <div className="flex items-baseline gap-1">
                             <span className="font-black text-rose-400 text-xl tracking-tighter">
                                {session.details.match(/\((\d+)%\)/)?.[1] || session.score.split('/')[0]}%
                             </span>
                             <span className="text-zinc-600 font-bold text-xs">đúng</span>
                          </div>
                       ) : (
                          <div className="flex items-baseline gap-1">
                             <span className="font-black text-indigo-400 text-xl tracking-tighter">
                                {session.score.replace(/\D/g, '')}
                             </span>
                             <span className="text-zinc-600 font-bold text-xs">từ</span>
                          </div>
                       )}
                    </div>
                  )}
                  <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider mt-1">
                    {new Date(session.date).toLocaleDateString()}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function Browse({ 
  progress, 
  onLearnMore,
  onSyncTask
}: { 
  progress: UserProgress; 
  onLearnMore: (word: string, meaning: string) => void;
  onSyncTask: (word: Word) => void;
}) {
  const topics = Array.from(new Set(VOCABULARY.map(w => w.topic)));
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0]);
  const [inlineExplanations, setInlineExplanations] = useState<Record<string, { loading: boolean, content: string | null, error: string | null }>>({});

  const words = VOCABULARY.filter(w => w.topic === selectedTopic);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleInlineExplain = async (wordId: string, word: string, meaning: string) => {
    if (inlineExplanations[wordId]) {
      // Toggle off if already open
      setInlineExplanations(prev => {
        const next = { ...prev };
        delete next[wordId];
        return next;
      });
      return;
    }

    setInlineExplanations(prev => ({
      ...prev,
      [wordId]: { loading: true, content: null, error: null }
    }));

    try {
      const res = await fetch('/api/gemini/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, meaning }),
      });
      if (!res.ok) throw new Error(await getApiErrorMessage(res));
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setInlineExplanations(prev => ({
        ...prev,
        [wordId]: { loading: false, content: data.text, error: null }
      }));
    } catch (err: any) {
      console.error(err);
      setInlineExplanations(prev => ({
        ...prev,
        [wordId]: { loading: false, content: null, error: err instanceof Error ? err.message : 'Failed to load explanation.' }
      }));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none">
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setSelectedTopic(t)}
            className={cn(
              'px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap border',
              selectedTopic === t 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20' 
                : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-slate-300'
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {words.map(w => {
          const p = progress[w.id];
          return (
            <Card key={w.id} className="group hover:border-zinc-700 transition-all border-zinc-800/80 p-0 overflow-hidden flex flex-col bg-[#0c0c0e]">
              <div className="p-5 sm:p-8 space-y-5 flex-grow">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white break-words">{w.word}</h4>
                    <p className="text-zinc-500 font-mono text-sm mt-1">{w.phonetic}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button 
                      onClick={() => onSyncTask(w)}
                      title="Lưu vào Google Tasks"
                      aria-label="Save to Google Tasks"
                      className="p-2.5 sm:p-3 rounded-2xl bg-zinc-800 text-zinc-400 hover:bg-orange-600 hover:text-white transition-all shadow-lg"
                    >
                      <ClipboardList className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => speak(w.word)}
                      title="Play pronunciation"
                      aria-label="Play pronunciation"
                      className="p-2.5 sm:p-3 rounded-2xl bg-zinc-800 text-zinc-400 hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-slate-200 text-base sm:text-lg leading-snug">{w.meaning}</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md inline-block">{w.pos}</span>
                </div>
                <div className="pt-5 border-t border-zinc-800/50 space-y-3">
                  <p className="text-sm font-medium leading-relaxed text-slate-400 italic">"{w.example}"</p>
                  <p className="text-[13px] text-zinc-600 font-medium leading-relaxed">{w.exampleTranslation}</p>
                </div>
                
                {inlineExplanations[w.id] && (
                  <div className="pt-5 border-t border-zinc-800/50 mt-4">
                    {inlineExplanations[w.id].loading ? (
                      <div className="flex items-center gap-3 text-indigo-400">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-widest animate-pulse">Đang giải thích...</span>
                      </div>
                    ) : inlineExplanations[w.id].error ? (
                      <div className="text-rose-400 text-xs font-bold">
                        {inlineExplanations[w.id].error}
                      </div>
                    ) : (
                      <div className="markdown-body prose prose-invert prose-sm max-w-none text-slate-300">
                        <ReactMarkdown>{inlineExplanations[w.id].content || ''}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                )}

                <Button 
                  onClick={() => handleInlineExplain(w.id, w.word, w.meaning)} 
                  variant="outline" 
                  className={cn(
                    "w-full mt-6 text-[10px] py-2.5 rounded-xl border-zinc-800 uppercase tracking-[0.2em] font-black transition-all",
                    inlineExplanations[w.id] 
                      ? "bg-zinc-800 text-slate-300 hover:bg-zinc-700 hover:text-white"
                      : "hover:border-indigo-500/50 hover:text-indigo-400"
                  )}
                >
                  {inlineExplanations[w.id] ? "Đóng giải thích" : "AI Explain"}
                </Button>
              </div>
              <div className="px-5 sm:px-8 py-4 bg-[#09090b] flex justify-between items-center border-t border-zinc-800/50">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">Trạng thái</span>
                <span className={cn(
                  'text-[10px] font-black uppercase tracking-[0.2em]',
                  p ? 'text-emerald-500' : 'text-zinc-700'
                )}>
                  {p ? 'Mastered' : 'New Word'}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}

function QuizSession({ onCancel, onFinish, onWordResult }: { onCancel: () => void, onFinish?: (score: number, total: number) => void, onWordResult?: (wordId: string, isCorrect: boolean) => void }) {
  const [quizMode, setQuizMode] = useState<'standard' | 'ai' | null>(null);
  const [questions, setQuestions] = useState<{ word: Word; questionText: string; options: string[]; answer: string; type: 'mcq' | 'fill'; hint?: string; translation?: string; explanation?: string; isAi?: boolean }[]>([]);
  const [missedAnswers, setMissedAnswers] = useState<{ word: Word; userAnswer: string; correctAnswer: string }[]>([]);
  const [mistakeReview, setMistakeReview] = useState<string | null>(null);
  const [isReviewingMistakes, setIsReviewingMistakes] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startQuiz = async (mode: 'standard' | 'ai') => {
    setQuizMode(mode);
    setIsLoading(true);
    setCurrentIndex(0);
    setSelectedOption(null);
    setTypedAnswer('');
    setScore(0);
    setIsFinished(false);
    setShowAnswer(false);
    setShowHint(false);
    setMissedAnswers([]);
    setMistakeReview(null);

    if (mode === 'standard') {
      try {
        const selectedWords = [...VOCABULARY]
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);

        const localQuestions = selectedWords.map(word => {
          const distractors = VOCABULARY
            .filter(w => w.id !== word.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(w => w.meaning);
          
          const type = (Math.random() > 0.5 ? 'mcq' : 'fill') as 'mcq' | 'fill';
          
          if (type === 'fill') {
            return {
              word,
              questionText: `Hãy điền từ tiếng Anh có nghĩa là: "${word.meaning}"`,
              options: [],
              answer: word.word,
              type,
              isAi: false
            };
          } else {
            return {
              word,
              questionText: "Nghĩa của từ này là gì?",
              options: [...distractors, word.meaning].sort(() => Math.random() - 0.5),
              answer: word.meaning,
              type,
              isAi: false
            };
          }
        });
        setQuestions(localQuestions);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const selectedWords = [...VOCABULARY]
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);

        const res = await fetch('/api/gemini/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ words: selectedWords.map(w => ({ word: w.word, meaning: w.meaning })) })
        });
        
        if (!res.ok) throw new Error(await getApiErrorMessage(res));
        const data = await res.json();
        const aiQuestions = data.questions;

        const combined = selectedWords.map(word => {
          const aiQ = aiQuestions.find((q: any) => q.wordId === word.word || q.options?.includes(word.word) || q.answer === word.word);
          
          if (aiQ && aiQ.questionText) {
             return {
               word,
               questionText: aiQ.questionText,
               options: aiQ.options || [],
               answer: aiQ.answer,
               type: aiQ.type || 'mcq',
               hint: aiQ.hint,
               translation: aiQ.translation,
               explanation: aiQ.explanation,
               isAi: true
             };
          }

          // Fallback
          const type = (Math.random() > 0.5 ? 'mcq' : 'fill') as 'mcq' | 'fill';
          const distractors = VOCABULARY
            .filter(w => w.id !== word.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(w => w.meaning);
          
          if (type === 'fill') {
            return {
              word,
              questionText: `Hãy điền từ tiếng Anh có nghĩa là: "${word.meaning}"`,
              options: [],
              answer: word.word,
              type,
              isAi: false
            };
          } else {
            return {
              word,
              questionText: "Nghĩa của từ này là gì?",
              options: [...distractors, word.meaning].sort(() => Math.random() - 0.5),
              answer: word.meaning,
              type,
              isAi: false
            };
          }
        });

        setQuestions(combined);
      } catch (err) {
        console.error(err);
        toast.error(err instanceof Error ? `AI quiz: ${err.message}. Đang dùng quiz offline.` : 'Không thể tạo AI quiz, đang dùng quiz offline.');
        // Fallback local quiz
        const selectedWords = [...VOCABULARY].sort(() => Math.random() - 0.5).slice(0, 10);
        setQuestions(selectedWords.map(word => {
          const distractors = VOCABULARY.filter(w => w.id !== word.id).sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.meaning);
          const type = (Math.random() > 0.5 ? 'mcq' : 'fill') as 'mcq' | 'fill';
          
          if (type === 'fill') {
            return {
              word,
              questionText: `Hãy điền từ tiếng Anh có nghĩa là: "${word.meaning}"`,
              options: [],
              answer: word.word,
              type,
              isAi: false
            };
          } else {
            return {
              word,
              questionText: "Nghĩa của từ này là gì?",
              options: [...distractors, word.meaning].sort(() => Math.random() - 0.5),
              answer: word.meaning,
              type,
              isAi: false
            };
          }
        }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleMCQSelect = (option: string) => {
    if (showAnswer) return;
    setSelectedOption(option);
    setShowAnswer(true);
    const isCorrect = option === questions[currentIndex].answer;
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setMissedAnswers(prev => [...prev, { word: questions[currentIndex].word, userAnswer: option, correctAnswer: questions[currentIndex].answer }]);
    }
    if (onWordResult) {
      onWordResult(questions[currentIndex].word.id, isCorrect);
    }
  };

  const handleFillSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (showAnswer || !typedAnswer.trim()) return;
    
    setShowAnswer(true);
    // Flexible matching: ignore case and trim
    const isCorrect = typedAnswer.trim().toLowerCase() === questions[currentIndex].answer.toLowerCase();
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setMissedAnswers(prev => [...prev, { word: questions[currentIndex].word, userAnswer: typedAnswer, correctAnswer: questions[currentIndex].answer }]);
    }
    setSelectedOption(typedAnswer);
    if (onWordResult) {
      onWordResult(questions[currentIndex].word.id, isCorrect);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setTypedAnswer('');
      setShowAnswer(false);
      setShowHint(false);
    } else {
      setIsFinished(true);
      const finalScore = questions.length - missedAnswers.length;
      if (onFinish) {
        onFinish(finalScore, questions.length);
      }
      if (missedAnswers.length > 0) {
        setIsReviewingMistakes(true);
        fetch('/api/gemini/mistake-review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mistakes: missedAnswers.map((item) => ({
              word: item.word.word,
              meaning: item.word.meaning,
              userAnswer: item.userAnswer,
              correctAnswer: item.correctAnswer,
            })),
          }),
        })
          .then(async (res) => {
            if (!res.ok) throw new Error(await getApiErrorMessage(res));
            return res.json();
          })
          .then((data) => setMistakeReview(data.text || null))
          .catch((err) => {
            console.error(err);
            setMistakeReview(err instanceof Error ? err.message : null);
          })
          .finally(() => setIsReviewingMistakes(false));
      }
    }
  };

  if (!quizMode) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8 sm:space-y-12 py-4 sm:py-6 text-center"
      >
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chọn chế độ kiểm tra
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-medium">
            Chọn cách bạn muốn kiểm tra từ vựng. Trắc nghiệm offline nhanh chóng hoặc tối ưu ngữ cảnh bằng AI thông minh bổ trợ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Card onClick={() => startQuiz('standard')} className="p-5 sm:p-8 cursor-pointer hover:border-emerald-500 hover:bg-emerald-500/5 transition-all border-zinc-800 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 shrink-0 rounded-[20px] bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors border border-emerald-500/20">
              <CheckSquare className="w-8 h-8" />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-bold text-white text-xl">Kiểm tra tiêu chuẩn</h3>
              <p className="text-zinc-500 text-sm mt-1">Làm bài trắc nghiệm nhanh và điền từ vựng chuẩn xác từ thư viện. Tải ngay lập tức, không có thời gian chờ.</p>
            </div>
          </Card>
          
          <Card onClick={() => startQuiz('ai')} className="p-5 sm:p-8 cursor-pointer hover:border-indigo-500 hover:bg-indigo-500/5 transition-all border-zinc-800 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 shrink-0 rounded-[20px] bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors border border-indigo-500/20">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-bold text-white text-xl">Thử thách ngữ cảnh AI</h3>
              <p className="text-zinc-500 text-sm mt-1">Sử dụng mô hình AI Gemini tiên tiến sinh ngẫu nhiên các câu ngữ cảnh tiếng Anh đời sống & doanh nghiệp để điền từ khuyết thiếu.</p>
            </div>
          </Card>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button onClick={onCancel} variant="ghost" className="text-zinc-500 hover:text-white uppercase tracking-widest text-xs font-black">
            Quay lại Dashboard
          </Button>
        </div>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center space-y-6">
        <div className="w-16 h-16 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin mx-auto" />
        <h2 className="text-xl font-bold font-mono tracking-widest uppercase text-indigo-400">✨ AI Generator ✨</h2>
        <p className="text-zinc-500 font-medium font-serif italic">Gemma AI is preparing your dynamic quiz...</p>
      </div>
    );
  }

  if (questions.length === 0) return null;

  if (isFinished) {
    const finalScore = questions.length - missedAnswers.length;
    const percentage = (finalScore / questions.length) * 100;
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto text-center space-y-10 py-10"
      >
        <div className="space-y-4">
          <div className="w-32 h-32 bg-indigo-600 rounded-[40px] mx-auto flex items-center justify-center shadow-2xl shadow-indigo-500/40 relative">
             <Trophy className="text-white w-16 h-16" />
             <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
          </div>
          <div className="space-y-1">
            <h2 className="text-4xl font-black tracking-tighter">Kết quả bài thi</h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Bạn đã hoàn thành thử thách!</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <div className="text-4xl font-black text-white">{finalScore} / {questions.length}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-1">Câu trả lời đúng</div>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <div className="text-4xl font-black text-indigo-400">{percentage}%</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-1">Độ chính xác</div>
          </Card>
        </div>

        {missedAnswers.length > 0 && (
          <Card className="bg-zinc-900 border-zinc-800 text-left">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="font-black text-white">AI Mistake Review</h3>
            </div>
            {isReviewingMistakes ? (
              <p className="text-sm text-zinc-500 font-medium">AI đang phân tích các lỗi sai...</p>
            ) : mistakeReview ? (
              <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                <ReactMarkdown>{mistakeReview}</ReactMarkdown>
              </div>
            ) : (
              <div className="space-y-2">
                {missedAnswers.map((item) => (
                  <div key={`${item.word.id}-${item.userAnswer}`} className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">
                    <div className="font-bold text-white">{item.word.word}</div>
                    <div className="text-xs text-zinc-500">Bạn chọn: {item.userAnswer || 'trống'} · Đúng: {item.correctAnswer}</div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        <div className="space-y-3 pt-6">
          <Button onClick={() => { setQuizMode(null); setIsFinished(false); }} className="w-full py-4 text-lg">Làm lại bài thi</Button>
          <Button onClick={onCancel} variant="outline" className="w-full py-4 text-lg border-zinc-800 text-zinc-400">Về Dashboard</Button>
        </div>
      </motion.div>
    );
  }

  const current = questions[currentIndex];
  // Determine if this is a fallback or AI question. AI questions have isAi set to true.
  const isAiScenario = !!current.isAi;

  return (
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
      {/* Quiz Progress */}
      <div className="space-y-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500">
          <span className="text-indigo-400 font-mono tracking-widest flex items-center gap-2">
            {isAiScenario ? (
              <>
                <Sparkles className="w-3 h-3 animate-pulse" />
                AI QUIZ
              </>
            ) : (
              <>
                <CheckSquare className="w-3.5 h-3.5 text-emerald-500" />
                KIỂM TRA TIÊU CHUẨN
              </>
            )}
            - {current.type === 'mcq' ? 'TRẮC NGHIỆM' : 'ĐIỀN TỪ'}
          </span>
          <span className="text-white">Câu {currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-0.5">
          <motion.div 
            className="h-full bg-indigo-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="p-5 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[260px] sm:min-h-[300px] bg-[#0c0c0e] border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600" />
        <div className="space-y-6 w-full max-w-2xl mx-auto pt-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
            {isAiScenario 
              ? "Complete the sentence" 
              : (current.type === 'fill' ? "Điền từ tiếng Anh tương ứng với nghĩa:" : "Nghĩa của từ này là gì?")
            }
          </span>
          
          <h2 className={cn(
            "font-black tracking-tighter text-white whitespace-pre-wrap leading-tight mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 break-words",
            isAiScenario 
              ? "text-2xl sm:text-3xl md:text-4xl text-left font-serif" 
              : (current.type === 'fill' ? "text-2xl sm:text-3xl md:text-5xl text-center" : "text-4xl sm:text-6xl text-center")
          )}>
            {isAiScenario 
              ? current.questionText 
              : (current.type === 'fill' ? current.word.meaning : current.word.word)
            }
            {!isAiScenario && (current.type !== 'fill' || showAnswer) && (
              <button 
                type="button"
                onClick={() => {
                  const utterance = new SpeechSynthesisUtterance(current.word.word);
                  utterance.lang = 'en-US';
                  window.speechSynthesis.speak(utterance);
                }}
                className="w-10 h-10 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-lg shrink-0"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
          </h2>
          
          {!isAiScenario && (current.type !== 'fill' || showAnswer) && (
            <p className="text-xl font-mono text-zinc-600 italic">/{current.word.phonetic}/</p>
          )}
        </div>

        {current.type === 'mcq' ? (
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 pt-10">
            {current.options.map((option, idx) => {
              const isCorrect = option === current.answer;
              const isSelected = option === selectedOption;
              
              let btnClass = "border-zinc-800 bg-zinc-900 text-slate-300 hover:border-zinc-700";
              if (showAnswer) {
                if (isCorrect) btnClass = "border-emerald-500 bg-emerald-500/10 text-emerald-400";
                else if (isSelected) btnClass = "border-rose-500 bg-rose-500/10 text-rose-400";
                else btnClass = "border-zinc-800 bg-zinc-900 opacity-40";
              }

              return (
                <button
                  key={idx}
                  disabled={showAnswer}
                  onClick={() => handleMCQSelect(option)}
                  className={cn(
                  "p-4 sm:p-6 rounded-2xl border-2 text-left transition-all relative group overflow-hidden",
                    btnClass
                  )}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs",
                      isSelected ? "bg-white/20" : "bg-zinc-800"
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="font-bold text-base sm:text-lg leading-snug">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="pt-4 max-w-md mx-auto w-full">
            <form onSubmit={handleFillSubmit} className="space-y-4">
              <input 
                type="text"
                autoFocus
                placeholder={isAiScenario ? "Nhập từ tiếng Anh còn thiếu..." : "Nhập từ tiếng Anh tương ứng..."}
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                disabled={showAnswer}
                className={cn(
                  "w-full bg-zinc-900 border-2 rounded-2xl py-4 px-6 text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-center",
                  showAnswer 
                    ? (typedAnswer.trim().toLowerCase() === current.answer.toLowerCase() 
                        ? "border-emerald-500 bg-emerald-500/10" 
                        : "border-rose-500 bg-rose-500/10")
                    : "border-zinc-800 focus:border-indigo-600"
                )}
              />
              {!showAnswer && (
                <div className="space-y-4">
                  <Button 
                    type="submit"
                    disabled={!typedAnswer.trim()}
                    className="w-full py-4 text-lg font-black tracking-widest uppercase"
                  >
                    Kiểm tra đáp án
                  </Button>
                  
                  {(current.hint || current.type === 'fill') && (
                    <div className="flex flex-col items-center">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        onClick={() => setShowHint(!showHint)}
                        className="text-xs text-zinc-500 hover:text-indigo-400"
                      >
                        {showHint ? "Ẩn gợi ý" : "Cần gợi ý?"}
                      </Button>
                      <AnimatePresence>
                        {showHint && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: 'auto', opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            className="text-sm font-medium text-emerald-400 mt-2 bg-emerald-500/10 px-4.5 py-3 rounded-xl border border-emerald-500/20 text-center w-full max-w-sm space-y-2"
                          >
                            {current.hint && (
                              <p className="leading-relaxed">💡 {current.hint}</p>
                            )}
                            {current.type === 'fill' && (
                              <div className="pt-2 border-t border-emerald-500/10 flex flex-col items-center gap-1 w-full">
                                <span className="text-[10px] text-emerald-500/70 font-black uppercase tracking-widest">Gợi ý chữ cái</span>
                                <span className="font-mono text-base font-black tracking-[0.15em] text-white bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-lg mt-0.5">
                                  {(() => {
                                    const trimmed = current.answer.trim();
                                    let prefixCount = 1;
                                    if (trimmed.length > 3 && trimmed.length <= 6) {
                                      prefixCount = 2;
                                    } else if (trimmed.length > 6) {
                                      prefixCount = 3;
                                    }
                                    let chars = trimmed.split("");
                                    let result = "";
                                    let letterCount = 0;
                                    for (let i = 0; i < chars.length; i++) {
                                      const char = chars[i];
                                      if (/[a-zA-Z]/.test(char)) {
                                        if (letterCount < prefixCount) {
                                          result += char;
                                          letterCount++;
                                        } else {
                                          result += "_";
                                        }
                                      } else {
                                        result += char;
                                      }
                                      if (i < chars.length - 1) {
                                        result += " ";
                                      }
                                    }
                                    return result;
                                  })()}
                                </span>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        )}

        {showAnswer && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-6 border-t border-zinc-800/50"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="flex items-start md:items-center gap-3 text-left">
                {(current.type === 'mcq' && selectedOption === current.answer) || 
                 (current.type === 'fill' && typedAnswer.trim().toLowerCase() === current.answer.toLowerCase()) ? (
                  <div className="w-12 h-12 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                    <CheckCircle2 strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-12 h-12 shrink-0 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-500">
                    <AlertCircle strokeWidth={3} />
                  </div>
                )}
                <div>
                  <p className={cn("font-black text-[10px] uppercase tracking-widest", 
                      ((current.type === 'mcq' && selectedOption === current.answer) || 
                       (current.type === 'fill' && typedAnswer.trim().toLowerCase() === current.answer.toLowerCase())) 
                      ? 'text-emerald-500' : 'text-rose-500')}>
                    {((current.type === 'mcq' && selectedOption === current.answer) || 
                      (current.type === 'fill' && typedAnswer.trim().toLowerCase() === current.answer.toLowerCase())) 
                      ? 'Chính xác!' : 'Chưa đúng rồi...'}
                  </p>
                  <div className="flex flex-col gap-1 mt-1">
                     <p className="font-bold text-white text-lg leading-snug">
                       Đáp án đúng: <span className="text-emerald-400">{current.answer}</span>
                     </p>
                     {current.translation && (
                        <p className="text-sm text-zinc-400 italic mt-1 leading-relaxed border-l-2 border-zinc-700 pl-3">
                          {current.translation}
                        </p>
                     )}
                  </div>
                </div>
              </div>
              <Button onClick={nextQuestion} className="w-full md:w-auto px-10 py-4 shadow-xl shrink-0">
                {currentIndex === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            
            {((current.type === 'mcq' && selectedOption !== current.answer) || 
              (current.type === 'fill' && typedAnswer.trim().toLowerCase() !== current.answer.toLowerCase())) && current.explanation && (
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 md:p-6 text-left">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-2 flex items-center gap-2">
                   <Sparkles className="w-3 h-3" />
                   AI Giải thích lỗi sai
                 </h4>
                 <p className="text-sm font-medium text-slate-300 leading-relaxed">
                   {current.explanation}
                 </p>
              </div>
            )}
          </motion.div>
        )}
      </Card>
      
      <div className="flex justify-center">
        <Button onClick={onCancel} variant="ghost" className="text-zinc-600 font-bold uppercase tracking-widest text-[10px] hover:text-rose-500">
          Hủy bỏ bài thi
        </Button>
      </div>
    </div>
  );
}

function ReviewSession({ 
  progress, 
  profile,
  isGuest,
  setProfile,
  onFinish,
  onCancel,
  onLearnMore
}: { 
  progress: UserProgress;
  profile: UserProfile | null;
  isGuest: boolean;
  setProfile: (p: UserProfile | null) => void;
  onFinish: (p: UserProgress, wordsReviewed: number) => void;
  onCancel: () => void;
  onLearnMore: (word: string, meaning: string) => void;
}) {
  const [sessionWords, setSessionWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [newProgress, setNewProgress] = useState<UserProgress>({ ...progress });

  useEffect(() => {
    const wordsToReview = VOCABULARY.filter(w => {
      const p = progress[w.id];
      if (!p) return true;
      return new Date(p.nextReviewDate) <= new Date();
    }).slice(0, 15); // Limit session size
    
    // Shuffle
    const shuffled = [...wordsToReview].sort(() => Math.random() - 0.5);
    setSessionWords(shuffled);
  }, []);

  const handleRate = async (quality: number) => {
    const word = sessionWords[currentIndex];
    const prevSRS = newProgress[word.id] || { 
      easiness: initialSRS.easiness, 
      interval: initialSRS.interval, 
      repetitions: initialSRS.repetitions,
      nextReviewDate: new Date().toISOString()
    };
    
    // Map existing structure to initialSRS and perform calculation
    const nextSRS = calculateNextReview(quality, {
      ...prevSRS,
      nextReviewDate: new Date(prevSRS.nextReviewDate)
    });

    let newWrongCount = prevSRS.wrongCount || 0;
    if (quality === 1) {
      newWrongCount += 1;
    } else if (quality >= 4 && newWrongCount > 0) {
      newWrongCount -= 1;
    }

    const updatedProgress = {
      ...newProgress,
      [word.id]: {
        ...nextSRS,
        nextReviewDate: nextSRS.nextReviewDate.toISOString(),
        lastReviewDate: new Date().toISOString(),
        wrongCount: newWrongCount
      }
    };

    setNewProgress(updatedProgress);

    // Save to Local/Cloud
    try {
      if (isGuest) {
        localStorage.setItem('guest_progress', JSON.stringify(updatedProgress));
        
        if (quality >= 3 && (!progress[word.id] || progress[word.id].repetitions === 0)) {
          const newProfile = {
            ...profile!,
            totalWordsLearned: (profile?.totalWordsLearned || 0) + 1
          };
          setProfile(newProfile);
          localStorage.setItem('guest_profile', JSON.stringify(newProfile));
        }
      } else {
        const uid = auth.currentUser?.uid;
        if (uid) {
          await setDoc(
            doc(db, `users/${uid}/progress`, word.id),
            toStoredProgress(uid, word.id, updatedProgress[word.id])
          );
          
          // If it's a first repetition and quality is good, update totalWordsLearned
          if (quality >= 3 && (!progress[word.id] || progress[word.id].repetitions === 0)) {
             const profileRef = doc(db, 'users', uid);
             const pSnap = await getDoc(profileRef);
             if(pSnap.exists()) {
                await updateDoc(profileRef, {
                  totalWordsLearned: (pSnap.data().totalWordsLearned || 0) + 1
                });
                setProfile({
                   ...profile!,
                   totalWordsLearned: (pSnap.data().totalWordsLearned || 0) + 1
                });
             }
          }
        }
      }
    } catch (err) {
      console.error('Error saving progress:', err);
    }

    if (currentIndex < sessionWords.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => Math.min(prev + 1, sessionWords.length - 1)), 150);
    } else {
      toast.success('Review session finished!');
      onFinish(updatedProgress, sessionWords.length);
    }
  };

  const currentWord = sessionWords[currentIndex];

  const speak = (e: React.MouseEvent | null, text: string) => {
    if (e) e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (sessionWords.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-8 max-w-md mx-auto">
        <div className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center shadow-2xl relative">
          <div className="absolute inset-0 bg-indigo-600/10 blur-2xl rounded-full" />
          <BookOpen className="w-12 h-12 text-indigo-400 relative z-10" />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-white tracking-tighter">Học xong rồi!</h3>
          <p className="text-zinc-500 font-medium">Bạn đã hoàn thành tất cả các từ cần ôn tập trong hôm nay. Thật tuyệt vời!</p>
        </div>
        <Button onClick={onCancel} variant="primary" className="w-full py-4 rounded-2xl">Quay lại Dashboard</Button>
      </div>
    );
  }

  return (
     <div className="max-w-2xl mx-auto flex flex-col min-h-[60vh] gap-6 sm:gap-8">
      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <span className="text-white">Session Progress</span>
          <span className="text-indigo-400">{currentIndex + 1} / {sessionWords.length}</span>
        </div>
        <div className="h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-0.5">
          <motion.div 
            className="h-full bg-indigo-600 rounded-full shadow-[0_0_12px_rgba(79,70,229,0.4)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / sessionWords.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="flex-grow flex items-center justify-center py-4 sm:py-10 perspective-1000">
        <motion.div
           onClick={() => {
             if (!isFlipped && localStorage.getItem('app_sound') !== 'false') {
               speak(null, currentWord?.word);
             }
             setIsFlipped(!isFlipped);
           }}
           animate={{ rotateY: isFlipped ? 180 : 0 }}
           transition={{ type: 'spring', stiffness: 260, damping: 20 }}
           className="relative w-full max-w-[440px] h-[min(420px,62vh)] sm:h-[480px] preserve-3d cursor-pointer shadow-2xl shadow-black/50 rounded-[32px] sm:rounded-[48px]"
        >
          {/* Front */}
          <div className={cn(
            "absolute inset-0 bg-zinc-900 border border-zinc-800 text-white p-6 sm:p-12 flex flex-col items-center justify-center text-center backface-hidden rounded-[32px] sm:rounded-[48px]",
            isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
          )}>
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 flex gap-2">
               <span className="bg-indigo-500/10 text-indigo-400 text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full border border-indigo-500/20">VOCABULARY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4 break-words">{currentWord?.word}</h1>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-base sm:text-xl font-mono text-zinc-500 italic">/{currentWord?.phonetic}/</p>
              <button 
                onClick={(e) => speak(e, currentWord?.word)}
                title="Play pronunciation"
                aria-label="Play pronunciation"
                className="w-10 h-10 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-lg"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <div className="w-16 h-16 rounded-3xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-xl">
              <RotateCcw className="w-6 h-6 text-indigo-400" />
            </div>
          </div>

          {/* Back */}
          <div className={cn(
            "absolute inset-0 bg-zinc-900 border border-zinc-800 p-6 sm:p-12 flex flex-col items-center justify-center text-center backface-hidden rounded-[32px] sm:rounded-[48px]",
            !isFlipped ? "rotate-y-180 opacity-0 pointer-events-none" : "rotate-y-180 opacity-100"
          )}>
             <div className="flex-grow flex flex-col items-center justify-center gap-4 sm:gap-8 min-h-0">
               <div className="space-y-3">
                 <h2 className="text-2xl sm:text-4xl font-bold tracking-tighter text-white leading-tight">{currentWord?.meaning}</h2>
                 <p className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em]">{currentWord?.pos}</p>
               </div>
               <div className="h-px w-24 bg-zinc-800" />
               <div className="space-y-3 sm:space-y-4 px-0 sm:px-2 overflow-y-auto">
                 <p className="text-base sm:text-xl font-medium italic text-slate-300 leading-snug">"{currentWord?.example}"</p>
                 <p className="text-[15px] text-zinc-500 font-medium leading-relaxed">{currentWord?.exampleTranslation}</p>
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onLearnMore(currentWord.word, currentWord.meaning);
                  }}
                  className="mx-auto block mt-6 text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all tracking-[0.2em]"
                 >
                   Deep Explain by AI
                 </button>
               </div>
            </div>
            
            <div className="w-full grid grid-cols-4 gap-2 sm:gap-3 mt-5 sm:mt-10">
              {[
                { q: 1, label: 'Again', color: 'border-rose-900/50 bg-rose-950/20 text-rose-400 hover:bg-rose-950/40' },
                { q: 3, label: 'Hard', color: 'border-orange-900/50 bg-orange-950/20 text-orange-400 hover:bg-orange-950/40' },
                { q: 4, label: 'Good', color: 'border-emerald-900/50 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/40' },
                { q: 5, label: 'Easy', color: 'border-indigo-900/50 bg-indigo-950/20 text-indigo-400 hover:bg-indigo-950/40' },
              ].map(btn => (
                <button
                  key={btn.q}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRate(btn.q);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-2 py-3 sm:py-4 rounded-2xl transition-all active:scale-95 border",
                    btn.color,
                    "font-bold text-[10px] uppercase tracking-tighter shadow-lg"
                  )}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <Button onClick={onCancel} variant="ghost" className="text-zinc-500 font-black uppercase tracking-widest text-[10px] hover:text-rose-500 mt-8">
          Hủy bỏ phiên học
        </Button>
      </div>
    </div>
  );
}

function PracticeSession({ 
  progress, 
  onCancel,
  onFinish,
  onUpdateProgress
}: { 
  progress: UserProgress;
  onCancel: () => void;
  onFinish: (mode: string, wordsCount: number) => void;
  onUpdateProgress: (wordId: string, nextSRS: any) => void;
}) {
  const [mode, setMode] = useState<'easy' | 'medium' | 'hard' | 'mistakes' | null>(null);
  const [practiceWords, setPracticeWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const startPractice = (difficulty: 'easy' | 'medium' | 'hard' | 'mistakes') => {
    let filtered = VOCABULARY.filter(w => {
      const p = progress[w.id];
      if (difficulty === 'easy') {
        return p && p.easiness > 2.8;
      }
      if (difficulty === 'medium') {
        return p && p.easiness >= 2.5 && p.easiness <= 2.8;
      }
      if (difficulty === 'hard') {
        return !p || p.easiness < 2.5; 
      }
      if (difficulty === 'mistakes') {
        return p && p.wrongCount && p.wrongCount > 0;
      }
      return true;
    });

    if (filtered.length === 0) {
      if (difficulty === 'mistakes') {
         toast.success('Tuyệt vời! Bạn chưa có từ sai nào. Đang tải một số từ phức tạp...');
         filtered = VOCABULARY.filter(w => {
           const p = progress[w.id];
           return p && p.easiness < 2.5;
         });
         if (filtered.length === 0) {
            filtered = VOCABULARY.filter(w => !progress[w.id]);
         }
      } else if (difficulty === 'hard') {
         filtered = VOCABULARY.filter(w => !progress[w.id]);
      } else {
         toast.error('Không có từ nào trong danh mục này! Hãy thử mức độ khác.');
         return;
      }
    }

    if (difficulty === 'mistakes') {
      // Prioritize by highest wrongCount first
      filtered = [...filtered].sort((a, b) => {
        const countA = progress[a.id]?.wrongCount || 0;
        const countB = progress[b.id]?.wrongCount || 0;
        return countB - countA;
      });
    } else {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }

    setPracticeWords(filtered.slice(0, 15));
    setMode(difficulty);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleRate = async (quality: number) => {
    const word = practiceWords[currentIndex];
    const prevSRS = progress[word.id] || { 
      easiness: initialSRS.easiness, 
      interval: initialSRS.interval, 
      repetitions: initialSRS.repetitions,
      nextReviewDate: new Date().toISOString()
    };
    
    // Adjust quality slightly based on difficulty to influence interval correctly
    let adjustedQuality = quality;
    if (mode === 'hard' && quality >= 4) {
       adjustedQuality = Math.min(5, quality + 1); // Reward more for getting hard words right
    } else if (mode === 'easy' && quality < 4) {
       adjustedQuality = Math.max(1, quality - 1); // Penalize more for getting easy words wrong
    }

    let newWrongCount = prevSRS.wrongCount || 0;
    if (quality === 1) {
      newWrongCount += 1;
    } else if (quality >= 4 && newWrongCount > 0) {
      newWrongCount -= 1;
    }

    const nextSRS = calculateNextReview(adjustedQuality, {
      ...prevSRS,
      nextReviewDate: new Date(prevSRS.nextReviewDate)
    });

    onUpdateProgress(word.id, {
      ...nextSRS,
      wrongCount: newWrongCount
    });

    setIsFlipped(false);
    if (currentIndex >= practiceWords.length - 1) {
      onFinish(mode || 'practice', practiceWords.length);
    } else {
      setTimeout(() => setCurrentIndex(prev => Math.min(prev + 1, practiceWords.length - 1)), 150);
    }
  };

  const speak = (e: any, text: string | undefined) => {
    if (e) e.stopPropagation();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (!mode) {
    const mistakeWordsCount = Object.values(progress).filter(p => p.wrongCount && p.wrongCount > 0).length;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8 sm:space-y-12 mt-4 sm:mt-10 w-full"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
            Luyện Chọn Lọc
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-medium">
            Chọn độ khó hoặc bộ từ đặc biệt để luyện tập. Tiến độ SRS và lịch sử lỗi sai của bạn sẽ tiếp tục được ghi nhận trong phiên học này.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card onClick={() => startPractice('easy')} className="p-5 sm:p-8 cursor-pointer hover:border-emerald-500 hover:bg-emerald-500/5 transition-all border-zinc-800 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:scale-[1.02] shadow-2xl">
            <div className="w-16 h-16 shrink-0 rounded-[20px] bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-xl">Dễ (Easy)</h3>
              <p className="text-zinc-500 text-sm mt-1">Ôn tập các từ bạn đã quen thuộc (Easiness cao)</p>
            </div>
          </Card>
          
          <Card onClick={() => startPractice('medium')} className="p-5 sm:p-8 cursor-pointer hover:border-indigo-500 hover:bg-indigo-500/5 transition-all border-zinc-800 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:scale-[1.02] shadow-2xl">
            <div className="w-16 h-16 shrink-0 rounded-[20px] bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors border border-indigo-500/20">
              <Brain className="w-8 h-8" />
            </div>
            <div className="text-left">
               <h3 className="font-bold text-white text-xl">Vừa (Medium)</h3>
              <p className="text-zinc-500 text-sm mt-1">Các từ đang trong quá trình ghi nhớ</p>
            </div>
          </Card>
          
          <Card onClick={() => startPractice('hard')} className="p-5 sm:p-8 cursor-pointer hover:border-orange-500 hover:bg-orange-500/5 transition-all border-zinc-800 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:scale-[1.02] shadow-2xl">
            <div className="w-16 h-16 shrink-0 rounded-[20px] bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-orange-500/20">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="text-left">
               <h3 className="font-bold text-white text-xl">Khó (Hard)</h3>
              <p className="text-zinc-500 text-sm mt-1">Các từ hay sai hoặc từ mới chưa từng học</p>
            </div>
          </Card>

          <Card onClick={() => startPractice('mistakes')} className="p-5 sm:p-8 cursor-pointer hover:border-rose-500 hover:bg-rose-500/5 transition-all border-zinc-800 bg-[#0c0c0e] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 shrink-0 rounded-[20px] bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors border border-rose-500/20">
              <Flame className="w-8 h-8 animate-pulse" />
            </div>
            <div className="text-left flex-1 border-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-xl">Luyện từ hay sai</h3>
                {mistakeWordsCount > 0 && (
                  <span className="bg-rose-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase animate-pulse shrink-0">
                    {mistakeWordsCount} từ
                  </span>
                )}
              </div>
              <p className="text-zinc-500 text-sm mt-1">Luyện lại có trọng tâm các từ bạn đã làm sai ở Quiz hoặc ôn tập. Ưu tiên các từ sai nhiều lần nhất.</p>
            </div>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Button onClick={onCancel} variant="ghost" className="text-zinc-500 hover:text-white uppercase tracking-widest text-xs font-black">
            Quay lại Dashboard
          </Button>
        </div>
      </motion.div>
    );
  }

  const currentWord = practiceWords[currentIndex];
  
  const modeLabel = mode === 'hard' ? 'Khó (Hard)' : 
                    mode === 'medium' ? 'Vừa (Medium)' : 
                    mode === 'easy' ? 'Dễ (Easy)' : 
                    mode === 'mistakes' ? 'Trọng tâm từ sai (Weaknesses)' : 'Luyện tập';

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-zinc-500">
        <span className="text-indigo-400 flex items-center gap-2">
          <Target className="w-4 h-4" />
          {modeLabel}
        </span>
        <span className="bg-zinc-800 px-3 py-1 rounded-full text-white">{currentIndex + 1} / {practiceWords.length}</span>
      </div>

      <div className="h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-0.5">
        <motion.div 
          className="h-full bg-indigo-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / practiceWords.length) * 100}%` }}
        />
      </div>

      <div className="perspective-1000 w-full h-[min(420px,62vh)] sm:h-[450px]">
        <motion.div
            className="w-full h-full relative cursor-pointer"
           animate={{ rotateY: isFlipped ? 180 : 0 }}
           transition={{ type: 'spring', stiffness: 260, damping: 20 }}
           style={{ transformStyle: 'preserve-3d' }}
           onClick={() => {
             if (!isFlipped && localStorage.getItem('app_sound') !== 'false') {
               speak(null, currentWord?.word);
             }
             setIsFlipped(!isFlipped);
           }}
        >
          {/* Front */}
          <div 
             className={cn(
                "absolute inset-0 bg-[#0c0c0e] border border-zinc-800 rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-2xl backface-hidden group",
               isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
             )}
          >
             <div className="absolute top-6 right-6 z-10">
                <button 
                  onClick={(e) => speak(e, currentWord?.word)}
                  className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors shadow-lg border border-zinc-700"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
             </div>
             <p className="text-[11px] font-black tracking-[0.3em] uppercase text-indigo-500 mb-6 group-hover:scale-105 transition-transform">
                Practice
             </p>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-6 px-2 sm:px-4 py-6 sm:py-8 break-words">
                {currentWord?.word}
             </h2>
             <p className="text-xl font-mono text-zinc-500 opacity-80">/{currentWord?.phonetic}/</p>
             <div className="absolute bottom-8 left-0 w-full flex justify-center">
               <span className="text-[10px] uppercase font-black tracking-widest text-zinc-600 flex items-center gap-2">
                  <RotateCcw className="w-3 h-3" />
                  Chạm để lật thẻ
               </span>
             </div>
          </div>

          {/* Back */}
           <div 
             className={cn(
                "absolute inset-0 bg-indigo-600 rounded-[28px] sm:rounded-[32px] p-5 sm:p-10 flex flex-col items-center justify-center text-center shadow-2xl backface-hidden overflow-hidden",
               !isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
             )}
             style={{ transform: 'rotateY(180deg)' }}
           >
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              <div className="relative z-10 w-full">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest border border-white/20 mb-8 inline-block shadow-lg backdrop-blur-sm">
                  {currentWord?.pos}
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 sm:mb-8 drop-shadow-md">
                  {currentWord?.meaning}
                </h2>
                <div className="space-y-3 sm:space-y-4 bg-white/10 p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl backdrop-blur-sm max-h-44 sm:max-h-none overflow-y-auto">
                  <p className="text-base sm:text-xl font-medium italic text-indigo-50 leading-snug">"{currentWord?.example}"</p>
                  <p className="text-[15px] text-indigo-200 font-medium leading-relaxed">{currentWord?.exampleTranslation}</p>
                </div>
              </div>
           </div>
        </motion.div>
      </div>

      <div className={cn(
        "transition-all duration-300 mt-8",
        !isFlipped ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
      )}>
        <p className="text-center text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Đánh giá độ khó để cập nhật tiến độ (SRS)</p>
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {[
            { q: 1, label: 'Again', color: 'border-rose-900/50 bg-rose-950/20 text-rose-400 hover:bg-rose-950/40' },
            { q: 3, label: 'Hard', color: 'border-amber-900/50 bg-amber-950/20 text-amber-400 hover:bg-amber-950/40' },
            { q: 4, label: 'Good', color: 'border-emerald-900/50 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/40' },
            { q: 5, label: 'Easy', color: 'border-indigo-900/50 bg-indigo-950/20 text-indigo-400 hover:bg-indigo-950/40' },
          ].map(btn => (
            <button
              key={btn.q}
              onClick={(e) => {
                e.stopPropagation();
                handleRate(btn.q);
              }}
              className={cn(
                "flex flex-col items-center gap-2 py-4 rounded-2xl transition-all active:scale-95 border",
                btn.color,
                "font-bold text-[10px] uppercase tracking-tighter shadow-lg"
              )}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={onCancel} variant="ghost" className="text-zinc-500 font-black uppercase tracking-widest text-[10px] hover:text-rose-500 transition-colors">
          Kết thúc ngay
        </Button>
      </div>
    </div>
  );
}

function SettingsView({ 
  profile,
  progress,
  isGuest,
  onResetProgress,
  onCancel,
  onImportBackup,
  onUpdateProfile
}: { 
  profile: UserProfile | null;
  progress: UserProgress;
  isGuest: boolean;
  onResetProgress: () => void;
  onCancel: () => void;
  onImportBackup: (backup: { profile?: UserProfile; progress?: UserProgress }) => Promise<void>;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}) {
  const [notifications, setNotifications] = useState(
    localStorage.getItem('app_notifications') === 'true'
  );
  const [sound, setSound] = useState(
    localStorage.getItem('app_sound') !== 'false'
  );
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(profile?.displayName || '');
  const [goalInput, setGoalInput] = useState(String(profile?.dailyGoal || 15));
  const [isGeneratingAvatar, setIsGeneratingAvatar] = useState(false);

  useEffect(() => {
    if (notifications && 'Notification' in window && Notification.permission === 'granted') {
      scheduleStudyReminder();
    }
  }, [notifications]);

  const handleGenerateAvatar = async () => {
    if (isGuest) {
      toast.error('Chức năng tạo avatar AI chỉ dành cho tài khoản đăng nhập.');
      return;
    }
    setIsGeneratingAvatar(true);
    const toastId = toast.loading('Đang tạo avatar với AI...');
    try {
      const res = await fetch('/api/gemini/generate-avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: "A minimal, clean vector avatar for a professional profile, solid bright background, simple geometric shapes, very cute" })
      });
      if (!res.ok) throw new Error(await getApiErrorMessage(res));
      const data = await res.json();
      if (data.image) {
        onUpdateProfile({ photoURL: data.image });
        toast.success('Đã tạo avatar thành công!', { id: toastId });
      } else {
         throw new Error("No image");
      }
    } catch(err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : 'Không thể tạo avatar, vui lòng thử lại sau.', { id: toastId });
    } finally {
      setIsGeneratingAvatar(false);
    }
  };

  const handleSaveProfile = () => {
    if (!editName.trim()) {
      toast.error('Tên không được để trống');
      return;
    }
    onUpdateProfile({ displayName: editName });
    setIsEditingProfile(false);
    toast.success('Đã cập nhật hồ sơ!');
  };

  const handleSaveGoal = () => {
    const nextGoal = Number(goalInput);
    if (!Number.isInteger(nextGoal) || nextGoal < 5 || nextGoal > 50) {
      toast.error('Mục tiêu mỗi ngày cần nằm trong khoảng 5-50 từ.');
      return;
    }
    onUpdateProfile({ dailyGoal: nextGoal });
    toast.success('Đã cập nhật mục tiêu học tập!');
  };

  const downloadFile = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportBackup = () => {
    downloadFile(
      `toeic-master-backup-${new Date().toISOString().slice(0, 10)}.json`,
      JSON.stringify({ profile, progress, exportedAt: new Date().toISOString() }, null, 2),
      'application/json'
    );
  };

  const exportCsv = () => {
    const rows = [
      ['wordId', 'easiness', 'interval', 'repetitions', 'nextReviewDate', 'lastReviewDate', 'wrongCount'],
      ...Object.entries(progress).map(([wordId, item]) => [
        wordId,
        String(item.easiness),
        String(item.interval),
        String(item.repetitions),
        item.nextReviewDate,
        item.lastReviewDate || '',
        String(item.wrongCount || 0),
      ]),
    ];
    downloadFile(
      `toeic-master-progress-${new Date().toISOString().slice(0, 10)}.csv`,
      rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n'),
      'text/csv'
    );
  };

  const importBackup = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const backup = JSON.parse(await file.text());
      await onImportBackup({ profile: backup.profile, progress: backup.progress });
      toast.success('Đã nhập dữ liệu học tập!');
    } catch (err) {
      console.error(err);
      toast.error('File backup không hợp lệ.');
    } finally {
      event.target.value = '';
    }
  };

  const toggleNotifications = () => {
    const newVal = !notifications;
    setNotifications(newVal);
    localStorage.setItem('app_notifications', String(newVal));
    if (newVal) {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            toast.success('Đã bật thông báo trình duyệt');
            scheduleStudyReminder();
          } else {
            setNotifications(false);
            localStorage.setItem('app_notifications', 'false');
            toast.error('Bạn cần cho phép quyền thông báo trong trình duyệt.');
          }
        });
      } else {
        toast.error('Trình duyệt không hỗ trợ thông báo.');
      }
    } else {
      clearStudyReminder();
      toast.success('Đã tắt thông báo');
    }
  };

  const toggleSound = () => {
    const newVal = !sound;
    setSound(newVal);
    localStorage.setItem('app_sound', String(newVal));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto space-y-8 mt-10 w-full"
    >
      <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
        <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/20">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Cài Đặt Hệ Thống</h2>
          <p className="text-zinc-500 font-medium">Tùy chỉnh trải nghiệm học tập của bạn</p>
        </div>
      </div>

      <div className="space-y-6">
        <Card className="bg-[#0c0c0e] border-zinc-800 p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-white mb-1">Tài khoản & Hồ sơ</h3>
              <p className="text-sm text-zinc-500">Thông tin cá nhân và chế độ hiện tại</p>
            </div>
            {!isGuest && (
              <Button 
                variant="outline" 
                onClick={() => {
                  if (isEditingProfile) handleSaveProfile();
                  else setIsEditingProfile(true);
                }}
                className="text-xs uppercase font-black tracking-widest border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:text-white"
              >
                {isEditingProfile ? 'Lưu hồ sơ' : 'Chỉnh sửa'}
              </Button>
            )}
          </div>
          <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-zinc-800 border-2 border-zinc-700 overflow-hidden relative shadow-xl">
                {profile?.photoURL ? (
                  <img src={profile.photoURL} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600">
                    <UserIcon className="w-10 h-10" />
                  </div>
                )}
                {isGeneratingAvatar && (
                   <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                     <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                   </div>
                )}
              </div>
              <Button 
                onClick={handleGenerateAvatar} 
                disabled={isGeneratingAvatar || isGuest}
                variant="ghost" 
                className="text-[10px] uppercase font-black tracking-widest text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
              >
                <Sparkles className="w-3 h-3 mr-1.5 inline-block" /> Tạo bằng AI
              </Button>
            </div>
            <div className="space-y-4 flex-grow w-full">
              <div className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
                <div className="w-full mr-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">Tên hiển thị</label>
                  {isEditingProfile ? (
                     <input 
                       type="text" 
                       value={editName}
                       onChange={e => setEditName(e.target.value)}
                       className="bg-[#0c0c0e] border border-zinc-700 rounded-xl px-3 py-2 text-white font-bold w-full focus:outline-none focus:border-indigo-500 transition-colors"
                     />
                  ) : (
                    <div className="font-bold text-white text-lg">{profile?.displayName || 'Khách'}</div>
                  )}
                </div>
                <span className={cn(
                  "px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border shrink-0",
                  isGuest 
                    ? "bg-zinc-800 text-zinc-400 border-zinc-700" 
                    : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                )}>
                  {isGuest ? 'Offline' : 'Cloud Sync'}
                </span>
              </div>
              {!isGuest && profile?.email && (
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">Email liên kết</label>
                  <div className="font-bold text-slate-300">{profile.email}</div>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card className="bg-[#0c0c0e] border-zinc-800 p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-800">
            <h3 className="font-bold text-lg text-white mb-1">Mục tiêu học tập</h3>
            <p className="text-sm text-zinc-500">Đặt số từ cần hoàn thành mỗi ngày trên dashboard.</p>
          </div>
          <div className="p-6 flex flex-col sm:flex-row gap-4 sm:items-end">
            <label className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-2">Từ mỗi ngày</span>
              <input
                type="number"
                min={5}
                max={50}
                value={goalInput}
                onChange={(event) => setGoalInput(event.target.value)}
                className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white font-bold w-full focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </label>
            <Button onClick={handleSaveGoal} className="py-3 px-6">
              Lưu mục tiêu
            </Button>
          </div>
        </Card>

        <Card className="bg-[#0c0c0e] border-zinc-800 p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-800">
            <h3 className="font-bold text-lg text-white mb-1">Thiết lập chung</h3>
            <p className="text-sm text-zinc-500">Cấu hình ứng dụng</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300">Giao diện Tối</h4>
                  <p className="text-xs text-zinc-500">Chỉ hỗ trợ giao diện tối (Dark mode)</p>
                </div>
              </div>
              <button 
                onClick={() => toast('Phiên bản Lite hiện tại chỉ hỗ trợ giao diện tối.', { icon: '🌙' })}
                className="w-12 h-6 bg-indigo-500/50 rounded-full relative cursor-not-allowed opacity-50"
              >
                <div className="absolute top-1 left-1 w-4 h-4 bg-white/50 rounded-full translate-x-6"></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300">Âm thanh phát âm</h4>
                  <p className="text-xs text-zinc-500">Tự động phát âm thanh khi lật thẻ từ vựng</p>
                </div>
              </div>
              <button 
                onClick={toggleSound}
                className={cn(
                  "w-12 h-6 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900",
                  sound ? "bg-indigo-500" : "bg-zinc-700"
                )}
              >
                <div className={cn(
                  "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300",
                  sound ? "translate-x-6" : "translate-x-0"
                )}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-300">Thông báo nhắc nhở</h4>
                  <p className="text-xs text-zinc-500">Nhắc nhở ôn tập từ vựng mỗi ngày</p>
                </div>
              </div>
              <button 
                onClick={toggleNotifications}
                className={cn(
                  "w-12 h-6 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900",
                  notifications ? "bg-indigo-500" : "bg-zinc-700"
                )}
              >
                <div className={cn(
                  "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300",
                  notifications ? "translate-x-6" : "translate-x-0"
                )}></div>
              </button>
            </div>
          </div>
        </Card>

        <Card className="bg-[#0c0c0e] border-zinc-800 p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-800">
            <h3 className="font-bold text-lg text-white mb-1">Sao lưu dữ liệu</h3>
            <p className="text-sm text-zinc-500">Xuất hoặc nhập lại tiến độ học tập ngoài Firebase.</p>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button onClick={exportBackup} variant="outline" className="py-3">
              JSON Backup
            </Button>
            <Button onClick={exportCsv} variant="outline" className="py-3">
              CSV Export
            </Button>
            <label className="px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 cursor-pointer border border-zinc-700 text-slate-300 hover:bg-zinc-800 hover:text-white">
              Import JSON
              <input type="file" accept="application/json,.json" onChange={importBackup} className="hidden" />
            </label>
          </div>
        </Card>

        <Card className="bg-rose-500/5 border-rose-500/20 p-0 overflow-hidden">
          <div className="p-6 border-b border-rose-500/20">
            <h3 className="font-bold text-lg text-rose-500 mb-1 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Khu vực nguy hiểm
            </h3>
            <p className="text-sm text-rose-500/70">Các hành động không thể khôi phục</p>
          </div>
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                 <h4 className="font-bold text-slate-300">Xóa tiến trình học tập</h4>
                 <p className="text-xs text-zinc-500 mt-1 max-w-sm">Hành động này sẽ thiết lập lại toàn bộ tiến độ, SRS, lịch sử và chuỗi ngày học của bạn.</p>
              </div>
              <Button onClick={onResetProgress} variant="outline" className="border-rose-500/50 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors shrink-0">
                Reset Data
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={onCancel} variant="ghost" className="text-zinc-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors">
          Quay lại Dashboard
        </Button>
      </div>
    </motion.div>
  );
}
