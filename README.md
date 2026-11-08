# Peter Nyagaka — Portfolio

A personal portfolio for **Peter Nyagaka**, Computer Scientist and Full-Stack Developer based in
Kenya. Built as a static-first React application: a single-page site with a dedicated case-study
page for every selected project.

Live domain: **https://peternyagaka.vercel.app/**

---

## What is in here

- **Single-page home** — hero, about, experience and education, selected work, skills,
  personality, contact.
- **Six project case studies** at `/projects/:slug`, each covering the problem, the solution,
  how it works, the architecture, the decisions, the trade-offs and what comes next.
- **Editorial black, white and gold design** — Instrument Serif and Inter, both self-hosted.
  No gradients, no glassmorphism, no purple, no emoji, no AI illustrations.
- **Light and dark themes** — one token set per theme, applied before first paint, with the
  visitor's choice remembered and the system preference respected until they choose.
- **Contact form** that actually sends mail through Resend, with honest failure states.
- **Recruiter-first structure** — who I am, what I study, what I can build, what I have built,
  where the code is, and how to reach me, all reachable without hunting.

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS with centralised design tokens |
| Routing | React Router 7 |
| Icons | Lucide (plus two hand-rolled brand marks) |
| Theming | CSS custom properties consumed by Tailwind, driven by `data-theme` on `<html>` |
| Fonts | Instrument Serif + Inter Variable, self-hosted via `@fontsource` |
| Email | Resend, called from a Vercel serverless function |
| Hosting | Vercel |

No database, no authentication, no client-side analytics. Framer Motion was deliberately left
out — the entrance animations are an IntersectionObserver and CSS transitions, which is all this
site needs.

## Requirements

- Node.js 20 or newer
- npm

## Installation

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

## Local development

```bash
npm run dev
```

The dev server runs on `http://localhost:5173` and **also serves the contact API**, so the form
works locally without `vercel dev`.

```bash
npm run build      # type-check and build to dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

## Project structure

```
api/
  _contact.ts          Shared contact logic (validation + Resend call)
  contact.ts           Vercel serverless function at /api/contact
public/
  documents/           Drop Peter-Nyagaka-CV.pdf here
  images/              All site imagery (see "Replacing images")
  robots.txt
  sitemap.xml
src/
  components/
    layout/            Footer, ScrollManager
    navigation/        Navbar (sticky desktop nav + mobile menu)
    projects/          ProjectRow, ProjectIndexList
    sections/          Hero, About, Experience, Projects, Skills, Personality, Contact
    ui/                Reveal, SectionHeading, SmartImage, StatusBadge, BrandIcon
  data/
    siteConfig.ts      Identity, links, hero copy, SEO, availability, CV
    projects.ts        The project register — the biggest file to edit
    experience.ts      Timeline entries
    skills.ts          Skill groups and levels
    images.ts          Central image registry (path, alt text, dimensions)
  hooks/               useActiveSection, useCv, useDocumentMeta, usePrefersReducedMotion
  pages/               Home, ProjectCaseStudy, NotFound
  styles/index.css     Design tokens, component classes, reduced-motion rules
  utils/               cn, client-side contact validation
index.html             Static SEO, Open Graph, Person structured data
vercel.json            SPA fallback (excluding /api) and asset caching
```

## Dark mode

Both themes are the same components with a different token set, defined once in
`src/styles/index.css` under `:root` and `[data-theme="dark"]`. Tailwind colours in
`tailwind.config.js` resolve to those variables, so there are no `dark:` variants scattered
through the markup.

| Token | Light | Dark |
| --- | --- | --- |
| `paper` (page) | `#FFFFFF` | `#111111` |
| `wash` (alternate band) | `#F7F6F3` | `#1A1A1A` |
| `text` | `#171717` | `#F5F5F4` |
| `muted` | `#666666` | `#A3A3A3` |
| `line` (borders) | `#E8E5DF` | `#2A2A2A` |
| `gold` (rules, fills, dots) | `#B08D45` | `#D4B878` |
| `accent` (gold as text) | `#8A6D2F` | `#D4B878` |
| `band` (skills, footer, solid buttons) | `#111111` | `#0B0B0B` |

