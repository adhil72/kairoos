import Youtube from "@/assets/Youtube";
import Container from "@/components/common/Container";
import Image from "next/image";

export default function SectionL() {
    return <section className="w-full min-h-[30vh]">
        <Container className="items-center">
            <span className="font-[400] text-[22px] leading-[57px] text-[#187593]">Watch</span>
            <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">Our Videos</span>

            <div className="w-full flex overflow-x-auto gap-x-5 lg:justify-center">
                {
                    [1, 2, 3].map((i) => (
                        <div key={i} className="w-[278.16px] min-w-[278.16px] h-[181.17px] rounded-[27.26px] overflow-hidden relative flex items-center justify-center">
                            <div className="absolute w-full h-full bg-opacity-30 flex items-center justify-center bg-black z-10">
                                <Youtube className="absolute fill-red-700 z-20 w-[63px] h-[44px]" />
                            </div>
                            <Image src={"/images/landing/yt.png"} className="!static object-cover" alt="" layout="fill" />
                        </div>
                    ))
                }
            </div>
        </Container>
    </section >
}