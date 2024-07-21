'use client'
import { MainPage } from "@/components/MainPage";
import { Navbar } from "@/components/Navbar";
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

      <Navbar />
      <MainPage />


    </>
  );
}
