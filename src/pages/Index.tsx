
import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LazyImage from '@/components/LazyImage';

// Lazy load non-critical components
const Features = lazy(() => import('@/components/Features'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const SectionContinuous = lazy(() => import('@/components/SectionContinuous'));
const SectionInsights = lazy(() => import('@/components/SectionInsights'));
const SectionProof = lazy(() => import('@/components/SectionProof'));
const InteractiveAssessment = lazy(() => import('@/components/InteractiveAssessment'));
const CTA = lazy(() => import('@/components/CTA'));
const Footer = lazy(() => import('@/components/Footer'));
const AnimatedStatistics = lazy(() => import('@/components/AnimatedStatistics'));
const BlogPreview = lazy(() => import('@/components/BlogPreview'));
const EQAssessmentPreview = lazy(() => import('@/components/EQAssessmentPreview'));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg"></div>
);

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rebuttl-lightBg">
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SectionContinuous />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SectionInsights />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SectionProof />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AnimatedStatistics />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <InteractiveAssessment />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogPreview />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EQAssessmentPreview />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
