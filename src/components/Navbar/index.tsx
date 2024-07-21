

type Props = {}

export const Navbar = (props: Props) => {
    const NavItemsStyleClass = " p-4 border-b-2 border-transparent transition-all duration-300 hover:border-custom-yellow cursor-pointer"
    return (
        <nav>
            <div className="flex items-center justify-center  gap-[4rem] font-roboto text-lg font-thin">
                <p className={NavItemsStyleClass}> About </p>
                <p className={NavItemsStyleClass}> Experience </p>
                <p className={NavItemsStyleClass}> Project </p>
                <p className={NavItemsStyleClass}> Resume </p>
            </div>
        </nav>
    )
}