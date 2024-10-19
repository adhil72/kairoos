import Container from "@/components/common/Container";
import Badge from "./assets/Badge";
import Cource from "./assets/Cource";
import Hand from "./assets/Hand";
import Student from "./assets/Student";
import Image from "next/image";

export default function SectionC() {
    return <section className="w-full bg-[#F8F8F8] flex justify-center">
        <div className="w-[80%] lg:w-[60%] flex justify-center items-center relative min-h-[80vh]">
            <Image
                src={"/images/med.png"}
                width={90}
                height={90}
                alt="ship"
                className="right-0 bottom-0 absolute mb-20 lg:mb-40"
            />
            <Image
                src={"/images/ship.png"}
                width={90}
                height={90}
                alt="ship"
                className="top-0 right-0 absolute m-20"
            />
            <Image
                src={"/images/airoplane.png"}
                width={90}
                height={90}
                alt="ship"
                className="left-0 bottom-0 absolute mb-10 lg:mb-52"
            />
            <div className="grid grid-cols-2 w-full bg lg:w-[500px] lg:h-[450px]">
                <div className="flex-1 border-2 border-tint-alt rounded-3xl gap-y-4 flex flex-col items-center justify-center py-2">
                    <Cource />
                    <span className="font-[400] text-xl lg:text-[63px] text-[#1B4A5E]">10+</span>
                    <span className="font-[400] text-[12px] text-[#187593]">Cources</span>
                </div>
                <div className="flex-1 flex justify-center items-center flex-col gap-y-4 py-2">
                    <Student />
                    <span className="font-[400] text-xl lg:text-[63px] text-[#1B4A5E]">2K+</span>
                    <span className="font-[400] text-[12px] text-[#187593]">Trusted Students</span>
                </div>

                <div className="flex-1 flex justify-center items-center flex-col gap-y-4 py-2">
                    <Hand />
                    <span className="font-[400] text-xl lg:text-[63px] text-[#1B4A5E]">10+</span>
                    <span className="font-[400] text-[12px] text-[#187593]">Unique Features</span>
                </div>
                <div className="flex-1 border-2 border-tint-alt rounded-3xl flex justify-center items-center flex-col gap-y-4 py-2">
                    <Badge />
                    <span className="font-[400] text-xl lg:text-[63px] text-[#1B4A5E]">06+</span>
                    <span className="font-[400] text-[12px] text-[#187593]">Awards</span>
                </div>
            </div>
        </div>
    </section>
}