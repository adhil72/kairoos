import Facebook from "@/assets/Facebook"
import Instagram from "@/assets/Instagram"
import LinkedIn from "@/assets/LinkedIn"
import Twitter from "@/assets/Twitter"
import Whatsapp from "@/assets/Whatsapp"
import WhatsappB from "@/assets/WhatsappB"
import Youtube from "@/assets/Youtube"
import YoutubeB from "@/assets/YoutubeB"
import Button from "@/components/common/Button"
import Link from "next/link"

export default function TopBadge() {
    return <div className="w-full bg-tint flex justify-center items-center p-2 flex-col xs:flex-row gap-y-2 xs:gap-y-0">
        <div className="flex items-center p-[10.8] border border-tint-alt rounded-[30px] px-3">
            <span className="font-[400] leading-[10.05px] text-alt text-[7.42px] lg:text-sm mr-3">
                Follow
            </span>
            <div className="gap-x-3 flex py-1">
                <IconCircle>
                    <Twitter fill="#187593" />
                </IconCircle>
                <IconCircle>
                    <WhatsappB fill="#187593" />
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
                    <YoutubeB fill="#187593" />
                </IconCircle>
            </div>
        </div>
        <button className="ml-3 bg-[#AAEDF7] text-[#0C3040] text-[7.76px] rounded-[35.89px] font-[400] leading-[14.45px] px-[16.5px] lg:px-[31.5px] py-[8.02px] lg:py-[8.5px] lg:text-[13.35px] lg:leading-[14.9px]">
            Apply now
        </button>
    </div>
}

function IconCircle({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
    return <Link href={""} className="w-[20.54px] h-[20.54px] lg:w-6 lg:h-6 p-0.5 rounded-full overflow-hidden bg-tint-alt flex">
        <div className="flex-1 bg-white p-[3px] rounded-full flex items-center justify-center">
            {children}
        </div>
    </Link>
}