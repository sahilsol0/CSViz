"use client";

import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react'; // Replaced ScreenRotation with RotateCcw
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface OrientationEnforcerProps {
  isDataLoaded: boolean;
  onOrientationChange: (isPortrait: boolean) => void;
}

export function OrientationEnforcer({ isDataLoaded, onOrientationChange }: OrientationEnforcerProps) {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkOrientation = () => {
        let currentIsPortrait;
        // Prefer screen.orientation API if available
        if (window.screen && window.screen.orientation) {
          currentIsPortrait = window.screen.orientation.type.startsWith('portrait');
        } else {
          // Fallback for older browsers or devices
          currentIsPortrait = window.innerHeight > window.innerWidth;
        }
        setIsPortrait(currentIsPortrait);
        onOrientationChange(currentIsPortrait);
      };

      checkOrientation(); // Initial check

      const orientationChangeHandler = () => checkOrientation();
      
      // Modern API for orientation changes
      if (window.screen && window.screen.orientation) {
        window.screen.orientation.addEventListener('change', orientationChangeHandler);
        return () => window.screen.orientation.removeEventListener('change', orientationChangeHandler);
      } else {
        // Fallback for resize events (less reliable for pure orientation changes)
        window.addEventListener('resize', orientationChangeHandler);
        return () => window.removeEventListener('resize', orientationChangeHandler);
      }
    } else {
      // Default to landscape-like state on server or if window is undefined
      setIsPortrait(false); 
      onOrientationChange(false);
    }
  }, [onOrientationChange]);

  // Show the enforcer message if data is loaded AND the device is in portrait mode.
  if (!isDataLoaded || isPortrait === null || !isPortrait) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4">
      <Alert variant="destructive" className="max-w-md text-center shadow-2xl border-destructive">
        <RotateCcw className="h-12 w-12 mx-auto mb-4 text-destructive" />
        <AlertTitle className="text-2xl font-bold mb-2">Rotate Your Device</AlertTitle>
        <AlertDescription className="text-lg">
          This application is best experienced in landscape mode. Please rotate your device to continue.
        </AlertDescription>
      </Alert>
    </div>
  );
}
