import React from "react";

export default function Node(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={`w-[22px] h-[22px] flex justify-center items-center bg-tint-alt rounded-full z-10 ${props.className}`}>
        <div className="w-[10px] h-[10px] bg-white rounded-full">
        </div>
    </div>
}