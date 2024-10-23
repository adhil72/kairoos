import Facebook from "@/assets/Facebook";
import Instagram from "@/assets/Instagram";
import LinkedIn from "@/assets/LinkedIn";
import Twitter from "@/assets/Twitter";
import Whatsapp from "@/assets/Whatsapp";
import Youtube from "@/assets/Youtube";
import Container from "@/components/common/Container";
import { LucidePhone } from "lucide-react";
import Link from "next/link";
import ArrowBLeft from "./assets/ArrowBLeft";

export default function SectionG() {
    return <section className="w-full min-h-[50vh]">
        <Container className="lg:flex-row mb-0 items-center">
            <div>
                <img src="/images/landing/im_h.png" alt="im_h" className="w-[80%] md:w-[318px] md:h-[517px] object-contain" />
            </div>
            <div className="flex-1 px-10 mt-5 lg:mt-0">
                <span className="font-[400] text-[35px] leading-[37px] bg-gradient-to-r from-[#2FC5E1] to-[#0C3040] bg-clip-text text-transparent">Do you want to speak to <br />
                    our career consultant?</span>
                <p className="text-[#5B5B5B] font-wa font-[500] text-[14px] leading-[26px]">
                    Ready to start your career? Talk to our career expert today! They'll help you understand our courses and enrollment process, ensuring you're set for success. Take that crucial first step towards securing your future with us. We're here to help you succeed, so don't wait – reach out now!</p>
                <div className="relative h-fit hidden md:flex">
                    <div>
                        <div className="flex mt-[45px] px-5 items-center gap-x-5 bg-gradient-to-r from-[#2FC5E1] to-[#0C3040] bg-clip-text text-transparent font-[400] text-[23.78px]  lg:text-[28px] leading-[44px]">
                            <LucidePhone className="text-[#2FC5E1]" />  +91 80 78 029 050
                        </div>
                        <div className="px-5 mt-2">
                            <div className="flex w-fit items-center p-2 border border-tint-alt rounded-[30px] px-3">
                                <span className="font-semibold text-black text-sm mr-3">
                                    Follow
                                </span>
                                <div className="gap-x-3 flex py-1">
                                    <IconCircle>
                                        <Twitter fill="#187593" />
                                    </IconCircle>
                                    <IconCircle>
                                        <Whatsapp fill="#187593" />
                                    </IconCircle>
                                    <IconCircle>
                                        <Instagram fill="#187593" />
                                    </IconCircle>
                                    <IconCircle>
                                        <LinkedIn fill="#187593" />
                                    </IconCircle>
                                    <IconCircle>
                                        <Facebook fill="#187593" />
                                    </IconCircle>
                                    <IconCircle>
                                        <Youtube fill="#187593" />
                                    </IconCircle>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ArrowBLeft className="absolute end-0 mt-10 hidden md:flex" />
                </div>
            </div>
        </Container>
        <div className="mb-32 w-full flex justify-center md:hidden -mt-32">
            <div className="relative h-fit flex">
                <div>
                    <div className="flex mt-[45px] px-5 items-center gap-x-5 bg-gradient-to-r from-[#2FC5E1] to-[#0C3040] bg-clip-text text-transparent font-[400] text-[23.78px]  lg:text-[28px] leading-[44px]">
                        <LucidePhone className="text-[#2FC5E1]" />  +91 80 78 029 050
                    </div>
                    <div className="px-5 mt-2">
                        <div className="flex w-fit items-center p-2 border border-tint-alt rounded-[30px] px-3">
                            <span className="font-semibold text-black text-sm mr-3">
                                Follow
                            </span>
                            <div className="gap-x-3 flex py-1">
                                <IconCircle>
                                    <Twitter fill="#187593" />
                                </IconCircle>
                                <IconCircle>
                                    <Whatsapp fill="#187593" />
                                </IconCircle>
                                <IconCircle>
                                    <Instagram fill="#187593" />
                                </IconCircle>
                                <IconCircle>
                                    <LinkedIn fill="#187593" />
                                </IconCircle>
                                <IconCircle>
                                    <Facebook fill="#187593" />
                                </IconCircle>
                                <IconCircle>
                                    <Youtube fill="#187593" />
                                </IconCircle>
                            </div>
                        </div>
                    </div>
                </div>
                <ArrowBLeft className="absolute end-0 mt-10 hidden md:flex" />
            </div>
        </div>
    </section>
}

function IconCircle({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
    return <Link href={""} className="w-8 h-8 p-[1px] rounded-full overflow-hidden bg-tint-alt flex">
        <div className="flex-1 bg-white rounded-full p-2 flex items-center justify-center">
            {children}
        </div>
    </Link>
}