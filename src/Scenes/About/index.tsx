import SectionTitle from '@/Shared/Components/SectionTitle'
import SkillsGrid from '@/Shared/Components/SkillsGrid'
import { StaticImageData } from 'next/image'
import React from 'react'

type Props = { icons: StaticImageData[] }

const About = ({ icons }: Props) => {
    const AboutMeContent: string = `As a Full Stack Developer and a Master's student in Computer Science at California State University, Long Beach, I combine technical proficiency, academic excellence, and creative passion to deliver web solutions that meet or exceed client expectations.<br /><br />
                                I have a strong background in Google Cloud Platform, having worked as a Programmer Analyst Trainee at Cognizant for 10 months. There, I trained on various cloud services, collaborated on real-world projects, and created detailed documentation. I also have expertise in TypeScript, React, Next.js, and Algorithms, which I use to craft seamless web experiences.<br /><br />
                                I am driven by innovation, problem-solving, and user satisfaction. I am always eager to learn new skills and technologies, and to collaborate with other professionals who share my vision. I am currently open to opportunities that challenge me and allow me to contribute to technological advancement.`

    return (
        <section id="aboutMe" className="flex items-center justify-center bg-custom-blue text-white">
            <div className="hidden md:flex flex-col items-start justify-start w-[80%] mx-auto p-6">
                <SectionTitle number="01." title="About Me" />
                <div className="flex justify-between w-full gap-2">
                    {/* Left section */}
                    <div className="w-[40%] flex flex-col m-2">
                        <p dangerouslySetInnerHTML={{ __html: AboutMeContent }} className="text-justify font-light mt-4" />
                    </div>
                    {/* Right section */}
                    <div className="flex flex-col w-[40%]">
                        <div className="flex items-center justify-center mb-2">
                            <h2 className="font-light text-xl text-gray-400">Skills</h2>
                        </div>
                        <SkillsGrid icons={icons} />
                    </div>
                </div>
            </div>

            <div className='md:hidden flex flex-col items-start bg-custom-blue text-white'>
                <SectionTitle number="01." title="About Me" />
                <div className='w-[90%] mx-auto'>
                    <p dangerouslySetInnerHTML={{ __html: AboutMeContent }} className="text-justify font-light mt-4 p-4" />
                    <h2 className="font-light text-xl text-gray-400 mt-4 text-center">Skills</h2>
                    <SkillsGrid icons={icons} />
                </div>
            </div>
        </section>
    )
}

export default About;