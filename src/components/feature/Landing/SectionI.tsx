import Container from "@/components/common/Container";

export default function SectionI() {
    return <section className="w-full overflow-x-hidden min-h-[70vh] bg-[#EDFDFE]">
        <Container className="items-center">
            <span className="font-[400] text-[15.52px] lg:text-[22px] leading-[57px] text-[#187593]">Awards & Recognition</span>
            <span className="font-[400] text-[29.1px] lg:text-[43px] leading-[57px] text-[#187593]">Our Achievement</span>
            <div className="my-16 flex items-center relative justify-center">
                <img src="/images/landing/im_k.png" className="w-full lg:w-[674px] lg:h-[409px] z-10" alt="" />
                <span className="w-screen text-center text-[150px] leading-[294.19px] text-[#D2F7FB] absolute -mt-[100px] hidden lg:block">
                    2020 - 2022
                </span>
                <img src="/images/landing/rb_a.png" alt="" className="absolute z-20 w-[43px] h-[90px] top-0 left-0 -mt-[70px] lg:-mt-[70px] lg:-ml-[70px]" />
                <img src="/images/landing/rb_b.png" alt="" className="absolute z-20 w-[52px] h-[57px] top-0 right-0 -mt-[70px] lg:-mr-[70px]" />
                <img src="/images/landing/rb_c.png" alt="" className="absolute z-20 w-[52px] h-[50px] lg:h-[228px] bottom-0 left-0 -mb-10 lg:mt-[70px] lg:-ml-[70px]" />
                <img src="/images/landing/rb_d.png" alt="" className="absolute z-20 w-[85px] h-[80px] bottom-0 right-0 -mt-[70px] lg:-mr-[70px]" />
            </div>
            <p className="font-wa font-[600] text-[12.61px] leading-[18.43px] lg:text-[19px] lg:leading-[23px] text-center text-[#187593]">
                GANDHIYAN SEVANA PURASKARAM<br />2020 - 22
            </p>
            <br />
            <span className="font-[400] lg:hidden text-[40.25px] text-[#D2F7FB]">2020 - 2022</span>
        </Container>
    </section>
}