Two deliberate deviations from the flat palette, both for contrast:

- Gold **as text** uses `#8A6D2F` in light mode. `#B08D45` on white is 3.1:1, which fails WCAG AA
  for the small uppercase labels it is used on; the deeper shade is 4.9:1. Decorative gold —
  rules, borders, dots, button fills — stays exactly `#B08D45`. Change `--gold-text-rgb` in
  `src/styles/index.css` if you would rather keep one gold everywhere.
- In dark mode the band surfaces go a shade **deeper** than the page instead of lighter, so the
  skills section and footer still read as inverted panels.

The toggle lives in `src/components/ui/ThemeToggle.tsx` and `src/hooks/useTheme.ts`. It writes to
`localStorage` under `pn-theme`; until a choice is made, the site follows
`prefers-color-scheme` and updates live if the system setting changes. The pre-paint script that
prevents a flash of the wrong theme is inline in `index.html`.

Note: Vite caches the Tailwind config, so restart `npm run dev` after editing
`tailwind.config.js`.

## Updating your details

Everything you are likely to change lives in `src/data/`.

| I want to change… | Edit |
| --- | --- |
| Name, role, email, links, canonical URL | `src/data/siteConfig.ts` |
| Hero headline and intro | `siteConfig.hero` |
| Availability pill | `siteConfig.availability` (set `show: false` to hide it) |
| Experience, education, certifications | `src/data/experience.ts` |
| Skills and their levels | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Images and alt text | `src/data/images.ts` |
| Colours, fonts, spacing | `tailwind.config.js` and `src/styles/index.css` |

### Placeholders you still need to fill in

Two things were left blank on purpose rather than invented:

1. **Saiket Systems dates and responsibilities** — `src/data/experience.ts` still carries a
   `placeholder` string. Add the real dates and bullets, then delete the `placeholder` field and
   the hint disappears from the page.
2. **Wecncode Egerton University Chapter specifics** — same file, same pattern.

## Adding or removing a project

Open `src/data/projects.ts`. Each entry is one object of type `Project`.

- **Add**: copy an existing entry, give it a unique `slug`, and fill it in. It appears on the
  homepage, gets a route at `/projects/<slug>`, and you can add it to `public/sitemap.xml`.
- **Remove**: delete the object.
- **Reorder**: the array order is the display order on the homepage and in the previous/next
  navigation.
- **Feature vs archive**: set `featured: true` for the projects that get a full alternating row
  with a screenshot. `featured: false` projects appear in the compact "Also built" index.

Rules worth keeping:

- `repoUrl` must be a real repository. Do not point at your profile as a stand-in.
- Only set `liveUrl` when the deployment actually responds. If there is no demo, leave it `null`
  and write a `liveNote` explaining why — the site renders that instead of a broken link.
- `status` is one of `Live`, `Complete`, `Active`, `Paused`, `Practice`.
- The `challenges` array is for honest limitations. Recruiters read it, and it is the most
  credible part of the page.

## Replacing images

All images are registered in `src/data/images.ts` with their path, alt text, dimensions and
object-position. Drop your files at the matching paths under `public/`:

```
public/images/
  profile.jpg                Portrait, 4:5, ~1200x1500
  about.jpg                  Portrait or workspace, 4:5, ~1200x1500
  favicon.png                512x512 (a generated monogram is already in place)
  og-image.png               1200x630 social share image (placeholder already generated)
  projects/
    cyber-inventory.png      16:10 screenshots, ~1600x1000
    butchery-system.png
    busa-election.png
    grab-hub.png
    richwrld-fashion.png
    data-science.png
  experience/                Optional logos for the timeline
  gallery/
    workspace.jpg            Personality section, 3:4
    coding.jpg
```

Until a file exists the `SmartImage` component renders a designed placeholder showing the
monogram and the path it expects, so the site never shows a broken image icon.

## Replacing the CV

1. Save your CV as `public/documents/Peter-Nyagaka-CV.pdf`.
2. Optionally set `cv.available: true` in `src/data/siteConfig.ts` to skip the existence check.

Until the PDF exists, every "Download CV" control automatically becomes **Request CV** and opens
an email instead of linking to a file that would 404. Nothing to change in code.

