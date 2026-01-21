
import React, { useEffect, useState } from 'react';
import Logo from './logo';

type SplashScreenProps = {
    onComplete?: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'intro' | 'transition' | 'exit'>('intro');

    useEffect(() => {
        // Phase 1: Logo stays in center for 1.5s
        const timer1 = setTimeout(() => {
            setPhase('transition');
        }, 1500);

        // Phase 2: Transition animation takes 0.8s
        const timer2 = setTimeout(() => {
            setPhase('exit');
        }, 2300);

        // Final: OnComplete after exit animation
        const timer3 = setTimeout(() => {
            onComplete();
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    return (
        // <div
        //     className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out ${phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        //         }`}
        // >
        //     {/* Blurred Background */}
        //     <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl"></div>

        //     {/* Logo Container */}
        //     <div
        //         className={`relative transition-all duration-1000 transform ${phase === 'intro'
        //             ? 'scale-150 translate-x-0 translate-y-0'
        //             : 'scale-75 -translate-x-[calc(50vw-80px)] md:-translate-x-[calc(50vw-120px)] -translate-y-[calc(50vh-40px)] md:-translate-y-[calc(50vh-48px)]'
        //             }`}
        //         style={{
        //             transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        //         }}
        //     >
        //         <Logo size="lg" />
        //     </div>
        // </div>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fbf7f2]">
            <div
                className="
      text-5xl font-bold
      animate-logo-enter
    "
            >
                Lumi6
            </div>
        </div>

    );
};

export default SplashScreen;
