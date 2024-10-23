import Container from "@/components/common/Container";

export default function SectionK() {
    return <section className="w-full min-h-[20vh]">
        <Container className="items-center">
            <span className="font-[400] text-[15.52px] lg:text-[22px] leading-[57px] text-[#187593]">Latest</span>
            <span className="font-[400] text-[29.1px] lg:text-[43px] leading-[57px] text-[#187593]">News & Event</span>

            <div className="w-full flex overflow-x-auto gap-x-5 lg:justify-center">
                <div className="flex items-center flex-col w-[319px] min-w-[319px] border-2 border-[#70DDF0] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                    <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px] object-contain" />
                    <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                    <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                </div>
                <div className="flex items-center flex-col w-[319px] min-w-[319px] border-2 border-[#70DDF0] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                    <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px] object-contain" />
                    <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                    <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                </div>
                <div className="flex items-center flex-col w-[319px] min-w-[319px] border-2 border-[#70DDF0] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                    <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px] object-contain" />
                    <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                    <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                </div>
            </div>
        </Container>
    </section>
}