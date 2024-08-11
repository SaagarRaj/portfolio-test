
type Props = {
    number: number,
    title: string
}

const SectionTitle = ({ number, title }: Props) => {
    return (
        <div className="w-full mb-4">
            <h1 className="text-2xl font-thin -translate-x-20">
                <span className="text-custom-yellow font-robotoMono">{number}</span>
                {title}
            </h1>
        </div>
    )
}

export default SectionTitle;