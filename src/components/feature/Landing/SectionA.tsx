import BoxBg from "@/assets/BoxBg";
import BoxBgS from "@/assets/BoxBgS";
import Hero from "@/assets/Hero";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import FlowChart from "./FlowIndex";



export default function SectionA() {
    return <section className="w-full">
        <Container className="">
            <div className="relative w-full">
                <div className="relative z-10">
                    <div className="px-4 md:px-[70px] md:py-[32px] flex flex-col-reverse md:flex-row items-center justify-center">
                        <div className="text-lg lg:text-2xl md:-mt-32 xl:text-[30px] text-tint flex-1 xl:!leading-[50px]">
                            Advanced Logistics, Supply Chain Management & Shipping Management Courses in Kerala & Bangalore
                        </div>
                        <div className="flex-1">
                            <Hero className="w-[450px] h-[300px] lg:w-[400px] lg:h-[300px] xl:w-[600px] xl:h-[450px]" />
                        </div>
                    </div>
                </div>
                <Button className="text-white absolute bottom-0 text-xs md:text-lg lg:text-2xl sm:-mb-[75px] sm:ml-[120px] -mb-[75px] ml-[40px] md:ml-[10px] md:mb-[20px] lg:ml-[50px] lg:mb-[30px] lg:py-5 lg:px-10 xl:py-5 xl:px-16 z-10">Join Now</Button>
                <BoxBg className="absolute top-0 left-0 w-full md:block hidden" style={{ height: 'calc(100% )' }} />
                <BoxBgS className="absolute top-0 left-0 w-full md:hidden" style={{ height: 'calc(100% + 20% )' }} />
            </div>
        </Container>
        <div className="flex justify-center">
            <FlowChart />
        </div>
    </section>
}