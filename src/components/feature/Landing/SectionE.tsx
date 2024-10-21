import Container from "@/components/common/Container";
import Plane from "./assets/Plane";
import Logistics from "./assets/Logistics";
import Med from "./assets/Med";
import Image from "next/image";
import Button from "@/components/common/Button";
import ArrowT from "./assets/ArrowT";

function HeadItem({ Icon, title, solid }: { Icon: any, title: string, solid?: boolean }) {
    return <div className={`flex px-20 py-3 items-center gap-x-5 rounded-[30px] ${solid ? 'bg-gradient-to-r from-[#2FC5E1] to-[#187593] text-white' : 'bg-white border-4 border-[#D2F7FB]'}`}>
        <Icon className={`${solid ? 'fill-white' : 'fill-[#13A8C7]'}`} />
        <span className={`${solid ? 'text-white' : 'text-[#187593]'} text-[16px] leading-[18px] font-[400] w-100px`}>{title}</span>
    </div>
}

function Badge({ title, number, right }: { title: string, number: string, right?: boolean }) {
    return <div className={`w-full flex ${right ? 'justify-end' : 'justify-start'}`}>
        <div className="w-[300px] flex items-center justify-center px-5 py-3 border-2 border-[#2FC5E1] rounded-[46.2px]">
            <div className="border-2 border-[#2FC5E1] text-[13.1px] font-[400] p-4 flex justify-center bg-[#D2F7FB] items-center rounded-full gap-x-10">
                {number}
            </div>
            <span className="text-[#187593] text-[11.76px] leading-[12.15px] font-[400] ml-3">
                {title}
            </span>
        </div>
    </div>
}
export default function SectionE() {
    return <section className="w-full bg-[#EDFDFE]">
        <div className="w-full min-h-screen">
            <Container className="justify-center items-center">
                <div className="w-full overflow-x-auto flex gap-x-5 justify-center">
                    <HeadItem Icon={Plane} title="Aviation & Tourism" solid />
                    <HeadItem Icon={Logistics} title="Logistics" />
                    <HeadItem Icon={Med} title="Hospital Administration" />
                </div>
                <div className="flex gap-x-10 mt-10 flex-col lg:flex-row">
                    <div className="flex-1">
                        <img
                            src="/images/landing/plane_b.png"
                            alt=""
                            className="flex-1"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-y-5 mt-5 lg:mt-0">
                        <Badge
                            title="BBA AVIATION"
                            number="01"
                        />
                        <Badge
                            title="DIPLOMA IN AIRLINE & AIRPORT MANAGEMENT"
                            number="02"
                            right
                        />
                        <Badge
                            title="DIPLOMA IN CABIN CREW MANAGEMENT"
                            number="03"
                        />
                        <Badge
                            title="DIPLOMA IN AIR FARE AND TICKETING MANAGEMENT"
                            number="04"
                            right
                        />
                        <div className="flex justify-end">
                            <Button alt className="flex items-center text-white gap-x-3">
                                View More
                                <ArrowT className="" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="flex justify-center">
                <div className="flex-col-reverse lg:flex-row w-[94%] min-h-[95vh] lg:min-h-fit lg:w-fit bg-white p-10 rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-br-[204px] flex">
                    <div className="">
                        <div className="text-3xl hidden lg:block w-full lg:text-[43px] text-[#2FC5E1] my-4 text-center lg:text-left">
                            About us
                        </div>
                        <p className="font-wa lg:w-[525px] text-[#5B5B5B]">
                            Kairos Institute is renowned for providing the best courses in the aviation, tourism, logistics, shipping, and hospitality industries, which offer wide job opportunities in India and abroad. Our courses are structured with the latest curriculum and practical lessons to make students job-ready, and this is what makes us one of the best aviation and logistics colleges in Kerala and Bangalore. If you want to know more about our courses and specialties,
                        </p>
                        <div className="flex w-full justify-center lg:justify-start">
                            <Button className="text-white my-4" alt>
                                Click Here
                            </Button>
                        </div>
                    </div>
                    <div className="w-0 lg:w-[100px]"></div>
                    <img src="/images/landing/im_f.png" className="w-[340px] lg:-mt-[80px]" />
                    <div className="text-3xl lg:hidden w-full lg:text-[43px] text-[#2FC5E1] my-4 text-center lg:text-left">
                        About us
                    </div>
                </div>
            </div>
        </div>
    </section>
}