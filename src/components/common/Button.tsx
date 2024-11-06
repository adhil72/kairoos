import React from "react";

export default function Button({ alt, ...props }: React.HTMLAttributes<HTMLButtonElement> & { alt?: boolean }) {
    return <button {...props} className={`text-[10.76px] rounded-[35.89px] font-[400] leading-[14.45px] px-[16.5px] lg:px-[31.5px] py-[8.02px] lg:py-[8.5px] lg:text-[13.35px] lg:leading-[14.9px] ${alt ? 'bg-tint-alt' : 'bg-tint'} ${props.className}`} />
}
