import Whatsapp from "@/assets/Whatsapp"
import { Phone, Mail, LucidePhone, LucideMail } from "lucide-react"
import Image from "next/image"

export default function LeftBadge() {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-[#0077b6] rounded-r-[18.06px] p-3 shadow-lg z-30">
            <div className="flex flex-col items-center space-y-4">
                <button className="text-white hover:text-gray-200 transition-colors">
                    <LucidePhone size={24} />
                </button>
                <div className="w-full h-px bg-white/20" />
                <button className="text-white hover:text-gray-200 transition-colors">
                    <Whatsapp fill="white" className="fill-white" width={24} height={24} />
                </button>
                <div className="w-full h-px bg-white/20" />
                <button className="text-white hover:text-gray-200 transition-colors">
                    <LucideMail size={24} />
                </button>
            </div>
        </div>
    )
}