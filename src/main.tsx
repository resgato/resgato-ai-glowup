
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

// Wrap the entire render in a try/catch to prevent blank screens
try {
  createRoot(root!).render(<App />);
} catch (error) {
  console.error("Failed to render application:", error);
  
  // If rendering fails, try to show a minimal error message
  if (root) {
    root.innerHTML = `
      <div style="font-family: sans-serif; padding: 20px; text-align: center;">
        <h2>Something went wrong</h2>
        <p>The application couldn't load properly. Please try refreshing the page.</p>
        <p style="color: #666; margin-top: 20px;">
          If this issue persists, please contact support.
        </p>
      </div>
    `;
  }
}
