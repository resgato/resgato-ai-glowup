
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        // Add TipTap ProseMirror dependencies that cause import resolution issues
        '@tiptap/pm/state',
        '@tiptap/pm/view',
        '@tiptap/pm/model',
        '@tiptap/pm/transform',
        '@tiptap/pm/commands',
        '@tiptap/pm/history',
        '@tiptap/pm/collab',
        '@tiptap/pm/keymap',
        '@tiptap/pm/schema-list',
        '@tiptap/pm/schema-basic',
        '@tiptap/pm/dropcursor', // Added this missing PM dependency
      ]
    }
  }
}));
