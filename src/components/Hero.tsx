
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Future of work runs on Emotional Intelligence";
  const words = fullText.split(' ');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setAnimatedText(prev => prev + (prev ? ' ' : '') + words[currentWordIndex]);
        setCurrentWordIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, words]);

  const handleScrollToFeatures = useCallback(() => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  const handleScrollToExplainer = useCallback(() => {
    document.getElementById('explainer')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight max-w-4xl opacity-0 animate-slide-up">
              <span className="block text-rebuttl-navy mb-2">
                Future of work runs on
              </span>
              <span className="relative inline-block text-rebuttl-orange">
                Emotional Intelligence
                <svg className="absolute -bottom-4 md:-bottom-6 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 4C50 1 150 1 200 4"
                    stroke="#4263EB"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="animate-underline-draw"
                  />
                </svg>
              </span>
            </h1> */}
            <h1
              className="
    text-4xl md:text-6xl lg:text-7xl
    font-bold
    tracking-tight
    leading-[1.15]
    text-center
    max-w-5xl
    mx-auto
  "
            >
              <span className="block text-rebuttl-blue">
                Future of work runs on
              </span>

              <span className="relative inline-block">
                <span
                  className="
        bg-gradient-to-r
        from-rebuttl-orange
        via-rebuttl-red
        to-rebuttl-purple
        bg-clip-text
        text-transparent
      "
                >
                  Emotional Intelligence
                </span>

                {/* underline */}
                <svg
                  className="absolute left-0 -bottom-4 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4C50 1 150 1 200 4"
                    stroke="url(#heroGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="animate-underline-draw"
                  />
                  <defs>
                    <linearGradient id="heroGradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#4263EB" />
                      <stop offset="0.5" stopColor="#6366F1" />
                      <stop offset="1" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

          </div>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl">
            Lumi6 helps teams turn emotional intelligence into a superpower because the best workplaces run on empathy, not just algorithms
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <Button
              className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white h-12 px-8 text-lg relative overflow-hidden group"
              onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
            >
              <span className="relative z-10">Try Lumi6 Free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-rebuttl-blue via-rebuttl-purple to-rebuttl-blue bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></span>
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 text-lg border-rebuttl-blue text-rebuttl-blue hover:bg-rebuttl-blue/10"
              onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
            >
              See It in Action →
            </Button>
          </div>

          <button onClick={handleScrollToFeatures} className="mt-20 animate-float group" aria-label="Scroll to features">
            <ArrowDown className="w-10 h-10 text-rebuttl-blue group-hover:text-rebuttl-purple transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced abstract decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-rebuttl-purple/20 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-rebuttl-blue/20 rounded-full blur-3xl -z-10 animate-pulse-soft animation-delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-rebuttl-orange/20 rounded-full blur-3xl -z-10 animate-pulse-soft animation-delay-2000"></div>

      {/* Futuristic grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZWFlYWVhIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 -z-10"></div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
