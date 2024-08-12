'use client'
import { Navbar } from "@/Scenes/Navbar";
import SplashScreen from "@/Scenes/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import icons from "@/Assets/icons";
import DevImage from "@/Assets/icons/icons/19362653.jpg"
import About from "@/Scenes/About";
import { ExperienceObjectType, ProjectObjectType } from "@/Shared/Types/types";
import Experience from "@/Scenes/Experience";
import Project from "@/Scenes/Projects";
import Contact from "@/Scenes/Contact ";


export default function Home() {

  const ExperienceObject: ExperienceObjectType[] = [
    {
      name: "Teaching Assistant",
      title: "Teaching assistant",
      Date: "Aug,2024 - present",
      description: `In my journey, I've had the opportunity to delve into diverse projects, showcasing my passion for innovation and problem-solving. From developing a weather broadcasting system that seamlessly integrates hardware and software components to constructing IoT applications using the Lego EV3 development kit, each endeavour has been a learning experience. I've leveraged tools like Arduino Uno and DTH11 sensor modules to capture weather data with precision and efficiency, achieving a remarkable accuracy rate. Moreover, my foray into Android app development has equipped me with a fundamental understanding of the Android lifecycle, as evidenced by the creation of a calculator app using JAVA, XML, and MVVM architecture. Notably, my achievements extend beyond individual projects, as evidenced by my First Prize win in the Lego Robot Competition at TEEP@AsiaPlus. There, I engineered a robot capable of navigating obstacles and following a designated path with remarkable speed and accuracy, a testament to my dedication and expertise in the field.`,
    },

    {
      name: 'Cognizant Technological Solutions',
      title: "Programmer Analyst Trainee",
      Date: "Aug,2021 - May,2022",
      description: `Throughout my professional journey, I've had the privilege of collaborating within dynamic teams to tackle real-world challenges using Google Cloud Platform services. Whether it was assisting a client in setting up Google Cloud Pub/Sub or customising virtual machine instances to meet project requirements, I've consistently delivered solutions that align with client expectations. My commitment to effective communication has been instrumental, as I've adeptly translated technical jargon into understandable terms for clients and stakeholders, ensuring smooth project progress and issue resolution. Additionally, I've authored comprehensive documentation to streamline processes and share best practices within the team.`,
    },
    {
      name: "National Chin-yi University of Technology, Taiwan",
      title: "Student Intern",
      Date: "Aug,2018 - Jul,2018",
      description: `In my journey, I've had the opportunity to delve into diverse projects, showcasing my passion for innovation and problem-solving. From developing a weather broadcasting system that seamlessly integrates hardware and software components to constructing IoT applications using the Lego EV3 development kit, each endeavour has been a learning experience. I've leveraged tools like Arduino Uno and DTH11 sensor modules to capture weather data with precision and efficiency, achieving a remarkable accuracy rate. Moreover, my foray into Android app development has equipped me with a fundamental understanding of the Android lifecycle, as evidenced by the creation of a calculator app using JAVA, XML, and MVVM architecture. Notably, my achievements extend beyond individual projects, as evidenced by my First Prize win in the Lego Robot Competition at TEEP@AsiaPlus. There, I engineered a robot capable of navigating obstacles and following a designated path with remarkable speed and accuracy, a testament to my dedication and expertise in the field.`,
    }
  ];

  const ProjectObject: ProjectObjectType[] = [
    {
      title: "Project Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      techUsed: ["html", "typescript", "firebase", "tailwind"],
      projectLink: "link"
    },
    {
      title: "Project Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      techUsed: ["react", "javascript", "mongodb", "tailwind"],
      projectLink: "link"
    },
    {

      title: "Project Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      techUsed: ["android", "firebase"],
      projectLink: "https://loremipsum.io/generator"
    }
  ];

  const iconList: StaticImageData[] = [
    icons.htmlIcon,
    icons.cssIcon,
    icons.javascriptIcon,
    icons.typescriptIcon,
    icons.pythonIcon,
    icons.reactIcon,
    icons.nodeIcon,
    icons.tailwindIcon,
    icons.MongoDBIcon,
    icons.firebaseIcon,
    icons.sqlIcon,
    icons.androidIcon,
  ]

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

      {/* About Section */}
      <About icons={iconList} />

      {/* Experience */}
      <Experience ExpObj={ExperienceObject} />

      {/* Project */}
      <Project content={ProjectObject} />

      {/* Contact */}
      <Contact />
    </>
  );
}
