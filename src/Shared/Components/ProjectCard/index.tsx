import React from 'react'
import { IconMapping } from '@/Shared/Types/types'
import icons from '@/Assets/icons'
import Image from 'next/image'

const iconMapping: IconMapping = {
    android: icons.androidIcon,
    html: icons.htmlIcon,
    css: icons.cssIcon,
    javascript: icons.javascriptIcon,
    typescript: icons.typescriptIcon,
    node: icons.nodeIcon,
    tailwind: icons.tailwindIcon,
    mongodb: icons.MongoDBIcon,
    python: icons.pythonIcon,
    firebase: icons.firebaseIcon,
    sql: icons.sqlIcon,
}

type Props = {
    title: string,
    description: string,
    techUsed: string[],
    projectLink: string,
}

const ProjectCard = ({ title, description, techUsed, projectLink }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center m-4 border border-gray-400 rounded-lg p-4 ">
            <div className="flex items-center justify-center w-full">
                {/* Image */}
                {/* <Image src={image} alt="banner" height={300} width={550} className="rounded-md" /> */}
                {/* <div className='h-[100px] w-full rounded-md p-4 flex items-center justify-center bg-custom-blue-gradient text-white'>
                    <h1 className='text-[2rem] font-robotoMono '> Sorting Visualizer</h1>
                </div> */}
            </div>

            {/* Project Title and Description */}
            <div className="flex flex-col p-4  items-center w-full">
                <h1 className="font-semibold mb-2 ">{title}</h1>
                <hr className='w-full border-gray-500' />
                <p className="font-light text-justify mt-4"> {description}</p>
            </div>

            {/* Technology Icons and Project Link */}
            <div className="flex flex-col items-center p-4 gap-4 w-full md:flex-row md:items-start md:justify-between">
                {/* Technology Icons */}
                <div className="flex md:flex-wrap items-center justify-evenly md:justify-center gap-2 w-full md:w-auto">
                    {techUsed.map((tech) => {
                        const Icon = iconMapping[tech];
                        return Icon ? (
                            <Image key={tech} src={Icon} height={25} width={25} alt={`${tech} icon`} />
                        ) : null;
                    })}
                </div>

                {/* Project Link */}
                <div className="flex items-center gap-2">
                    <span className="font-extralight">Project Link</span>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <Image className="cursor-pointer" src={icons.githubIcon} height={25} width={25} alt="GitHub icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard