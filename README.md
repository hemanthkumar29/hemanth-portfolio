## Hemanth Kumar — Portfolio

Next.js 14 (App Router) portfolio with Tailwind CSS, TypeScript, Framer Motion, ShadCN-inspired UI, Lucide icons, and a command palette. Dark modern theme tuned for recruiters and performance.

### Tech
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS + custom tokens
- Framer Motion animations
- Command palette (cmdk)
- ShadCN-style components (Button, Card, Badge, Input, Textarea)
- Resend-ready contact API route

### Quick start
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Lint: `npm run lint`
4. Build: `npm run build`

### Env
- `RESEND_API_KEY` (optional) for `/api/contact` email delivery. Without it, the route returns ok with a note.

### Content
Edit `data/portfolio.ts` for profile, skills, projects, nav links, and contact info. Update `public/og.jpg` for social cards.

### Deploy
Deploy to Vercel. Ensure env vars are set in the project settings.
