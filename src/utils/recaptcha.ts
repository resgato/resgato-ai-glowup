// Google reCAPTCHA v3 integration utility
// This utility provides functions to load and execute reCAPTCHA

const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdrTT0rAAAAAB1V02vzkntNoxAEQnf6khPYvy6v'; // Fallback to production site key

/**
 * Dynamically loads the reCAPTCHA script if it's not already loaded
 * @returns A Promise that resolves when the script is loaded
 */
export const loadRecaptchaScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (document.querySelector(`script[src*="recaptcha"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });
};

/**
 * Executes reCAPTCHA and returns a token
 * @param action - The action name for reCAPTCHA v3
 * @returns A Promise that resolves with the reCAPTCHA token
 */
export const executeRecaptcha = async (action: string): Promise<string> => {
  await loadRecaptchaScript();

  return new Promise((resolve, reject) => {
    // Use window.grecaptcha safely with type checking
    if (!window.grecaptcha || !window.grecaptcha.ready) {
      console.error('reCAPTCHA not loaded properly');
      reject(new Error('reCAPTCHA not loaded'));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then((token: string) => resolve(token))
        .catch((error: Error) => {
          console.error('reCAPTCHA execution error:', error);
          reject(error);
        });
    });
  });
};

/**
 * Verifies a reCAPTCHA token with the server
 * @param token - The reCAPTCHA token to verify
 * @param action - The action name for reCAPTCHA v3 (optional)
 * @returns A Promise that resolves with the verification result
 */
export const verifyRecaptchaToken = async (token: string, action?: string): Promise<{
  success: boolean;
  score?: number;
  action?: string;
  error?: string;
}> => {
  try {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, action }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      error: 'Failed to verify reCAPTCHA token'
    };
  }
};
