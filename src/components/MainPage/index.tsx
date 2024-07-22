

type Props = {}

export const MainPage = (props: Props) => {
    return (
        <>
            <section className=" h-[100vh]  mt-0">
                <div className="w-[80%] mx-auto h-full">
                    <div className="flex items-center justify-center h-full">
                        <h1 className="text-[8rem]"> Hero Section</h1>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center ">


                <div className="flex flex-col items-start justify-startf h-[50vh] w-[80%] mx-auto p-6">

                    <div className="w-full mb-4">
                        <h1 className="text-2xl font-thin">About Me</h1>
                    </div>
                    <div className="flex w-full ">
                        <div className="w-[60%] flex flex-col  m-2 ">
                            <h1 className="">Left</h1>
                            <h1 className="">Left</h1>
                            <h1 className="">Left</h1>
                            <h1 className="">Left</h1>
                        </div>
                        <div className="w-[40%] flex items-center justify-center m-2 ">
                            <h1 className="">Right</h1>
                            <h1 className="">Right</h1>
                            <h1 className="">Right</h1>
                            <h1 className="">Right</h1>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}