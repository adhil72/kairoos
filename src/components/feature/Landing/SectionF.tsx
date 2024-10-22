import Container from "@/components/common/Container";
import Image from "next/image";
import B1 from "./assets/B1";
import B2 from "./assets/B2";
import B3 from "./assets/B3";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import Node from "@/assets/Node";

export default function SectionF() {
    return <section className="w-full">
        <Container className="items-center">
            <span className="text-[#187593] text-[15.52px] lg:text-[22px] leading-[57px] font-[400]">Why Kairos Institute?</span>
            <span className="text-[#187593] text-[29px] lg:text-[43px] leading-[57px] font-[400] text-center">Experience a New Era <br />of Learning</span>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full md:w-[80%] md:h-[409px]">
                    <Image
                        src={'/images/landing/im_g.png'}
                        alt="im_g"
                        layout="fill"
                        className="!static object-contain"
                    />
                </div>
                <div className="flex-1">
                    <p className="font-wa font-[500] text-[14px] leading-[26px] pt-5 text-[#5B5B5B]">
                        Kairos Institute provides international exposure to students. Through international exposure, we ensure that our students elevate their credentials, promote professional and personal development, ensure confidence and independence, and have the opportunity to interact with global academia.
                    </p>
                </div>
            </div>
            <div className="flex w-full overflow-x-auto my-10 justify-center gap-x-10">
                <B1 className="w-[327.5px] min-w-[327.5px] h-[177px]" />
                <B2 className="w-[327.5px] min-w-[327.5px] h-[177px]" />
                <B3 className="w-[327.5px] min-w-[327.5px] h-[177px]" />
            </div>

            <div className="flex w-full">
                <div className="flex-1 flex items-center">
                    <Node />
                    <div className="h-0.5 bg-[#2FC5E1] flex-1" />
                </div>
                <div className="w-5"></div>
                <div className="flex gap-x-2">
                    <button className="bg-[#2FC5E1] font-bold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                        <LucideChevronLeft size={25} color="#fff" />
                    </button>
                    <button className="bg-[#2FC5E1] font-bold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                        <LucideChevronRight size={25} color="#fff" />
                    </button>
                </div>
            </div>
        </Container>
    </section>
}