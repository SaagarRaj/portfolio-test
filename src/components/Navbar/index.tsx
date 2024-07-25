

type Props = {}

export const Navbar = (props: Props) => {
    const NavItemsStyleClass = " p-2 border-b-2 border-transparent transition-all duration-300 hover:border-custom-yellow cursor-pointer"
    return (
        <nav className="fixed top-0 left-0 right-0   z-20 backdrop-blur-2xl">
            <div className="flex items-center justify-center  gap-[3rem]  text-[0.9rem] font-light text-gray-400 shadow">
                <p className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">01. </span>About </p>
                <p className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">02. </span>Experience </p>
                <p className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">03. </span>Project </p>
                <p className={NavItemsStyleClass}> <span className="text-custom-yellow font-robotoMono ">04. </span> Contact </p>
                <p className={`${NavItemsStyleClass}`}> Resume </p>
            </div>
        </nav>
    )
}