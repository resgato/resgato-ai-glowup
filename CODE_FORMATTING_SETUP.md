# Code Formatting Setup

## Overview

This project now has a comprehensive code formatting setup using **Prettier** and **ESLint** to ensure consistent, readable, and maintainable code across the entire codebase.

## What Was Implemented

### 1. Prettier Configuration

- **Single quotes** for strings
- **Semicolons** required
- **80 character** line width
- **2 spaces** for indentation
- **Trailing commas** in objects and arrays
- **Automatic Tailwind CSS class sorting** with `prettier-plugin-tailwindcss`

### 2. ESLint Integration

- **TypeScript and React best practices** enforcement
- **Integration** between Prettier and ESLint
- **Custom rules** for better code quality
- **Exclusion** of generated files and build artifacts

### 3. Package.json Scripts

```bash
npm run format          # Format all files with Prettier
npm run format:check    # Check formatting without making changes
npm run lint           # Lint code for issues
npm run lint:fix       # Lint and automatically fix issues
```

## Files Created/Modified

### New Files

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to exclude from formatting
- `CODE_FORMATTING_SETUP.md` - This documentation

### Modified Files

- `package.json` - Added Prettier dependencies and scripts
- `eslint.config.js` - Updated to work with Prettier
- `README.md` - Added formatting documentation
- `src/components/CriticalCSS.tsx` - Fixed linting issues

## Before vs After Examples

### Before (App.tsx)

```tsx
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// ... more imports

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      onError: error => {
        console.error('Mutation error:', error);
      },
    },
  },
});
```

### After (App.tsx)

```tsx
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// ... more imports

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      onError: error => {
        console.error('Mutation error:', error);
      },
    },
  },
});
```

### Before (Navbar.tsx)

```tsx
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
```

### After (Navbar.tsx)

```tsx
<header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between py-4">
```

## Key Improvements

1. **Consistent Formatting**: All files now follow the same formatting rules
2. **Automatic Tailwind Sorting**: CSS classes are automatically sorted for better readability
3. **Better Code Quality**: ESLint catches potential issues and enforces best practices
4. **Developer Experience**: Format on save and real-time linting feedback
5. **Team Collaboration**: Everyone uses the same formatting rules

## Editor Setup

### VS Code (Recommended)

1. Install extensions:
   - Prettier - Code formatter
   - ESLint

2. Add to VS Code settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Other Editors

- **WebStorm**: Enable Prettier and ESLint in settings
- **Vim/Neovim**: Use ALE or similar plugins
- **Sublime Text**: Install Prettier and ESLint packages

## Usage

### Daily Development

1. **Format on Save**: Your editor will automatically format files when you save
2. **Real-time Linting**: ESLint will show errors and warnings as you type
3. **Auto-fix**: Use `Ctrl+Shift+P` → "ESLint: Fix all auto-fixable problems"

### Before Committing

```bash
npm run format    # Ensure all files are formatted
npm run lint      # Check for any remaining issues
```

### CI/CD Integration

Add these commands to your build pipeline:

```bash
npm run format:check  # Fail if files aren't formatted
npm run lint         # Fail if there are linting errors
```

## Benefits

- **Readability**: Consistent formatting makes code easier to read
- **Maintainability**: Standardized code style reduces cognitive load
- **Collaboration**: Team members can focus on logic, not formatting
- **Quality**: ESLint catches potential bugs and enforces best practices
- **Performance**: Tailwind class sorting optimizes CSS output

## Troubleshooting

### Common Issues

1. **Prettier not formatting**: Check if `.prettierrc` is in the project root
2. **ESLint errors**: Run `npm run lint:fix` to auto-fix issues
3. **Conflicting rules**: Prettier and ESLint are configured to work together

### Reset Formatting

If you need to reset formatting for a file:

```bash
npm run format -- --write path/to/file.tsx
```

## Future Enhancements

- **Husky pre-commit hooks** for automatic formatting
- **GitHub Actions** for formatting checks in CI
- **Custom ESLint rules** for project-specific patterns
- **Performance linting** with `eslint-plugin-import`

---

This setup ensures your codebase remains clean, consistent, and maintainable as it grows!

