import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Add error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

// Add unhandled rejection handling
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Log when the app starts mounting
console.log('Starting app mount...');

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

try {
  const root = createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  console.log('App mounted successfully');
} catch (error) {
  console.error('Error mounting app:', error);
}
