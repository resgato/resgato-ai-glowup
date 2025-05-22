import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Add error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Log additional error details
  console.error('Error details:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

// Add unhandled rejection handling
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Log additional rejection details
  console.error('Rejection details:', {
    reason: event.reason,
    promise: event.promise
  });
});

// Log when the app starts mounting
console.log('Starting app mount...');

// Check if we're in production
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found in DOM');
  throw new Error('Root element not found');
}

console.log('Root element found:', rootElement);

try {
  console.log('Creating root...');
  const root = createRoot(rootElement);
  console.log('Root created successfully');
  
  console.log('Rendering app...');
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  console.log('App mounted successfully');
} catch (error) {
  console.error('Error mounting app:', error);
  // Add more detailed error information
  if (error instanceof Error) {
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
  }
}
