import Node from "@/assets/Node";
import Container from "@/components/common/Container";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

export default function SectionH() {
    return <section className="w-full min-h-[60vh]">
        <Container className="items-center">
            <span className="font-[400] text-[22px] leading-[57px] text-[#187593]">Testimonials</span>
            <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">About our Institution</span>
            <div className="flex">
                <div className="flex-1 flex justify-end">
                    <img className="w-[282.94px] object-right h-[266.82px] object-contain" src="/images/landing/im_i.png" alt="" />
                </div>
                <div className="flex-1 px-5">
                    <p className="font-wa font-[500] text-[14px] leading-[26px]">Kairos gives me the best environment for my studies. They always provided me with the assistance that I required  for my overall development and to improve my technical knowledge. i will always be grateful to them for providing me a platform of practical learning and preparing me for the future life. And the teacher - student interaction was great. The teachers were very friendly because of which I could clarify many of my doubts</p>
                    <div>
                        <span className="text-[#187593] font-[400] text-[17px] leading-[57px]">Ashmi Basheer</span> <br />
                        <span className="font-wa font-[600] text-[16px] leading-[26px]">Student</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full my-10">
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