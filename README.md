# ENG_MASTER

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/275a7681-7e36-4e15-a8f4-c80d80c5e16e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy [.env.example](.env.example) to `.env`, then fill `GEMINI_API_KEY` and the `VITE_FIREBASE_*` values.
3. Run the app:
   `npm run dev`

## Deploy to Vercel

Add these environment variables in Vercel Project Settings before deploying:

- `GEMINI_API_KEY`
- `APP_URL`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

The app pins Vercel to Node.js `22.x` through `package.json` because the Gemini SDK requires Node 20 or newer.

For Google login, Firebase Authentication must allow the deployed domain:

1. Open Firebase Console for the project used by `VITE_FIREBASE_PROJECT_ID`.
2. Go to Authentication -> Settings -> Authorized domains.
3. Add `eng-master-delta.vercel.app`.
4. Add any custom production domain or Vercel preview domain you use for login testing.

If the domain is missing, Google sign-in will fail with `auth/unauthorized-domain`.
