
import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const FooterAdminLink = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Use a safe version of the check session function that won't break the app if it fails
    const checkSession = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error checking session:', error);
          // Don't break the app on error, just assume not logged in
          setIsLoggedIn(false);
          return;
        }
        
        setIsLoggedIn(!!data.session);
      } catch (error) {
        console.error('Error checking auth session:', error);
        // Don't break the app on error, just assume not logged in
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Run the session check
    checkSession();
    
    // Set up auth state listener with error handling
    let subscription;
    try {
      const { data } = supabase.auth.onAuthStateChange((event, session) => {
        setIsLoggedIn(!!session);
      });
      subscription = data.subscription;
    } catch (error) {
      console.error('Error setting up auth state listener:', error);
    }
    
    return () => {
      if (subscription) {
        try {
          subscription.unsubscribe();
        } catch (error) {
          console.error('Error unsubscribing from auth state:', error);
        }
      }
    };
  }, []);

  // Render a non-visible placeholder while loading instead of null
  // This prevents layout shifts but won't break rendering
  if (isLoading) {
    return <div className="mt-4" aria-hidden="true"></div>;
  }

  return (
    <div className="mt-4 text-center text-sm text-gray-400">
      {isLoggedIn ? (
        <Link to="/admin" className="hover:text-resgato-purple hover:underline">
          Admin Dashboard
        </Link>
      ) : (
        <Link to="/login" className="hover:text-resgato-purple hover:underline">
          Admin Login
        </Link>
      )}
    </div>
  );
};

export default FooterAdminLink;
