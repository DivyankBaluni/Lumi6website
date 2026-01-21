
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './button';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            <Button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Back to top"
            >
                <ChevronUp className="w-6 h-6" />
            </Button>
        </div>
    );
};

export default BackToTop;
