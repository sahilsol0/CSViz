"use client";

import { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface OrientationMessageProps {
  isDataLoaded: boolean;
}

export function OrientationMessage({ isDataLoaded }: OrientationMessageProps) {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && isDataLoaded) {
      const checkOrientation = () => {
        // Ensure window.screen.orientation is available
        if (window.screen && window.screen.orientation) {
          setIsPortrait(window.screen.orientation.type.startsWith('portrait'));
        } else {
          // Fallback for older browsers or environments where screen.orientation is not available
          setIsPortrait(window.innerHeight > window.innerWidth);
        }
      };

      checkOrientation();
      
      const orientationChangeHandler = () => checkOrientation();
      
      // Prefer screen.orientation API if available
      if (window.screen && window.screen.orientation) {
        window.screen.orientation.addEventListener('change', orientationChangeHandler);
        return () => window.screen.orientation.removeEventListener('change', orientationChangeHandler);
      } else {
        // Fallback to resize event
        window.addEventListener('resize', orientationChangeHandler);
        return () => window.removeEventListener('resize', orientationChangeHandler);
      }
    } else {
      setIsPortrait(null); // Reset if data is not loaded or not in browser
    }
  }, [isDataLoaded]);

  if (!isDataLoaded || isPortrait === null || !isPortrait) {
    return null;
  }

  return (
    <Alert className="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-md z-50 shadow-lg bg-accent text-accent-foreground border-accent">
      <Smartphone className="h-5 w-5 text-accent-foreground" />
      <AlertTitle className="font-semibold">Rotate Device</AlertTitle>
      <AlertDescription>
        For the best viewing experience, please rotate your device to landscape mode.
      </AlertDescription>
    </Alert>
  );
}
