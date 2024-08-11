import icons from "@/Assets/icons"
import Image, { StaticImageData } from "next/image"

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

const SkillsGrid = () => {
    return (
        <div className="w-full grid grid-cols-4 gap-1 p-2 border-t border-gray-400">
            {iconList.map((src, index) => (
                <div key={index} className="flex items-center justify-center p-4 rounded">
                    <Image src={src} alt={`Icon ${index + 1}`} width={50} height={50} className="object-contain" />
                </div>
            ))}
        </div>
    )
}

export default SkillsGrid