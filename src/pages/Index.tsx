import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Navbar from '@/components/shared/Navbar';
import ScrollFromState from "@/components/shared/ScrollToTop";


const Coursework = React.lazy(() => import('@/components/sections/Coursework'));
const Portfolio = React.lazy(() => import('@/components/sections/Portfolio'));
const Contact = React.lazy(() => import('@/components/sections/Contact'));
const Footer = React.lazy(() => import('@/components/shared/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-paper dark:bg-[#141B2D] text-espresso dark:text-slate-100 overflow-x-hidden transition-colors duration-500">
      <Helmet>
        <title>Academic Portfolio | Joseph Davis Chamdani - UW Informatics</title>
      </Helmet>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<div className="text-espresso/60 dark:text-slate-400 text-center py-10">Loading...</div>}>
        <Portfolio />
        <Coursework />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
