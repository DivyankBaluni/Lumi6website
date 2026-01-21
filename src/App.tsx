
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, lazy, useEffect, useState } from 'react';

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Education = lazy(() => import("./pages/Education"));
const Individuals = lazy(() => import("./pages/Individuals"));
const NotFound = lazy(() => import("./pages/NotFound"));

import Navbar from "@/components/Navbar";
import Breadcrumbs from './components/ui/Breadcrumbs';
import BackToTop from './components/ui/BackToTop';
import SplashScreen from './components/ui/SplashScreen';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-rebuttl-lightBg">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rebuttl-primary"></div>
  </div>
);

// Marketing-only app: remove data fetching/auth providers

// Component to handle scrolling to hash fragments
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('lumi6-splash-shown');
  });

  // Prevent pinch zooming on mobile for better UX
  useEffect(() => {
    if (showSplash) {
      sessionStorage.setItem('lumi6-splash-shown', 'true');
      // setTimeout(()=> setShowSplash(false), 1600);
      const t = setTimeout(() => setShowSplash(false), 1600);
      return () => clearTimeout(t);
    }
  }, [showSplash]);

  // const handleSplashComplete = () => {
  //   setShowSplash(false);
  //   sessionStorage.setItem('hasSeenSplash', 'true');
  // };

  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <>
      <TooltipProvider>
        <Toaster />
        <Sonner position="bottom-center" closeButton={true} />
        {/* {showSplash && <SplashScreen onComplete={handleSplashComplete} />} */}
        {showSplash && <SplashScreen />}
        {/* <div className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}> */}
        <div className={`transition-opacity duration-700 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <BrowserRouter>
            <ScrollToHash />
            {/* <Navbar aria-label="Main Navigation" />
          <div className="pt-0">

            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogPost />} />
                <Route path="/education" element={<Education />} />
                <Route path="/individuals" element={<Individuals />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div> */}

            <Navbar aria-label="Main Navigation" splashActive={showSplash} />

            {/* Breadcrumb overlay — ZERO layout impact */}
            <div className="absolute top-[50px] left-0 right-0 z-40 pointer-events-none">
              <div className="container mx-auto px-4">
                <div className="pointer-events-auto">
                  <Breadcrumbs />
                </div>
              </div>
            </div>

            {/* Page content */}
            <div className="pt-0">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blogs/:slug" element={<BlogPost />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/individuals" element={<Individuals />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>

            <BackToTop />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </>
  );
};

export default App;
