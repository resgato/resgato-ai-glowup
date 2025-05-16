
// Google reCAPTCHA v3 integration utility
// This utility provides functions to load and execute reCAPTCHA

// The site key is exposed in the frontend and is meant to be public
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // This is Google's test key, replace with your actual site key in production

/**
 * Dynamically loads the reCAPTCHA script if it's not already loaded
 */
export const loadRecaptchaScript = (): Promise<void> => {
  return new Promise((resolve) => {
    // Check if script is already loaded
    if (document.querySelector(`script[src*="recaptcha"]`)) {
      resolve();
      return;
    }

    // Create and append script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
};

/**
 * Executes reCAPTCHA and returns a token
 * @param action The action name for analytics
 * @returns A Promise that resolves with the reCAPTCHA token
 */
export const executeRecaptcha = async (action: string): Promise<string> => {
  await loadRecaptchaScript();
  
  // Use window.grecaptcha safely with type checking
  if (!window.grecaptcha || !window.grecaptcha.ready) {
    console.error('reCAPTCHA not loaded properly');
    return '';
  }

  return new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(error => {
          console.error('reCAPTCHA execution error:', error);
          resolve('');
        });
    });
  });
};
