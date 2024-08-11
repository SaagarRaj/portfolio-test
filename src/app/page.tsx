'use client'
import { Navbar } from "@/Scenes/Navbar";
import SplashScreen from "@/Scenes/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import icons from "@/Assets/icons";
import DevImage from "@/Assets/icons/icons/19362653.jpg"

export default function Home() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => { setShowSplash(false) }, 3000);
    return () => clearTimeout(timer);
  }, [])


  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen quote="Why do Git developers seem so calm ? " author="Becuse they have their commits under control" />
        )}
      </AnimatePresence>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="" className="h-[100vh] mt-0">
        <div className="w-[80%] mx-auto h-full">
          <div className="flex items-center justify-center h-full">
            {/* Left section */}
            <div className="flex flex-col items-start">
              <p>Hi, I am</p>
              <p className=" text-[3rem] md:text-[3.5rem] p-2 pt-0">Saagar Raj Tiwari</p>
              <p>A Full-stack Developer</p>
              <button className="border border-black rounded-md p-2 mt-6 hover:bg-black hover:text-custom-yellow">
                Resume
              </button>
              <div className="flex items-center justify-center mt-2 gap-4">
                <Image className="hover:cursor-pointer" src={icons.githubIcon} alt={`Github Icon`} width={25} height={25} onClick={() => window.location.href = "https://github.com/SaagarRaj"} />
                <Image className="hover:cursor-pointer" src={icons.linkedInIcon} alt={`LinkedIn Icon`} width={25} height={25} onClick={() => window.location.href = "https://www.linkedin.com/in/srt99/"} />
                <a href="mailto:saagar991@gmail.com"><Image className="hover:cursor-pointer" src={icons.mailIcon} alt={`Mail Icon`} width={25} height={25} /></a>
              </div>
            </div>
            {/* Right section */}
            <div className="hidden md:flex">
              <Image className="translate-x-10" src={DevImage} alt="Dev Image" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
