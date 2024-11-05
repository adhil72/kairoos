import Youtube from "@/assets/Youtube";
import Container from "@/components/common/Container";
import Image from "next/image";

export default function D() {
    return <>
        <Container className="text-center py-8">
            <h2 className="text-[29px] md:text-[35px] md:leading-[45px] leading-[39px] font-bold text-[#187593] mb-16 max-w-6xl mx-auto">
                Locations of Our Aviation
                & Airport Management Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-6">
                {["Kochi", "Bangalore", "Thodupuzha"].map((location, index) => (
                    <div key={index} className="relative mt-6">
                        <Image
                            src={'/images/location.png'}
                            alt={'location'}
                            height={200}
                            width={400}
                            className="rounded-lg"
                        />

                        <button className="absolute bottom-0 right-0 md:right-0 bg-[#187593] w-[145px] h-[35px] text-white rounded-full text-sm text-center font-semibold border-white border-4 hover:bg-tint-alt">
                            {location}
                        </button>
                    </div>
                ))}
            </div>
        </Container>
        <section className="w-full min-h-[30vh]">
            <Container className="items-center">
                <span className="text-[#187593] text-[15.52px] lg:text-[22px] leading-[57px] font-[400]">Check Out Our</span>
                <span className="text-[#187593] text-[29px] lg:text-[43px] leading-[57px] font-[400] text-center">Aviation Course Videos</span>

                <div className="w-full flex overflow-x-auto gap-x-5 lg:justify-center mt-5">
                    {
                        [1, 2, 3].map((i) => (
                            <div key={i} className="w-[201.92px] min-w-[201.92px] h-[114.16px] lg:w-[278.16px] lg:h-[181.17px] rounded-[27.26px] overflow-hidden relative flex items-center justify-center">
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
    </>
}