import Container from "@/components/common/Container";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function SectionI() {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    const data = [
        {
            year: '2020 - 2022',
            image: '/images/landing/im_k.png',
            title: 'GANDHIYAN SEVANA PURASKARAM',
        },
        {
            year: '2022 - 2024',
            image: '/images/landing/im_k.png',
            title: 'SAMPLE PURASKARAM',
        },
        {
            year: '2024 - 2026',
            image: '/images/landing/im_k.png',
            title: 'TEST PURASKARAM',
        }
    ]

    useEffect(() => {
        if (api) {
            console.log('api found');
            setCurrent(api.selectedScrollSnap())

            api.on("select", () => {
                setCurrent(api.selectedScrollSnap())
            })

            const currentIndexRef = { current: 0 };

            setInterval(() => {
                currentIndexRef.current = (currentIndexRef.current + 1) % data.length;
                api?.scrollTo(currentIndexRef.current);
            }, 1000 * 3);

        } else {
            console.log('api not found');
        }
    }, [api])

    return <section className="w-full overflow-x-hidden min-h-[70vh] bg-[#EDFDFE]">
        <Container className="items-center">
            <span className="font-[400] text-[15.52px] lg:text-[22px] leading-[57px] text-[#187593]">Awards & Recognition</span>
            <span className="font-[400] text-[29.1px] lg:text-[43px] leading-[57px] text-[#187593]">Our Achievement</span>
            <div className="my-16 flex items-center relative justify-center z-30">
                <Carousel setApi={setApi} className="w-full z-30">
                    <CarouselContent>
                        {
                            data.map((item, index) => (
                                <CarouselItem className=" w-full flex justify-center items-center z-30">
                                    <img src="/images/landing/im_k.png" className="w-full md:w-[70%] lg:w-[674px] lg:h-[409px] z-10" alt="" />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
                <span className="w-screen text-center text-[150px] leading-[294.19px] text-[#D2F7FB] absolute -mt-[100px] hidden lg:block">
                    {data[current].year}
                </span>
                <img src="/images/landing/rb_a.png" alt="" className="absolute z-20 w-[43px] h-[90px] top-0 left-0 -mt-[70px] lg:-mt-[70px] lg:-ml-[70px] hidden xs:flex" />
                <img src="/images/landing/rb_b.png" alt="" className="absolute z-20 w-[52px] h-[57px] top-0 right-0 -mt-[70px] lg:-mr-[70px] hidden xs:flex" />
                <img src="/images/landing/rb_c.png" alt="" className="absolute z-20 w-[52px] h-[50px] lg:h-[228px] bottom-0 left-0 -mb-10 lg:mt-[70px] lg:-ml-[70px] hidden xs:flex" />
                <img src="/images/landing/rb_d.png" alt="" className="absolute z-20 w-[85px] h-[80px] bottom-0 right-0 -mt-[70px] lg:-mr-[70px] hidden xs:flex" />
            </div>
            <p className="font-wa font-[600] text-[12.61px] leading-[18.43px] lg:text-[19px] lg:leading-[23px] text-center text-[#187593]">
                {data[current].title}<br />{data[current].year}
            </p>
            <br />
            <span className="w-screen flex justify-center font-[400] lg:hidden text-[20px] xs:text-[40.25px] text-[#D2F7FB]">2020 - 2022</span>
        </Container>
    </section>
}