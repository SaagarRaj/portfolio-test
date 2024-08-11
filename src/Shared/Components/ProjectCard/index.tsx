import React from 'react'
import { IconMapping } from '@/Shared/Types/types'
import icons from '@/Assets/icons'
import Image, { StaticImageData } from 'next/image'

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
    image: StaticImageData,
    title: string,
    description: string,
    techUsed: string[],
    projectLink: string,
}

const ProjectCard = ({ image, title, description, techUsed, projectLink }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center m-4 border border-gray-400 rounded-lg p-4 ">
            <div className="flex items-center justify-center w-full">
                {/* Image */}
                <Image src={image} alt="banner" height={300} width={550} className="rounded-md" />
            </div>

            {/* Project Title and Description */}
            <div className="flex flex-col p-4 text-justify items-start w-full">
                <h1 className="font-semibold mb-2">{title}</h1>
                <p className="font-light"> {description}</p>
            </div>

            {/* Technology Icons and Project Link */}
            <div className="flex items-start justify-between p-4 gap-2 w-full">
                <div className="hidden md:flex items-start justify-center gap-2">

                    {techUsed.map((tech) => {
                        const Icon = iconMapping[tech];
                        return Icon ? (<Image key={tech} src={Icon} height={25} width={25} alt={`${tech} icon`} />) : null;
                    })}
                </div>
                <div className="flex items-start justify-center gap-2">
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