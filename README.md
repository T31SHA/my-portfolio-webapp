# my-portfolio-webapp

Portfolio of Sharahbill Mohamed Abdi, Data & Machine Learning Engineer (MEAL & Research, Nairobi).
Live at https://sharahbill-t31sha.netlify.app/

- Stack: TanStack Start (React 19, SSR), Tailwind CSS 4, self-hosted variable fonts, deployed on Netlify.
- Content: all figures live in `src/lib/content.ts` and come from `public/assets/Sharahbill_Abdi_CV.pdf`. Update the CV first, then that file.
- CV: every download link uses `site.cvHref` in `src/lib/site.ts`. The old `/assets/sharahbil-abdi-cv.pdf` URL redirects to the current CV (`netlify.toml`).

```sh
npm install
npm run dev        # local dev
npm run typecheck
npm run build && npm start   # production build + preview
```
