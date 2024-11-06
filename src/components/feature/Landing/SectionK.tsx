import Container from "@/components/common/Container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function SectionK() {
    return <section className="w-full overflow-x-hidden">
        <Container className="items-center">
            <span className="font-[400] text-[15.52px] lg:text-[22px] leading-[57px] text-[#187593]">Latest</span>
            <span className="font-[400] text-[29.1px] lg:text-[43px] leading-[57px] text-[#187593] text-center">News & Event</span>

            <Carousel className="w-full max-w-5xl">
                <CarouselContent className="">
                    <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex justify-center">
                            <div className="flex items-center flex-col border-2 border-[#70DDF0] h-[426px] w-[319px] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                                <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px] object-contain" />
                                <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                                <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex justify-center">
                            <div className="flex items-center flex-col border-2 border-[#70DDF0] h-[426px] w-[319px] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                                <img src="/images/landing/im_m.png" alt="" className="w-[301px] h-[315px] object-contain" />
                                <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Convocation Ceremony</span>
                                <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">An exceptional convocation ceremony was conducted at the classic fort,thripunithara.</span>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex justify-center">
                            <div className="flex items-center flex-col border-2 border-[#70DDF0] h-[426px] w-[319px] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                                <img src="/images/landing/im_n.png" alt="" className="w-[301px] h-[315px] object-contain" />
                                <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Industrial Visit</span>
                                <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">IV for Aviation students at Grand Mercure Hotels Bangalore.</span>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
            {/* <div className="w-full flex overflow-x-auto gap-x-5 lg:justify-center">

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
            </div> */}
        </Container>
    </section>
}