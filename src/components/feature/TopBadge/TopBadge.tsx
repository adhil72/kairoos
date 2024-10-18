import Facebook from "@/assets/Facebook"
import Instagram from "@/assets/Instagram"
import LinkedIn from "@/assets/LinkedIn"
import Twitter from "@/assets/Twitter"
import Whatsapp from "@/assets/Whatsapp"
import Youtube from "@/assets/Youtube"
import Button from "@/components/common/Button"
import Link from "next/link"

export default function TopBadge() {
    return <div className="bg-tint flex justify-center items-center p-2">
        <div className="flex items-center p-2 border border-tint-alt rounded-[30px] px-3">
            <span className="font-semibold text-alt text-sm mr-3">
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
        <Button alt className="ml-3">
            Apply now
        </Button>
    </div>
}

function IconCircle({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
    return <Link href={""} className="w-6 h-6 p-0.5 rounded-full overflow-hidden bg-tint-alt flex">
        <div className="flex-1 bg-white rounded-full p-1 flex items-center justify-center">
            {children}
        </div>
    </Link>
}