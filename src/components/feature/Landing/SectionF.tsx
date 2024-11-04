import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import B1 from "./assets/B1";
import B2 from "./assets/B2";
import B3 from "./assets/B3";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import Node from "@/assets/Node";
import B from "./assets/B";
import Circle from "./assets/Circle";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const data = [
    {
        count: '01',
        desc: 'Our curriculum offers a unique international experience that is tailored to the interests of our students.'
    },
    {
        count: '02',
        desc: 'International education experience allows students to grow as people and become more open-minded.'
    },
    {
        count: '03',
        desc: 'Our classes are taken by pilots, cabin crews, stewards, and other ground staff professionals.'
    },
    {
        count: '04',
        desc: 'We offer a wide range of courses that are designed to meet the needs of our students.'
    },
    {
        count: '05',
        desc: 'Our courses are designed to help students develop the skills they need to succeed in the aviation industry.'
    },
    {
        count: '06',
        desc: 'Our courses are designed to help students develop the skills they need to succeed in the aviation industry.'
    },
    {
        count: '07',
        desc: 'Our courses are designed to help students develop the skills they need to succeed in the aviation industry.'
    }
];

function Box({ count, desc }: { count: string, desc: string }) {
    return (
        <div className="min-w-[327.5px] w-[327.5px] h-[177.5px] relative">
            <B className="w-full h-full absolute" />
            <div className="absolute w-[81.82px] h-[81.82px] mt-[15.02px] ml-[10.57px] flex justify-center items-center">
                <Circle className="w-[81.82px] h-[81.82px] absolute" />
                <span className="absolute z-10 text-[27.71px] leading-[44.35px] text-[#1B4A5E]">
                    {count}
                </span>
            </div>
            <div className="absolute right-0 w-[195px] h-full flex items-center justify-center pr-[11.5px] text-[#187593] font-wa font-[500] text-[16px] leading-[26px]">
                {desc}
            </div>
        </div>
    );
}

export default function SectionF() {
    const [api, setApi] = React.useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const scrollLeft = () => {
        api?.scrollPrev()
    }

    const scrollRight = () => {
        api?.scrollNext()
    }

    const [current, setCurrent] = useState(0)


    return (
        <section className="w-full">
            <Container className="items-center">
                <span className="text-[#187593] text-[15.52px] lg:text-[22px] lg:leading-[57px] font-[400] text-center">Why Kairos Institute?</span>
                <span className="text-[#187593] text-[29px] lg:text-[43px] lg:leading-[57px] font-[400] text-center">Experience a New Era <br />of Learning</span>
                <div className="flex flex-col lg:flex-row mt-[83px]">
                    <div className="w-full md:w-[80%] md:h-[409px] relative">
                        <Image
                            src={'/images/landing/im_g.png'}
                            alt="im_g"
                            layout="fill"
                            className="!static object-contain"
                        />
                    </div>
                    <div className="flex-1 flex justify-start">
                        <p className="font-wa font-[500] text-[14px] leading-[26px] pt-5 text-[#5B5B5B]">
                            Kairos Institute provides international exposure to students. Through international exposure, we ensure that our students elevate their credentials, promote professional and personal development, ensure confidence and independence, and have the opportunity to interact with global academia.
                        </p>
                    </div>
                </div>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                    }}
                    className="w-full my-10"
                >
                    <CarouselContent>
                        {
                            data.map((d, i) => (
                                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                                    <Box key={i} count={d.count} desc={d.desc} />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>

                {/* <div className="flex w-full overflow-x-auto my-[36px] gap-x-10" ref={scrollRef}>

                </div> */}

                <div className="flex w-full">
                    <div className="flex-1 flex items-center">
                        <Node />
                        <div className="h-0.5 bg-[#2FC5E1] flex-1" />
                    </div>
                    <div className="w-5"></div>
                    <div className="flex gap-x-2">
                        <button onClick={scrollLeft} className="bg-[#2FC5E1] font-bold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                            <LucideChevronLeft size={25} color="#fff" />
                        </button>
                        <button onClick={scrollRight} className="bg-[#2FC5E1] font-bold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                            <LucideChevronRight size={25} color="#fff" />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
