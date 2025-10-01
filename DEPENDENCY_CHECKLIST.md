# 🔍 Resgato Project - Complete Dependency Checklist

## 📋 Quick Setup Commands

```bash
# 1. Clone the repository
git clone https://github.com/your-username/resgato-ai-glowup.git
cd resgato-ai-glowup

# 2. Install all dependencies
npm install --legacy-peer-deps

# 3. Check if everything is working
npm run check-deps

# 4. Start development server
npm run dev
```

## 🖥️ System Requirements

### Required Software

- **Node.js**: v18.x or v20.x (current: v20.19.5)
- **npm**: v8+ (current: v10.8.2)
- **Git**: For version control
- **Code Editor**: VS Code recommended

### Installation Commands

```bash
# Install Node.js (using nvm - recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Or download from https://nodejs.org/
```

## 📦 Project Dependencies

### Core Dependencies (77 total)

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^6.3.5"
}
```

### UI & Styling (25 packages)

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives (20+ packages)
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Data & State Management (5 packages)

- **@supabase/supabase-js** - Database and authentication
- **@tanstack/react-query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Development Tools (15 packages)

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vite** - Build tool and dev server

## 🔧 Environment Setup

### Required Environment Variables

```env
# Supabase Configuration (Required)
VITE_SUPABASE_URL=https://bopzgxqujuqosdexnppj.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key

# Optional (for admin features)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RECAPTCHA_SITE_KEY=your_recaptcha_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
RESEND_API_KEY=your_resend_api_key
```

### Setup Steps

1. Copy `env.example` to `.env`
2. Fill in your actual Supabase credentials
3. Restart dev server after changes

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check for linting errors
npm run lint:fix         # Fix linting errors automatically
npm run format           # Format code with Prettier
npm run format:check     # Check formatting without changes

# Project Setup
npm run check-deps       # Check if all dependencies are installed
npm run setup            # Install dependencies and check setup
```

## 🔍 Dependency Checker

The project includes a custom dependency checker script:

```bash
# Check current status
npm run check-deps

# Or run directly
node check-dependencies.js
```

**What it checks:**

- ✅ Node.js version compatibility
- ✅ npm version compatibility
- ✅ All 77 project dependencies
- ✅ Environment file configuration
- ✅ Required environment variables

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### 1. Blank Page / White Screen

```bash
# Check dependencies
npm run check-deps

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
├── check-dependencies.js    # Dependency checker script
├── SETUP_GUIDE.md          # Detailed setup guide
├── DEPENDENCY_CHECKLIST.md  # This file
└── package.json            # Dependencies and scripts
```

## 🎯 Quick Start Checklist

- [ ] Install Node.js (v18+ or v20+)
- [ ] Clone repository
- [ ] Run `npm install --legacy-peer-deps`
- [ ] Copy `env.example` to `.env`
- [ ] Configure environment variables
- [ ] Run `npm run check-deps`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`

## 🆘 Getting Help

If you encounter issues:

1. **Run the dependency checker**: `npm run check-deps`
2. **Check the console** for error messages
3. **Verify environment variables** are set correctly
4. **Try a clean install** with `--legacy-peer-deps`
5. **Check Supabase connection** in browser dev tools

## 📞 Support Resources

- **GitHub Repository**: Check issues and documentation
- **Supabase Documentation**: Database and auth setup
- **Vercel Deployment**: Deployment configuration
- **Browser Developer Console**: Runtime errors

---

**Happy coding! 🚀**

_This checklist ensures your Resgato project runs smoothly on any fresh machine._
