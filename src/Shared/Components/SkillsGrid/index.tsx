
import Image, { StaticImageData } from "next/image"

const SkillsGrid = ({ icons }: { icons: StaticImageData[] }) => {
    return (
        <div className="w-full grid grid-cols-4 gap-1 p-2 border-t border-gray-400">
            {icons.map((src, index) => (
                <div key={index} className="flex items-center justify-center p-4 rounded">
                    <Image src={src} alt={`Icon ${index + 1}`} width={50} height={50} className="object-contain" />
                </div>
            ))}
        </div>
    )
}

export default SkillsGrid
