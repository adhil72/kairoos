import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={`${props.className} w-full py-32 px-5 xl:px-[186px] flex flex-col`} />
}