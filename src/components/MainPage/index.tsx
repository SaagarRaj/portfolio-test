import Image, { StaticImageData } from "next/image";
import SampleImage from "./icons/19362653.jpg"
import icons from "./icon";
import { ProjectCard } from "@/shared Components/ProjectCard";


type Props = {};

const iconList = [
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
    icons.android,
];

const SectionTitle = ({ number, title }: { number: string; title: string }) => (
    <div className="w-full mb-4">
        <h1 className="text-2xl font-thin -translate-x-20">
            <span className="text-custom-yellow font-robotoMono">{number}</span>
            {title}
        </h1>
    </div>
);

const SkillsGrid = ({ icons }: { icons: StaticImageData[] }) => (
    <div className="w-full grid grid-cols-4 gap-1 p-2 border-t border-gray-400">
        {icons.map((src, index) => (
            <div key={index} className="flex items-center justify-center p-4 rounded">
                <Image src={src} alt={`Icon ${index + 1}`} width={50} height={50} className="object-contain" />
            </div>
        ))}
    </div>
);

const ExperienceCard = () => (
    <div className="w-[90%] rounded-lg bg-custom-blue flex flex-col text-white p-[1.25rem] shadow-neon-inverted mx-auto">
        <div className="p-2 mt-2">
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex items-center justify-evenly">
                <button className="bg-custom-yellow p-2 rounded m-4 hover:text-black w-[20%]">link1</button>
                <button className="bg-custom-yellow p-2 rounded m-4 hover:text-black w-[20%]">link2</button>
            </div>
        </div>
    </div>
);

export const MainPage = (props: Props) => {
    return (
        <>
            {/* Introduction Section */}
            <section className="h-[100vh] mt-0">
                <div className="w-[80%] mx-auto h-full">
                    <div className="flex items-center justify-center h-full">
                        {/* Left section */}
                        <div className="flex flex-col items-start">
                            <p>Hi, I am</p>
                            <p className="text-[4rem] p-2 pt-0">Saagar Raj Tiwari</p>
                            <p>A Full-stack Developer</p>
                            <button className="border border-black rounded-md w-[20%] p-2 mt-6 hover:bg-black hover:text-custom-yellow">
                                Resume
                            </button>
                            <div className="flex items-center justify-center mt-2 gap-4">
                                <Image className="hover:cursor-pointer" src={icons.githubIcon} alt={`Github Icon`} width={25} height={25} onClick={() => window.location.href = "https://github.com/SaagarRaj"} />
                                <Image className="hover:cursor-pointer" src={icons.linkedInIcon} alt={`linkedIn Icon`} width={25} height={25} onClick={() => window.location.href = " https://www.linkedin.com/in/srt99/"} />
                                <a href="mailto:saagar991@gmail.com"><Image className="hover:cursor-pointer" src={icons.mailIcon} alt={`Mail Icon`} width={25} height={25} /></a>
                            </div>
                        </div>
                        {/* Right section */}
                        <div>
                            <Image className="translate-x-10" src={SampleImage} alt="Dev Image" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="flex items-center justify-center bg-custom-blue text-white">
                <div className="flex flex-col items-start justify-start w-[80%] mx-auto p-6">
                    <SectionTitle number="01." title="About Me" />
                    <div className="flex justify-between w-full gap-2">
                        {/* Left section */}
                        <div className="w-[40%] flex flex-col m-2">
                            <p className="text-justify font-light mt-4">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Quisque pretium ante porttitor condimentum ante at scelerisque
                                aenean interdum. Potenti a sagittis phasellus dolor, tincidunt quis nec eget. Felis commodo mus cras pulvinar penatibus
                                aliquet. Blandit integer interdum facilisis in eleifend curabitur. Massa ultrices augue gravida odio enim egestas blandit
                                curae cras. Lacinia fringilla mauris ut aptent eu. Congue odio fusce eu curae consectetur. Ut amet molestie pulvinar class
                                id ut neque.
                            </p>
                        </div>
                        {/* Right section */}
                        <div className="flex flex-col w-[40%]">
                            <div className="flex items-center justify-center mb-2">
                                <h2 className="font-light text-xl text-gray-400">Skills</h2>
                            </div>
                            <SkillsGrid icons={iconList} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="mt-2 bg-custom-offWhite">
                <div className="w-[80%]  mx-auto flex flex-col items-start p-6">
                    <SectionTitle number="02." title="Experience" />
                    <div className="flex items-start justify-between h-full w-full">
                        {/* Left section: Company buttons */}
                        <div className="w-[30%] items-start flex flex-col p-4 shadow-md">
                            <button className="w-full p-4 focus:border-l-2 focus:border-l-custom-blue focus:bg-white ">Cognizant Technological Solutions</button>
                            <button className="w-full p-4 focus:border-l-2 focus:border-l-custom-blue focus:bg-white">National Chin-yi University of Technology, Taiwan</button>
                        </div>
                        {/* Right section: Experience details */}
                        <div className="w-[60%] h-full p-4 ">
                            <ExperienceCard />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-2 bg-custom-offWhite">
                <div className="w-[80%] mx-auto flex flex-col items-start p-6">
                    <SectionTitle number="03." title="Projects" />
                    <div className="grid grid-flow-row grid-cols-2 gap-6 w-full">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />

                    </div>
                </div>
            </section>
        </>
    );
};
