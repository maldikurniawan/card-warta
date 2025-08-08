
const Circle = () => {
    return (
        <>
            <div
                className="w-[111px] h-[111px] md:w-[211px] md:h-[211px] bg-[#FCB03A] absolute rounded-full bg-blur-200 -z-10 top-0 left-0"
            ></div>
            <div
                className="hidden md:block w-[282px] h-[282px] bg-[#FCB03A] absolute rounded-full bg-blur-200 -z-10 top-0 right-0"
            ></div>
            <div
                className="hidden md:block w-[284px] h-[284px] bg-[#FCB03A] absolute rounded-full bg-blur-200 -z-10 top-1/2 left-1/3"
            ></div>
            <div
                className="hidden md:block w-[198px] h-[198px] bg-[#FCB03A] absolute rounded-full bg-blur-200 -z-10 bottom-0 left-0"
            ></div>
            <div
                className="w-[184px] h-[184px] md:w-[284px] md:h-[284px] bg-[#FCB03A] absolute rounded-full bg-blur-200 -z-10 bottom-0 right-0"
            ></div>
        </>
    )
}

export default Circle