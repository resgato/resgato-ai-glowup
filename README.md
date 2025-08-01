# Resgato Next.js

This is the Next.js version of the Resgato website, featuring:
- Server-side rendering (SSR) for better SEO
- Static site generation (SSG) for performance
- Edge middleware for Prerender.io integration
- TypeScript for type safety
- Tailwind CSS for styling
- Modern React features

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/resgato/nextjs.git
cd nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **SEO Optimized**: Server-side rendering and unique meta tags for each page
- **Performance**: Static site generation and automatic code splitting
- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Prerender.io Integration**: Edge middleware for bot detection and prerendering

## Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable React components
├── lib/             # Utility functions and shared logic
├── styles/          # Global styles and Tailwind config
└── types/           # TypeScript type definitions
```

## Deployment

The site is deployed on Vercel. Each push to the main branch triggers a new deployment.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

Proprietary - All rights reserved

