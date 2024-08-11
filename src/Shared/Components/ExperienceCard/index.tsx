import React from 'react'

type Props = {
    title: string,
    description: string,
    date: string
}

const ExperienceCard = ({ title, description, date }: Props) => {
    return (
        <div className="md:w-[90%] w-full rounded-lg bg-custom-blue flex flex-col text-white p-[1.25rem] shadow-neon-inverted mx-auto">
            <div className="p-2 mt-2">
                <div className="w-full flex items-center justify-between pb-2 mb-4 border-b border-gray-400">
                    <h2 className="font-semibold">{title}</h2>
                    <span className="text-xs font-extralight">{date}</span>
                </div>
                <p className="text-justify font-extralight text-sm md:font-light p-2">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard