# rayhanbio.me

Personal academic website of Md. Sayeed Abu Rayhan. Built with Next.js and Tailwind CSS, deployed on Vercel.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to change things

| To change | Edit |
|---|---|
| Email, phone, profile links, the "open to positions" line, "last updated" | `app/_data/profile.ts` |
| Home page text | `app/page.tsx` |
| "Recent updates" on the home page | `app/_data/news.tsx` (add new items at the top) |
| Research page | `app/research/page.tsx` |
| Papers and conference presentations | `app/publications/page.tsx` |
| Teaching and mentoring | `app/teaching/page.tsx` |
| Education, grants, skills | `app/cv/page.tsx` |
| Colors and fonts, light and dark theme | `app/globals.css` |
| The CV file | replace `public/Rayhan_CV.pdf` (keep the same file name) |
| Photos | `public/images/` |

## Publish

```bash
git add -A
git commit -m "Update site"
git push
```

Vercel rebuilds the site automatically after each push.
