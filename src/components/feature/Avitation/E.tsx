import Container from "@/components/common/Container";
import Image from "next/image";

export default function E() {
    return <Container className='py-10'>
        <div className="w-full mx-auto text-center max-w-[907px]">
            <h2 className="text-[22px] md:text-[35px] font-bold text-[#187593] pb-10">
                MNCs where our students have been proudly placed
            </h2>
            <Image src={'/images/company.png'} height={368} width={1090} alt='company' className='overflow-hidden' />
        </div>
    </Container>
}