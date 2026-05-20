import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  TrendingDown,
  ArrowLeft, 
  Info, 
  Brain, 
  Award, 
  BarChart3, 
  CalendarDays,
  Target,
  Sparkles,
  Calendar
} from 'lucide-react';
import { VOCABULARY, Word } from '../data/vocabulary';

// --- Types ---
interface UserProgress {
  [wordId: string]: {
    easiness: number;
    interval: number;
    repetitions: number;
    nextReviewDate: string;
    lastReviewDate?: string;
    wrongCount?: number;
  };
}

interface StatsViewProps {
  progress: UserProgress;
  onBack: () => void;
}

export function StatsView({ progress, onBack }: StatsViewProps) {
  const useSampleData = false;
  // --- Real Stats Calculation ---
  const totalWords = VOCABULARY.length;
  const progressList = Object.values(progress);
  const startedWordsCount = progressList.length;

  // 1. Learned vs In Progress vs New
  // "New": Not in progress or repetitions === 0
  // "In Progress": repetitions > 0 && repetitions < 5
  // "Learned": repetitions >= 5
  const learnedCount = progressList.filter(p => p.repetitions >= 5).length;
  const inProgressCount = progressList.filter(p => p.repetitions > 0 && p.repetitions < 5).length;
  const newCount = totalWords - (learnedCount + inProgressCount);

  // 2. Interval distribution
  const intervalRanges = {
    '1 ngày hoặc ít hơn': 0,
    '2 - 6 ngày': 0,
    '7 - 14 ngày': 0,
    '15 - 30 ngày': 0,
    '> 30 ngày': 0,
  };

  progressList.forEach(p => {
    if (p.interval <= 1) intervalRanges['1 ngày hoặc ít hơn']++;
    else if (p.interval <= 6) intervalRanges['2 - 6 ngày']++;
    else if (p.interval <= 14) intervalRanges['7 - 14 ngày']++;
    else if (p.interval <= 30) intervalRanges['15 - 30 ngày']++;
    else intervalRanges['> 30 ngày']++;
  });

  // 3. Easiness over time
  const getCalculatedEasinessOverTime = () => {
    const records = Object.values(progress).filter(p => p.lastReviewDate);
    if (records.length === 0) return [];

    // Sort alphabetically/chronologically by lastReviewDate
    const sorted = [...records].sort(
      (a, b) => new Date(a.lastReviewDate!).getTime() - new Date(b.lastReviewDate!).getTime()
    );

    // Group or running average
    const data: { date: string; easiness: number }[] = [];
    sorted.forEach((p, idx) => {
      const runningAvg = sorted.slice(0, idx + 1).reduce((sum, item) => sum + item.easiness, 0) / (idx + 1);
      const dateLabel = new Date(p.lastReviewDate!).toLocaleDateString('vi', {
        month: 'numeric',
        day: 'numeric',
      });
      data.push({
        date: dateLabel,
        easiness: parseFloat(runningAvg.toFixed(2)),
      });
    });

    // To prevent graph cluttering, filter or group by date
    const uniqueMap: { [date: string]: number } = {};
    data.forEach(item => {
      uniqueMap[item.date] = item.easiness; // Keep latest running average for each day
    });

    return Object.entries(uniqueMap).map(([date, easiness]) => ({
      date,
      "Độ dễ (EF)": easiness,
    }));
  };

  const calculatedEasinessData = getCalculatedEasinessOverTime();

  // --- Sample Data (for preview / fallback) ---
  const sampleStatusData = [
    { name: 'Từ mới', value: 25, color: '#6366f1' },       // Indigo-500
    { name: 'Đang học', value: 12, color: '#f59e0b' },     // Amber-500
    { name: 'Đã thuộc', value: 8, color: '#10b981' },      // Emerald-500
  ];

  const sampleIntervalData = [
    { range: '1 ngày hoặc ít hơn', 'Số lượng từ': 4 },
    { range: '2 - 6 ngày', 'Số lượng từ': 7 },
    { range: '7 - 14 ngày', 'Số lượng từ': 5 },
    { range: '15 - 30 ngày', 'Số lượng từ': 3 },
    { range: '> 30 ngày', 'Số lượng từ': 1 },
  ];

  const sampleEasinessData = [
    { date: '15/5', 'Độ dễ (EF)': 2.50 },
    { date: '16/5', 'Độ dễ (EF)': 2.53 },
    { date: '17/5', 'Độ dễ (EF)': 2.58 },
    { date: '18/5', 'Độ dễ (EF)': 2.61 },
    { date: '19/5', 'Độ dễ (EF)': 2.65 },
    { date: '20/5', 'Độ dễ (EF)': 2.72 },
  ];

  // --- Final Data Binding ---
  const statusData = useSampleData
    ? sampleStatusData
    : [
        { name: 'Từ mới', value: newCount, color: '#6366f1' },
        { name: 'Đang học', value: inProgressCount, color: '#f59e0b' },
        { name: 'Đã thuộc', value: learnedCount, color: '#10b981' },
      ];

  const intervalData = useSampleData
    ? sampleIntervalData
    : Object.entries(intervalRanges).map(([range, count]) => ({
        range,
        'Số lượng từ': count,
      }));

  const easinessData = useSampleData
    ? sampleEasinessData
    : calculatedEasinessData.length > 0
    ? calculatedEasinessData
    : [
        { date: 'Bắt đầu', 'Độ dễ (EF)': 2.50 }
      ];

  // --- Summary Insights & Metrics ---
  const activeStatusPercentage = startedWordsCount > 0 ? Math.round((learnedCount / totalWords) * 100) : 0;
  const avgEasinessCurrent = useSampleData 
    ? 2.72 
    : progressList.length > 0 
      ? parseFloat((progressList.reduce((sum, p) => sum + p.easiness, 0) / progressList.length).toFixed(2)) 
      : 2.50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 pb-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/60 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack} 
              className="p-2 -ml-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all shadow-md"
              title="Quay lại Dashboard"
              aria-label="Back button"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-2.5">
              <TrendingUp className="text-indigo-400 w-8 h-8" />
              Phân Tích Thống Kê
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-medium">
            Phân tích chi tiết tiến trình ghi nhớ từ vựng qua thuật toán lặp khoảng cách SuperMemo (SM-2).
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-1.5 rounded-2xl w-fit">
          <button
            onClick={() => undefined}
            disabled={Object.keys(progress).length === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              !useSampleData 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-zinc-400 hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            Dữ liệu của bạn
          </button>
          <button
            onClick={() => undefined}
            className={`hidden px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              useSampleData 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-zinc-400 hover:text-slate-300'
            }`}
          >
            Dữ liệu mẫu
          </button>
        </div>
      </div>

      {Object.keys(progress).length === 0 && !useSampleData && (
        <div className="bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-3xl p-6 flex items-start gap-4">
          <Info className="w-6 h-6 shrink-0 text-amber-400" />
          <div className="space-y-1">
            <p className="text-xs text-amber-300/80 leading-relaxed font-medium">
              Ban chua co tien trinh hoc that. Hay quay lai Dashboard de hoc hoac lam quiz, thong ke se tu dong cap nhat tu du lieu cua ban.
            </p>
            <h4 className="font-bold text-sm">Chưa có dữ liệu học tập!</h4>
            <p className="hidden text-xs text-amber-300/80 leading-relaxed font-medium">
              Bạn chưa học từ vựng nào bằng phương pháp lặp khoảng cách (SRS). Hãy bấm "Dữ liệu mẫu" ở trên để xem bản thử trước hoặc bắt đầu ôn từ tại Dashboard để tạo tiến trình thật!
            </p>
          </div>
        </div>
      )}

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="space-y-2 relative z-10">
            <div className="text-zinc-400 font-bold text-xs uppercase tracking-wider">Tổng từ vựng</div>
            <div className="text-4xl font-black text-white">{totalWords}</div>
            <div className="text-[10px] text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded-full inline-block">Mục tiêu TOEIC</div>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 w-12 h-12 rounded-[20px] flex items-center justify-center text-indigo-400 relative z-10">
            <Brain className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="space-y-2 relative z-10">
            <div className="text-zinc-400 font-bold text-xs uppercase tracking-wider">Đang chinh phục</div>
            <div className="text-4xl font-black text-amber-400">{useSampleData ? 20 : startedWordsCount}</div>
            <div className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full inline-block">Đang nằm trong SRS</div>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 w-12 h-12 rounded-[20px] flex items-center justify-center text-amber-400 relative z-10">
            <Target className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="space-y-2 relative z-10">
            <div className="text-zinc-400 font-bold text-xs uppercase tracking-wider">Trình độ Thuộc</div>
            <div className="text-4xl font-black text-emerald-400">{useSampleData ? 8 : learnedCount}</div>
            <div className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block">Repetitions &ge; 5</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 w-12 h-12 rounded-[20px] flex items-center justify-center text-emerald-400 relative z-10">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 flex items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="space-y-2 relative z-10">
            <div className="text-zinc-400 font-bold text-xs uppercase tracking-wider">Độ dễ trung bình (EF)</div>
            <div className="text-4xl font-black text-indigo-400">{avgEasinessCurrent.toFixed(2)}</div>
            <div className="text-[10px] text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded-full inline-block">Tiêu chuẩn: 2.50</div>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 w-12 h-12 rounded-[20px] flex items-center justify-center text-indigo-400 relative z-10">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Learned vs In Progress Donut Chart */}
        <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl min-h-[400px]">
          <div className="space-y-1 pb-4">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-400" />
              Tỷ Lệ Chinh Phục Từ Vựng
            </h3>
            <p className="text-xs text-zinc-500 font-medium">Sự phân hóa của trạng thái từ học tại hệ thống.</p>
          </div>
          
          <div className="relative flex items-center justify-center h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    background: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '16px',
                    color: '#f8fafc',
                    fontFamily: 'sans-serif',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Summary Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
              <span className="text-2xl font-black text-white">
                {useSampleData ? '40%' : `${activeStatusPercentage}%`}
              </span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Chinh Phục</span>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            {statusData.map((item, i) => (
              <div key={item.name} className="flex justify-between items-center py-1 border-b border-zinc-800/40 last:border-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-bold text-zinc-400">{item.name}</span>
                </div>
                <span className="text-xs font-black text-slate-200">{item.value} từ</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interval Distribution Bar Chart */}
        <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 lg:col-span-2 flex flex-col justify-between shadow-2xl min-h-[400px]">
          <div className="space-y-1 pb-4">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Khoảng Cách Ôn Tập (Intervals)
            </h3>
            <p className="text-xs text-zinc-500 font-medium">Khoảng cách lặp lại (ngày) trước khi từ được yêu cầu ôn tập tiếp theo.</p>
          </div>

          <div className="h-64 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={intervalData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis 
                  dataKey="range" 
                  stroke="#71717a" 
                  fontSize={10} 
                  fontWeight={600} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#71717a" 
                  fontSize={10} 
                  fontWeight={600} 
                  tickLine={false} 
                  axisLine={false} 
                  allowDecimals={false}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }}
                  contentStyle={{
                    background: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '16px',
                    color: '#f8fafc',
                    fontFamily: 'sans-serif',
                    fontSize: '11px'
                  }}
                />
                <Bar 
                  dataKey="Số lượng từ" 
                  fill="#6366f1" 
                  radius={[8, 8, 0, 0]} 
                  maxBarSize={45}
                >
                  {intervalData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index % 2 === 0 ? '#6366f1' : '#818cf8'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-black tracking-widest pl-2">
            <Info className="w-4 h-4 text-zinc-600" />
            <span>Khoảng cách ôn tập lớn hơn nghĩa là trí nhớ dài hạn của bạn đang tốt tốt lên!</span>
          </div>
        </div>
      </div>

      {/* Row for Easiness Curve over Time */}
      <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-[32px] p-6 shadow-2xl">
        <div className="space-y-1 pb-6 border-b border-zinc-800/50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              Độ Dễ Bài Học (Easiness Factor) Theo Thời Gian
            </h3>
            <p className="text-xs text-zinc-500 font-medium font-bold">Lượng hóa mức độ ghi nhớ dễ hay khó của các bộ từ được nạp vào não bạn.</p>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-2xl flex items-center gap-3 w-fit">
            <div className="w-3-h-3">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">Xu Hướng: Ghi Nhớ Tốt</span>
          </div>
        </div>

        <div className="h-72 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={easinessData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEasiness" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#71717a" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#71717a" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false} 
                domain={[2.0, 3.2]}
                tickFormatter={(val) => val.toFixed(1)}
              />
              <Tooltip
                contentStyle={{
                  background: '#121214',
                  border: '1px solid #27272a',
                  borderRadius: '16px',
                  color: '#f8fafc',
                  fontFamily: 'sans-serif',
                  fontSize: '11px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey={Object.keys(easinessData[0]).find(k => k !== 'date') || "Độ dễ (EF)"} 
                stroke="#6366f1" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorEasiness)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
