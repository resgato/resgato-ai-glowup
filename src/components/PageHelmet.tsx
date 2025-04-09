import React from 'react';
import { Helmet } from 'react-helmet';

interface PageHelmetProps {
  title: string;
}

const PageHelmet: React.FC<PageHelmetProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Resgato Marketing</title>
    </Helmet>
  );
};

export default PageHelmet;