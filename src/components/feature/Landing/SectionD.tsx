import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Image from "next/image";

export default function SectionD() {
    return <section className="w-full min-h-[600px] overflow-x-hidden flex justify-center">
        <Container className="min-h-[60vh] md:min-h-[600px]">
            <div className="w-full flex justify-between items-center lg:hidden -mr-10">
                <div className="flex flex-col items-center gap-y-10 md:hidden">
                    <Image
                        width={75}
                        height={77}
                        src={"/images/landing/arrow_a.png"}
                        alt="im_a"
                        className=""
                    />
                    <Image
                        width={65}
                        height={111}
                        src={"/images/landing/im_a.png"}
                        alt="im_a"
                    />
                </div>
                <div className="flex flex-col items-center gap-y-10 md:hidden">
                    <Image
                        width={69.84}
                        height={69.84}
                        src={"/images/landing/im_b.png"}
                        alt="im_b"
                    />
                    <Image
                        className=""
                        width={73.64}
                        height={81.61}
                        src={"/images/landing/im_c.png"}
                        alt="im_b"
                    />
                </div>
                <div className="flex flex-col items-center gap-y-10 md:hidden">
                    <Image
                        width={59}
                        height={759}
                        src={"/images/landing/arrow_b.png"}
                        alt="im_a"
                        className=""
                    />
                    <Image
                        width={78.95}
                        height={130.04}
                        src={"/images/landing/im_a.png"}
                        alt="im_a"
                    />
                </div>
            </div>
            <div className="flex-1 flex relative">
                <div className="px-5 flex-col justify-between hidden md:flex" >
                    <Image
                        width={110}
                        height={186}
                        src={"/images/landing/im_a.png"}
                        alt="im_a"
                    />

                    <Image
                        width={75}
                        height={77}
                        src={"/images/landing/arrow_a.png"}
                        alt="im_a"
                        className="-ml-[100px]"
                    />

                    <Image
                        className="-ml-4"
                        width={96}
                        height={96}
                        src={"/images/landing/im_b.png"}
                        alt="im_b"
                    />
                </div>
                <div className="flex-1 relative flex items-center justify-center flex-col mt-10 md:mt-0">
                    <img src="/images/world.png" alt="" sizes="" className="w-full h-full absolute object-contain" />
                    <span className="font-[400] text-xl md:text-[39.76px] md:leading-[55px] lg:text-[49px] lg:leading-[57px] md:px-5 lg:px-10 text-center z-10 text-[#187593]">
                        We Give Top Courses of Today’s Job Market
                    </span>
                    <p className="md:px-10 font-wa font-[500] text-[14px] leading-[26px] z-10 text-center">
                        Knowing the current job market is what really matters when choosing a course to study. We provide selected courses that are in high demand today, along with 100% career assistance. Our course list covers fields like aviation, logistics, and hospitality. Do your dreams match these fields? Then this is your destination
                    </p>
                </div>
                <div className="px-5 hidden md:flex flex-col justify-between">
                    <Image
                        className=""
                        width={96}
                        height={96}
                        src={"/images/landing/im_c.png"}
                        alt="im_b"
                    />
                    <Image
                        width={59}
                        height={759}
                        src={"/images/landing/arrow_b.png"}
                        alt="im_a"
                        className="mt-[130px] ml-[100px] absolute"
                    />
                    <Image
                        width={110}
                        height={186}
                        src={"/images/landing/im_d.png"}
                        alt="im_d"
                    />
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <Button className="mt-10 text-white" alt>Join Us Today</Button>
                <Image
                    src={"/images/landing/plane.png"}
                    width={233}
                    height={43}
                    className="absolute ml-[8px] mt-[128px]"
                    alt="plane"
                />
            </div>
        </Container>
    </section>
}