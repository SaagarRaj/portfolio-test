'use client'
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen quote="Every happiness is a hostage to fortune." author="Arthur Helps" />
        )}
      </AnimatePresence>
      <div>
        <h1>Home page</h1>
      </div>
    </>
  );
}
