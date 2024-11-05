import Container from "@/components/common/Container";

export default function A() {
    return <Container className="flex items-center justify-center flex-col-reverse md:flex-row gap-[40px] md:gap-x-[120px]">
        <div className="">
            <h1 className="text-[26px] lg:text-[39px] text-center md:text-left font-normal text-[#0C3040] mb-2 md:mb-3 leading-[37px]">AVIATION</h1>
            <p className="text-lg text-black leading-[30px] lg:leading-[48px] text-center md:text-left">WE ARE HERE WITH YOUR DREAMS</p>
        </div>
        <div className=''>
            {/* <HeroB  className="w-full"/> */}
            <img src="/images/avitation/im_a.png" alt="" className="w-[214px] md:w-[259px] lg:w-[368px] h-[205px] md:h-[248.23px] lg:h-[352px]" />
        </div>
    </Container>
}