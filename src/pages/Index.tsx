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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <Helmet>
        <title>Academic Portfolio | Joseph Davis Chamdani - UW Informatics</title>
      </Helmet>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<div className="text-slate-400 text-center py-10">Loading...</div>}>
        <Coursework />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
