import ExperienceCard from '@/Shared/Components/ExperienceCard'
import SectionTitle from '@/Shared/Components/SectionTitle'
import React from 'react'
import { ExperienceObjectType } from '@/Shared/Types/types'
import { useState } from 'react'
type Props = {
    ExpObj: ExperienceObjectType[]
}

const Experience = ({ ExpObj }: Props) => {
    const [selectedExp, setSelectedExp] = useState<ExperienceObjectType | null>(ExpObj[0]);

    const handleButtonClick = (index: number) => {
        setSelectedExp(ExpObj[index]);
    };
    return (
        <section id="experience" className="mt-2 bg-custom-offWhite">
            <div className="w-full max-w-screen-lg mx-auto flex flex-col items-start p-6 min-h-[70vh]">
                <SectionTitle number="02." title="Experience" />
                <div className="flex flex-col md:flex-row w-full gap-4">
                    {/* Left section: Company buttons */}
                    <div className="md:w-1/3 w-full flex flex-col p-4 shadow-md h-full">
                        {ExpObj.map((button, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(index)}
                                className="w-full p-4 mb-2 last:mb-0 focus:border-l-2 focus:border-l-custom-blue focus:bg-white"
                            >
                                {button.name}
                            </button>
                        ))}
                    </div>
                    {/* Right section: Experience details */}
                    <div className="md:w-2/3 w-full p-4">
                        {selectedExp ? (
                            <ExperienceCard
                                title={selectedExp.title}
                                description={selectedExp.description}
                                date={selectedExp.Date}
                            />
                        ) : (
                            <p className="text-center">Select an experience to view details.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience