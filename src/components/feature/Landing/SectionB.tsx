import Stick from "@/assets/Stick";
import Container from "@/components/common/Container";
import Sb from "./assets/Sb";
import Whatsapp from "./assets/Whatsapp";
import Link from "next/link";
import Phone from "./assets/Phone";
import Cloud from "./assets/Cloud";
import Node from "@/assets/Node";

function IconButton({ Icon, title, url }: { Icon: any, title: string, url: string }) {
    return <Link href={"#"} className="flex flex-col items-center group mx-5">
        <div className="w-[81.8px] h-[81.8px] border-2 rounded-full overflow-hidden border-tint-alt bg-white group-hover:bg-tint-alt transition-all ease-in-out flex items-center justify-center">
            <Icon className="fill-tint-alt group-hover:fill-white w-[27px] h-[27px] transition-all ease-in-out" />
        </div>
        <span className="wa-ff mt-[14px] text-[13px] leading-[13px] font-[600]">
            {title}
        </span>
    </Link>
}

function VLine() {
    return <div className="bg-tint-alt bg-opacity-30 w-1 h-[35px] mx-5" />
}

export default function SectionB() {
    return <section className="w-full min-h-screen flex flex-col">
        <Container className="flex items-center !flex-row flex-1">
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex w-full">
                    <div className="flex flex-1 relative justify-center -mt-[25px]">
                        <Node/>
                        <div className="w-1 h-full bg-tint-alt absolute"></div>
                    </div>
                    <p className="font-bold text-[43px] text-tint-b leading-[57px] pr-5">
                        Best Aviation, Logistics,& Hospital Administration Institute in Kerala
                    </p>
                </div>
                <p className="wa-ff font-[500] text-[14px] leading-[26px] text-[#5B5B5B] mt-[16px]">
                    The career perspective of today's generation has changed a lot. Now, students know which courses to choose to land a better career. This is why courses from the aviation, logistics, and hospitality sectors have become the top search. If you are also one of them, reach out to us for the best courses that suit you – we’ve got you covered. Our programs cover all the syllabus needed to secure a career in airport management, airline ticketing, cabin crew, ground staff, cargo handling, or hospitality roles like hotels, travel, tourism, shipping, logistics, or supply chain management. Regardless of your educational background, you can study any courses that are in high demand in today's job market. Our courses are designed to meet industry demands, ensuring you graduate with the right skills and attitudes sought after by employers. We provide 100% career assistance through our extensive network of industry connections and career placement services. Admission for the next academic year has already started, so don't wait. Enrol at Kairos Institute today and take the first step towards an exciting career!
                </p>
            </div>

            <div className="flex-1 flex justify-end">
                <Sb />
            </div>
        </Container>
        <Container className="w-full flex !flex-row items-center -mt-40">
            <IconButton Icon={Whatsapp} title="Whatsapp" url="/aviation" />
            <VLine />
            <IconButton Icon={Phone} title="Whatsapp" url="/aviation" />
            <VLine />
            <IconButton Icon={Cloud} title="Whatsapp" url="/aviation" />
            <div className="h-1 flex-1 bg-tint-alt">

            </div>
            <Node />
        </Container>
    </section>
}