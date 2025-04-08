
import React from 'react';
import { Link } from 'react-router-dom';

const FooterAdminLink = () => {
  return (
    <div className="mt-4 text-center text-sm text-gray-400">
      <Link to="/login" className="hover:text-resgato-purple hover:underline">
        Admin Login
      </Link>
    </div>
  );
};

export default FooterAdminLink;
