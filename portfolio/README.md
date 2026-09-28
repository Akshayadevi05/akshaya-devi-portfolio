# Akshaya Devi — Portfolio

A personal portfolio site built with React and Vite. Showcases the Smart
Hospital Queue System (main project) alongside SkillSprint AI and
RoomCraft Pro, plus skills, experience, and contact details pulled
from the résumé.

## Tech stack

- React 19
- Vite
- Plain CSS (no framework)
- Fonts: Sora (display/body), IBM Plex Mono (labels/data)

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static site is output to `dist/`.

## Before you deploy — a couple of things to fill in

- `src/data.js` → `profile.linkedin` is currently empty (the résumé's
  LinkedIn link wasn't set). Add your LinkedIn URL there if you want a
  LinkedIn card in the Contact section, and render it in
  `src/components/Contact.jsx`.
- `public/Akshaya_Devi_Resume.pdf` is the résumé file that the
  "Download résumé" buttons link to. Swap it out any time you update
  your résumé, keeping the same filename (or update `resumeFile` in
  `src/data.js` if you rename it).

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import the repository you just pushed.
3. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL (e.g.
   `akshaya-devi-portfolio.vercel.app`) within a minute.
5. Any future `git push` to `main` redeploys automatically.

To use a custom domain later: **Project → Settings → Domains** in the
Vercel dashboard.
