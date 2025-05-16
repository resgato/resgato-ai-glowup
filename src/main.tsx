
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure we have a root element to mount to
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  // Create root element if missing as a fallback
  const fallbackRoot = document.createElement('div');
  fallbackRoot.id = 'root';
  document.body.appendChild(fallbackRoot);
}

// Get the root element (either existing or fallback)
const root = document.getElementById("root");
createRoot(root!).render(<App />);
