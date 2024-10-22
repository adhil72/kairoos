import Container from "@/components/common/Container";

export default function SectionI() {
    return <section className="w-full min-h-[70vh] bg-[#EDFDFE]">
        <Container className="items-center">
            <span className="font-[400] text-[22px] leading-[57px] text-[#187593]">Awards & Recognition</span>
            <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">Our Achievement</span>
            <div className="my-16 flex items-center relative justify-center">
                <img src="/images/landing/im_k.png" className="w-[674px] h-[409px] z-10" alt="" />
                <span className="w-full text-[150px] leading-[294.19px] text-[#D2F7FB] absolute -mt-[100px]">
                    2020 - 2022
                </span>
                <img src="/images/landing/rb_a.png" alt=""  className="absolute z-20 w-[43px] h-[90px] top-0 left-0 -mt-[70px] -ml-[70px]"/>
                <img src="/images/landing/rb_b.png" alt=""  className="absolute z-20 w-[52px] h-[57px] top-0 right-0 -mt-[70px] -mr-[70px]"/>
                <img src="/images/landing/rb_c.png" alt=""  className="absolute z-20 w-[52px] h-[228px] bottom-0 left-0 mt-[70px] -ml-[70px]"/>
                <img src="/images/landing/rb_d.png" alt=""  className="absolute z-20 w-[85px] h-[80px] bottom-0 right-0 -mt-[70px] -mr-[70px]"/>

            </div>
        </Container>
    </section>
}