# Personal Portfolio

A React + TypeScript portfolio application with Firebase authentication.

## Features

- 🎨 Modern React with TypeScript
- 🔥 Firebase Authentication
- 🎭 Framer Motion animations
- 🧭 React Router v6 navigation
- 📱 Responsive design

## Setup

1. **Install dependencies** (requires Node.js and npm):
   ```bash
   npm install
   ```

2. **Configure Firebase**:
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration values

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
portfolio/
├── src/
│   ├── main.tsx       # App entry point
│   └── index.css      # Global styles
├── App.tsx            # Main app component with routing
├── index.html         # HTML template
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite config
```

## Routes

- `/login` - User authentication
- `/dashboard` - Personal workspace
- `/watch-hive` - Watch Hive app landing page
- `/blogs` - Blog section (to be implemented)
- `/art` - Art portfolio (to be implemented)

## Fixed Issues

✅ Changed from `.ts` to `.tsx` for proper JSX support  
✅ Updated to React Router v6 syntax (Routes instead of Switch)  
✅ Migrated to Firebase v9+ modular SDK  
✅ Fixed JSX formatting and spacing issues  
✅ Added proper TypeScript configuration  
✅ Set up Vite build system

## 📚 Documentation

Comprehensive documentation is available for both the portfolio and WatchHive projects:

- **[PORTFOLIO_OVERVIEW.md](PORTFOLIO_OVERVIEW.md)** - Technical overview of this portfolio website
- **[WATCHHIVE_REQUIREMENTS.md](WATCHHIVE_REQUIREMENTS.md)** - Complete requirements for WatchHive
- **[WATCHHIVE_ARCHITECTURE.md](WATCHHIVE_ARCHITECTURE.md)** - Technical architecture for WatchHive
- **[REPO_STRUCTURE.md](REPO_STRUCTURE.md)** - Quick reference for repository structure
- **[docs/README.md](docs/README.md)** - Documentation index and quick start guide

### WatchHive Project

WatchHive is a social media platform for movie enthusiasts being integrated into this portfolio. Users can log movies they've watched, follow other users, and engage with a community of film lovers.

**Status**: Planning Phase  
**Documentation**: See files above for complete details

## 🚀 Deployment

- **Platform**: Vercel
- **Domain**: adityadasamantharao.com
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
