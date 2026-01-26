# Repository Structure - Quick Reference

**Last Updated**: January 26, 2026

This file provides a quick overview of the repository structure for both the existing portfolio and the planned WatchHive integration.

---

## 📁 Current Repository Structure

```
portfolio/
├── docs/                           # 📚 Documentation
│   └── README.md                   # Documentation index
│
├── WATCHHIVE_REQUIREMENTS.md       # WatchHive requirements
├── WATCHHIVE_ARCHITECTURE.md       # WatchHive architecture
├── PORTFOLIO_OVERVIEW.md           # Portfolio documentation
├── REPO_STRUCTURE.md               # This file
├── README.md                       # Main readme
│
├── src/                            # Frontend source
│   ├── main.tsx                    # Entry point
│   ├── App.tsx                     # Portfolio app
│   ├── index.css                   # Portfolio styles
│   ├── components/                 # Portfolio components
│   ├── data/                       # Static data
│   └── types/                      # TypeScript types
│
├── public/                         # Static assets
├── dist/                           # Build output
├── node_modules/                   # Dependencies
│
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite config
├── .env.example                    # Env template
├── .env.local                      # Local env (not in git)
├── .gitignore                      # Git ignore
└── .vercel/                        # Vercel config
```

---

## 🎬 Planned WatchHive Structure

```
portfolio/
├── src/
│   └── watchhive/                  # 🆕 WatchHive app
│       ├── WatchHiveApp.tsx        # Root component
│       ├── index.css               # WatchHive styles
│       ├── components/             # Components
│       ├── pages/                  # Page components
│       ├── hooks/                  # Custom hooks
│       ├── contexts/               # React contexts
│       ├── services/               # API services
│       ├── utils/                  # Utilities
│       ├── types/                  # TypeScript types
│       └── assets/                 # Assets
│
└── backend/                        # 🆕 Backend app
    ├── src/                        # Source code
    ├── prisma/                     # Database schema
    ├── tests/                      # Tests
    ├── package.json                # Dependencies
    └── .env                        # Environment vars
```

---

## 🗂️ Key Files

### Configuration Files
- `package.json` - Frontend dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `.env.local` - Environment variables (not in git)
- `.env.example` - Environment variables template

### Documentation Files
- `README.md` - Main project readme
- `PORTFOLIO_OVERVIEW.md` - Portfolio documentation
- `WATCHHIVE_REQUIREMENTS.md` - WatchHive requirements
- `WATCHHIVE_ARCHITECTURE.md` - WatchHive architecture
- `docs/README.md` - Documentation index

### Source Files
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Portfolio main component
- `src/index.css` - Global styles
- `index.html` - HTML template

---

## 📊 File Counts (Current)

- **Total Directories**: 9
- **Total Files**: ~20 (excluding node_modules and dist)
- **Components**: 8 (Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer)
- **Configuration Files**: 6

---

## 🔍 Finding Files

### Portfolio Components
All portfolio components are in `src/components/`:
- `Navbar.tsx` - Navigation bar
- `Hero.tsx` - Hero section
- `About.tsx` - About section
- `Experience.tsx` - Experience section
- `Skills.tsx` - Skills section
- `Projects.tsx` - Projects section
- `Contact.tsx` - Contact section
- `Footer.tsx` - Footer

### Documentation
All documentation is in the root or `docs/` folder:
- Root: Main documentation files
- `docs/`: Additional documentation and guides

### Configuration
All configuration files are in the root:
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript
- `vite.config.ts` - Build tool
- `.env.local` - Environment

---

## 🎯 Quick Navigation

### Working on Portfolio
- Components: `src/components/`
- Styles: `src/index.css`
- Main app: `src/App.tsx`

### Working on WatchHive (Future)
- Components: `src/watchhive/components/`
- Pages: `src/watchhive/pages/`
- Services: `src/watchhive/services/`
- Backend: `backend/src/`

### Documentation
- Requirements: `WATCHHIVE_REQUIREMENTS.md`
- Architecture: `WATCHHIVE_ARCHITECTURE.md`
- Portfolio: `PORTFOLIO_OVERVIEW.md`
- Index: `docs/README.md`

---

## 🚀 Development Commands

### Frontend
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend (Future)
```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start dev server
npx prisma migrate dev  # Run migrations
npx prisma studio    # Open Prisma Studio
```

---

## 📝 Notes

- **Portfolio**: Single-page application with section-based navigation
- **WatchHive**: Multi-page application with React Router
- **Backend**: Separate Node.js/Express application
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Frontend on Vercel, Backend on Railway/DigitalOcean

---

**End of Quick Reference**
