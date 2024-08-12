
type Props = {
    number: string,
    title: string
}

const SectionTitle = ({ number, title }: Props) => {
    return (
        <div className="w-full mb-4">
            <h1 className="text-2xl font-thin md:-translate-x-20 p-2 translate-y-6 md:translate-y-0">
                <span className="text-custom-yellow font-robotoMono">{number}</span>
                {title}
            </h1>
        </div>
    )
}

export default SectionTitle;