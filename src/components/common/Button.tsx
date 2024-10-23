import React from "react";

export default function Button({ alt, ...props }: React.HTMLAttributes<HTMLButtonElement> & { alt?: boolean }) {
    return <button {...props} className={`rounded-[37px] ${alt ? 'bg-tint-alt' : 'bg-tint'} text-[13.76px] md:text-[13.35px] px-5 py-3 md:px-8 md:py-3 text-tint ${props.className}`} />
}