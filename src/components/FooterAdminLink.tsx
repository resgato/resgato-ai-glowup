
import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useState, useEffect } from 'react';

const FooterAdminLink = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    
    checkSession();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
