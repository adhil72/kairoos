import React from "react";

export default function Button({ alt, ...props }: React.HTMLAttributes<HTMLButtonElement> & { alt?: boolean }) {
    return <button {...props} className={`rounded-[37px] ${alt ? 'bg-tint-alt' : 'bg-tint'} px-8 py-3 text-tint ${props.className}`} />
}