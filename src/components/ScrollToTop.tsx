
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Utility to smoothly scroll to a specific DOM node or top of the page
function scrollTo(selector?: string) {
  if (selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If we are navigating to an anchor/hash, scroll to it; else scroll to top
    if (location.hash) {
      scrollTo(location.hash);
    } else {
      scrollTo();
    }
  }, [location.pathname, location.hash]);

  return null;
}
