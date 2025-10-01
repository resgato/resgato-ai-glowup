// Google Tag Manager helper functions for tracking events

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

/**
 * Push an event to Google Tag Manager dataLayer
 * @param eventName - The name of the event
 * @param eventData - Additional data to send with the event
 */
export const trackGTMEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

/**
 * Track click-to-call events
 * @param phoneNumber - The phone number that was clicked
 * @param location - Where the click occurred (e.g., 'contact_page', 'footer')
 */
export const trackClickToCall = (phoneNumber: string, location: string = 'contact_page') => {
  trackGTMEvent('click_to_call', {
    phone_number: phoneNumber,
    location: location,
    event_category: 'contact',
    event_action: 'phone_click',
  });
};

/**
 * Track click-to-email events
 * @param emailAddress - The email address that was clicked
 * @param location - Where the click occurred (e.g., 'contact_page', 'footer')
 */
export const trackClickToEmail = (emailAddress: string, location: string = 'contact_page') => {
  trackGTMEvent('click_to_email', {
    email_address: emailAddress,
    location: location,
    event_category: 'contact',
    event_action: 'email_click',
  });
};

/**
 * Track form submissions
 * @param formName - The name/type of the form
 * @param additionalData - Any additional data to track
 */
export const trackFormSubmission = (formName: string, additionalData?: Record<string, any>) => {
  trackGTMEvent('form_submission', {
    form_name: formName,
    event_category: 'engagement',
    event_action: 'form_submit',
    ...additionalData,
  });
};

/**
 * Track page views (if needed for SPA routing)
 * @param pageName - The name of the page
 * @param pagePath - The path of the page
 */
export const trackPageView = (pageName: string, pagePath: string) => {
  trackGTMEvent('page_view', {
    page_name: pageName,
    page_path: pagePath,
    event_category: 'navigation',
    event_action: 'page_view',
  });
};
