import Container from "@/components/common/Container";

export default function A() {
    return <Container className="flex items-center justify-center flex-col-reverse lg:flex-row lg:gap-x-[120px]">
        <div className="">
            <h1 className="text-4xl font-bold text-tint">AVIATION</h1>
            <p className="text-lg text-gray-600">WE ARE HERE WITH YOUR DREAMS</p>
        </div>
        <div className=''>
            {/* <HeroB  className="w-full"/> */}
            <img src="/images/avitation/im_a.png" alt="" className="w-full lg:w-[368px] lg:h-[352px]" />
        </div>
    </Container>
}