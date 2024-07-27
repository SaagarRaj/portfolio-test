import Image from "next/image"
import SampleImage from "./Screenshot 2024-07-26 at 6.14.13 PM.png"
import { Divider } from "@mui/material"
import icons from "@/components/MainPage/icon"

type Props = {}

export const ProjectCard = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center m-4 border border-gray-400 rounded-lg p-4">
            <div className="flex items-center justify-center w-full">
                {/* image */}
                <Image src={SampleImage} alt={"banner"} height={300} width={550} className="rounded-md" />
            </div>
            <div className="flex items-center justify-center">
                <Divider orientation="vertical" flexItem variant="middle" className="border-black border-2" />
            </div>
            <div className="flex flex-col p-4 text-justify">
                <h1 className="font-semibold mb-2">Project Title</h1>
                {/* description */}
                <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="flex items-start justify-between p-4 gap-2 w-full">
                {/* Tech used */}
                <div className="flex items-start justify-center gap-2">
                    <Image src={icons.React2} height={25} width={25} alt="icon" />
                    <Image src={icons.typescriptIcon} height={25} width={25} alt="icon" />
                    <Image src={icons.MongoDBIcon} height={25} width={25} alt="icon" />
                    <Image src={icons.tailwindIcon} height={25} width={25} alt="icon" />
                </div>
                <div className="flex items-start justify-center gap-2">
                    <Image src={icons.githubIcon} height={25} width={25} alt="icon" />

                </div>
            </div>
        </div>
    )
}

