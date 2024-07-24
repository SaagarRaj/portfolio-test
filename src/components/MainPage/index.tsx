import Image from "next/image"

import SampleImage from "./19362653.jpg"

type Props = {}

export const MainPage = (props: Props) => {


    return (
        <>
            <section className=" h-[100vh]  mt-0">
                <div className="w-[80%] mx-auto h-full">
                    <div className="flex items-center justify-center h-full">
                        {/* Left section */}
                        <div className="flex flex-col items-start">
                            <p className="">Hi, I am </p>
                            <p className="text-[4rem]">Saagar Raj Tiwari</p>
                            <p>A Full-stack Developer</p>
                            <button className="border border-black rounded-md w-[20%] p-2 mt-6 hover:bg-black hover:text-custom-yellow"> Resume </button>
                        </div>
                        {/* Right section */}
                        <div>
                            <Image className="translate-x-10" src={SampleImage} alt="Dev Image" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>
            {/* About Me */}
            <section className="flex items-center justify-center bg-custom-blue text-white">
                {/* main content */}
                <div className="flex flex-col items-start justify-start h-[50vh] w-[80%] mx-auto p-6">
                    {/* title div */}
                    <div className="w-full mb-4">
                        <h1 className="text-2xl font-thin -translate-x-20"><span className="text-custom-yellow font-robotoMono ">01.</span>About Me</h1>
                    </div>
                    {/* content div */}
                    <div className="flex w-full ">
                        {/* left div */}
                        <div className="w-[60%] flex flex-col  m-2 ">
                            <h1 className="">Left</h1>
                            <h1 className="">Left</h1>
                            <h1 className="">Left</h1>
                            <h1 className="">Left</h1>
                        </div>
                        {/* right */}
                        <div className="w-[40%] flex items-center justify-center m-2 ">
                            <h1 className="">Right</h1>
                            <h1 className="">Right</h1>
                            <h1 className="">Right</h1>
                            <h1 className="">Right</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="mt-5">
                <div className="w-[80%] h-[70vh] mx-auto flex flex-col items-start p-6 ">
                    {/* Title div */}
                    <div className="w-full mb-4">
                        <h1 className="text-2xl font-thin -translate-x-20"><span className="text-custom-yellow font-robotoMono ">02.</span>Experience</h1>
                    </div>
                    {/* content div */}
                    <div className="flex items-start h-full w-full ">
                        {/* content left name of the company */}
                        <div className="w-[30%]  items-start flex flex-col p-4">
                            <button className="p-4 focus:border-l-2 focus:border-l-custom-blue">Company 1</button>
                            <button className="p-4 focus:border-l-2 focus:border-l-custom-blue">Company 2 </button>
                        </div>
                        {/* content right experience details */}
                        <div className="w-[70%] h-full p-4 ">
                            {/* experience card*/}
                            <div className=" w-[75%] mx-auto rounded-lg bg-custom-blue flex flex-col items-center text-white p-[1.25rem]">
                                <div className="p-2 mt-2">
                                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit anim id est laborum
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <div className="flex items-center justify-evenly ">
                                        <button className="bg-custom-yellow p-2 rounded m-4 hover:text-black w-[20%]"> link1</button>
                                        <button className="bg-custom-yellow p-2 rounded m-4 hover:text-black w-[20%]"> link2</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}