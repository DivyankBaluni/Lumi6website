import { useEffect } from "react";
import Logo from "./logo";

type SplashScreenProps = {
  onComplete?: () => void;
};

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-rebuttl-lightBg">
      <Logo size="lg" />
    </div>
  );
}
