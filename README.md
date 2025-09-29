# Resgato AI Glowup

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📝 Code Formatting

This project uses **Prettier** for consistent code formatting and **ESLint** for code quality. The configuration ensures:

- **Consistent formatting** across all files
- **Automatic Tailwind CSS class sorting** with `prettier-plugin-tailwindcss`
- **TypeScript and React best practices** enforcement
- **Integration** between Prettier and ESLint

### Available Scripts

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check

# Lint code for issues
npm run lint

# Lint and automatically fix issues
npm run lint:fix
```

### Formatting Rules

- **Single quotes** for strings
- **Semicolons** required
- **80 character** line width
- **2 spaces** for indentation
- **Trailing commas** in objects and arrays
- **Automatic Tailwind class sorting**

### Editor Setup

For the best development experience, configure your editor to:

1. **Format on save** with Prettier
2. **Show ESLint errors** in real-time
3. **Use the project's Prettier config**

#### VS Code Setup

Install these extensions:

- Prettier - Code formatter
- ESLint

Add to your VS Code settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 🛠️ Development

The site is deployed on Vercel. Each push to the main branch triggers a new deployment.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

Proprietary - All rights reserved by T Brody LLC
