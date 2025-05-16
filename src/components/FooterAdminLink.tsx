
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
    const checkSession = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error checking session:', error);
          return;
        }
        
        setIsLoggedIn(!!data.session);
      } catch (error) {
        console.error('Error checking auth session:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkSession();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (isLoading) {
    return null; // Don't render anything while checking login status
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