## Configuring the contact form

The form posts to `/api/contact`, a Vercel serverless function that sends through
[Resend](https://resend.com).

`.env.local` is already filled in for local development. For production, add the same three
variables in **Vercel → Project → Settings → Environment Variables**:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=peternyagaka5@gmail.com
CONTACT_FROM_EMAIL=Peter Nyagaka Portfolio <onboarding@resend.dev>
```

`.env.local` is gitignored. Do not commit it, and do not paste the key into the repository, a
screenshot or a pull request — if it ever leaks, revoke it in the Resend dashboard and replace it.
The key currently in use is a send-only key, which is the right level of access for this form.

3. Verify a sending domain in Resend and replace `onboarding@resend.dev` with an address on it.
   Until then, Resend only delivers to the account owner's email address.

Behaviour when things are not set up:

| Situation | What happens |
| --- | --- |
| Everything configured | API returns **200** and the form shows a success message |
| `RESEND_API_KEY` missing | API returns **503**, the form shows the not-configured message and points to the email address |
| Resend rejects the call | API returns **502** with a retry message |
| Invalid input | API returns **422** and the field errors render under each input |
| Honeypot filled | Silently accepted and discarded |

The form never reports a success it did not earn.

`CONTACT_TO_EMAIL` defaults to `peternyagaka5@gmail.com` if unset.

## Deploying to Vercel

1. Push the repository to GitHub.
2. **Vercel → Add New Project → Import** the repository.
3. Leave the defaults: Vercel detects Vite, runs `npm run build`, and outputs `dist`.
   (`vercel.json` pins this explicitly.)
4. Add the three environment variables above.
5. Deploy.

`vercel.json` rewrites every path except `/api/*` to `index.html`, so opening
`https://peternyagaka.vercel.app/projects/cyber-inventory-system` directly works instead of
returning a 404.

To use a custom domain, add it in Vercel and update `siteConfig.siteUrl`, the canonical URL in
`index.html`, and the two URLs in `public/sitemap.xml`.

## How the projects were chosen

The six projects on the site were picked after reading the actual repositories on
[github.com/CyberNerd351](https://github.com/CyberNerd351) — READMEs, folder structure,
languages, tests and deployments — not from the repository list alone.

Selected:

| Project | Why it is here |
| --- | --- |
| Cyber Inventory System | Deepest backend work: ledger-based stock, transactional sales, roles, backup, 15 tests |
| Butchery Management System | Roles and permissions, decimal weight selling, costing, 18 pytest tests, architecture notes |
| BUSA Election System | Full-stack: React client, Flask REST API, MySQL, election-window rules, live demo |
| Grab Hub | React SPA against a live product API with an M-Pesa payment flow |
| Richwrld Fashion Collections | Responsive frontend work with no framework and no build step, live demo |
| Applied Data Science Notebooks | Evidence of the pandas and scikit-learn side of the skill set |

Deliberately left out: `mogitagroup` (same architecture as Grab Hub, weaker execution),
`Scripta`, `Bill-Manager` and the coursework repositories such as `TaiKotlin`, `C-Programming`
and `Java`. `Smart HelbWallet` and `Sheria Zote` were checked and have no public repository, so
neither is claimed here.

Every claim on the site is traceable to code in the linked repository. Where something is a
known weakness — plaintext admin credentials in the election API, a committed virtual
environment in the butchery repository, an expired deployment for Grab Hub — it is written down
in that project's "Challenges and trade-offs" section rather than hidden.

## Accessibility and performance notes

- Semantic headings, one `h1` per page, labelled form fields, visible focus rings.
- `prefers-reduced-motion` disables every animation, including smooth scrolling.
- Both themes pass WCAG AA for body text (17.9:1 light, 17.3:1 dark), secondary text
  (5.7:1 and 7.5:1) and gold labels (4.9:1 and 9.8:1).
- Images are lazy-loaded with explicit dimensions; fonts are self-hosted, so nothing is fetched
  from a CDN.
- Skip link to `#main`, keyboard-operable mobile menu, Escape closes the menu.

## License

Code is yours. Replace this section before publishing if you want to open-source it.
