import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={`${props.className} px-5 xl:px-[186px]`} />
}