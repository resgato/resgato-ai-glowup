# 🚀 Resgato Project Setup Guide

Complete setup instructions for running the Resgato AI Glowup project on a fresh machine.

## 📋 Prerequisites

### 1. Node.js & npm

- **Node.js**: v18.x or v20.x (recommended: v20.19.5)
- **npm**: v10.x (comes with Node.js)

**Install Node.js:**

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Or download from https://nodejs.org/
```

### 2. Git

```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt update && sudo apt install git

# Windows
# Download from https://git-scm.com/
```

### 3. Code Editor (Optional but Recommended)

- **VS Code** with extensions:
  - Prettier - Code formatter
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript Importer

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resgato-ai-glowup.git
cd resgato-ai-glowup
```

### 2. Install Dependencies

```bash
# Clean install (recommended for fresh machines)
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Why `--legacy-peer-deps`?**

- Resolves React version conflicts between dependencies
- Ensures compatibility with all UI components
- Prevents peer dependency resolution errors

### 3. Environment Configuration

```bash
# Copy environment template
cp env.example .env

# Edit .env with your actual values
nano .env  # or use your preferred editor
```

**Required Environment Variables:**

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://bopzgxqujuqosdexnppj.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key

# Optional (for admin features)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RECAPTCHA_SITE_KEY=your_recaptcha_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
RESEND_API_KEY=your_resend_api_key
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or next available port).

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run build:dev        # Build in development mode
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check for linting errors
npm run lint:fix         # Fix linting errors automatically
npm run format           # Format code with Prettier
npm run format:check     # Check formatting without changes
```

## 🏗️ Project Architecture

### Core Technologies

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing

### Key Dependencies

- **@supabase/supabase-js** - Database and auth
- **@tanstack/react-query** - Data fetching
- **@radix-ui/react-\*** - Accessible UI components
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **lucide-react** - Icons

### UI Components

- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations (if used)

## 🚀 Deployment (Vercel)

### Automatic Deployment

- Connected to GitHub repository
- Auto-deploys on push to `main` branch
- Environment variables configured in Vercel dashboard

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Blank Page / White Screen

```bash
# Check if dependencies are properly installed
npm ls react react-dom

# Reinstall with legacy peer deps
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

#### 2. Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

#### 3. Environment Variables Not Loading

- Ensure `.env` file exists in project root
- Variables must start with `VITE_` for client-side access
- Restart dev server after adding new variables

#### 4. TypeScript Errors

```bash
# Install missing type definitions
npm install @types/react @types/react-dom @types/node

# Check TypeScript configuration
npx tsc --noEmit
```

#### 5. Supabase Connection Issues

- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Check Supabase project is active
- Ensure RLS policies are configured

### Development Tips

#### 1. Hot Reload Issues

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### 2. Styling Issues

```bash
# Rebuild Tailwind CSS
npm run build
```

#### 3. Database Issues

- Check Supabase dashboard for connection status
- Verify environment variables match Supabase project
- Test connection in browser console

## 📁 Project Structure

```
resgato-ai-glowup/
├── src/
│   ├── app/                 # App layout and routing
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── services/            # API services
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── supabase/                # Supabase configuration
├── .env.example             # Environment template
├── package.json             # Dependencies and scripts
└── tailwind.config.ts       # Tailwind configuration
```

## 🎯 Quick Start Checklist

- [ ] Install Node.js (v18+ or v20+)
- [ ] Clone repository
- [ ] Run `npm install --legacy-peer-deps`
- [ ] Copy `env.example` to `.env`
- [ ] Configure environment variables
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`

## 🆘 Getting Help

If you encounter issues:

1. **Check the console** for error messages
2. **Verify environment variables** are set correctly
3. **Ensure all dependencies** are installed
4. **Try a clean install** with `--legacy-peer-deps`
5. **Check Supabase connection** in browser dev tools

## 📞 Support

For project-specific issues, check:

- GitHub repository issues
- Supabase documentation
- Vercel deployment logs
- Browser developer console

---

**Happy coding! 🚀**
