import SectionTitle from "@/Shared/Components/SectionTitle"
import { ProjectObjectType } from "@/Shared/Types/types"
import ProjectCard from "@/Shared/Components/ProjectCard"

interface ExperimentProps {
    content: ProjectObjectType[]
}

const Project: React.FC<ExperimentProps> = ({ content }) => {
    return (
        <section id="project" className="mt-2 bg-custom-offWhite">
            <div className="w-full md:w-[80%] mx-auto flex flex-col items-start p-6">
                <SectionTitle number="03." title="Projects" />
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mt-4">
                    {content.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} techUsed={project.techUsed} projectLink={project.projectLink} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;