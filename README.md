# Peter Nyagaka — Developer Portfolio Website

Personal developer portfolio website for **Peter Nyagaka** (`Rich.Com`), full-stack developer and computer scientist.

GitHub: [CyberNerd351](https://github.com/CyberNerd351)

---

## 🚀 Overview

This repository contains the static, high-performance React portfolio website designed to showcase Peter's software engineering capabilities, systems-oriented development approach, verified projects, and technical skills across full-stack web, backend APIs, relational databases, and mobile applications.

### Core Design Philosophy
> *"I don't just build interfaces. I build systems."*

- **100% Static React Application**: Zero backend required, fast client-side performance, deployable to Vercel, Netlify, or GitHub Pages.
- **Truthful & Credible**: No fabricated stats, no fake URLs, no arbitrary percentage bars.
- **Engineering Depth**: Deep case studies for real projects including the *Cyber Inventory Management System*, *Smart HelbWallet*, and *BUSA Election System*.
- **Accessible & Responsive**: Keyboard-friendly navigation, WCAG AA contrast, dark/light theme switching with `localStorage` persistence, and smooth mobile drawers.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono

---

## 📁 Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky navigation with theme toggle & mobile drawer
│   │   ├── Hero.jsx                # Architectural blueprint hero & positioning
│   │   ├── About.jsx               # Developer profile & engineering philosophy
│   │   ├── WhatIBuild.jsx          # 5 core development pillars
│   │   ├── Philosophy.jsx          # "How I Build" engineering discipline
│   │   ├── Skills.jsx              # Categorized skills without misleading percentages
│   │   ├── FeaturedProject.jsx     # Deep dive into Cyber Inventory & POS System
│   │   ├── Projects.jsx            # Filterable project portfolio grid
│   │   ├── ProjectCard.jsx         # Modular project card with technology pills
│   │   ├── ProjectModal.jsx        # Rich case study modal with architecture breakdown
│   │   ├── BeyondInterface.jsx     # Relational DB, API security & ACID principles
│   │   ├── ArchitectureDiagram.jsx # Interactive system flow diagrams
│   │   ├── DevelopmentJourney.jsx  # Technical evolution timeline
│   │   ├── Education.jsx           # Modcom Institute of Technology Full-Stack Certification
│   │   ├── GitHubSection.jsx       # CyberNerd351 profile & public repo integration
│   │   ├── Contact.jsx             # Direct contact channels & email composer
│   │   ├── Footer.jsx              # Brand footer, links & copyright
│   │   ├── ThemeToggle.jsx         # Dark / Light theme switcher
│   │   ├── ScrollToTop.jsx         # Accessible floating scroll button
│   │   └── Toast.jsx               # Non-intrusive action notification toast
│   │
│   ├── data/
│   │   ├── projects.js             # Project case studies & metadata
│   │   ├── skills.js               # Categorized skills & stack overview
│   │   ├── experience.js           # Education & development milestones
│   │   └── socialLinks.js          # Verified social & contact metadata
│   │
│   ├── utils/
│   │   └── github.js               # Client-side GitHub public API fetcher & fallback
│   │
│   ├── App.jsx                     # Main application layout
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Tailwind CSS base and theme rules
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 💻 Local Development

### 1. Clone repository
```bash
git clone https://github.com/CyberNerd351/Peter-Nyagaka-Portfolio.git
cd Peter-Nyagaka-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized static build will be placed in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

Because this is a static single-page application built with Vite:

1. Push code to GitHub repository under `@CyberNerd351`.
2. Import project in [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

---

## 📄 License & Attribution

&copy; 2026 Peter Nyagaka (`Rich.Com` / `CyberNerd351`). Built with React.
