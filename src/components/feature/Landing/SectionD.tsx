import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Image from "next/image";

export default function SectionD() {
    return <section className="w-full flex justify-center">
        <Container className="min-h-[60vh] lg:min-h-[80vh]">
            <div className="flex justify-between items-center lg:hidden">
                <div className="flex flex-col items-center gap-y-10 lg:hidden">
                    <Image
                        width={75}
                        height={77}
                        src={"/images/landing/arrow_a.png"}
                        alt="im_a"
                        className=""
                    />
                    <Image
                        width={110}
                        height={186}
                        src={"/images/landing/im_a.png"}
                        alt="im_a"
                    />
                </div>
                <div className="flex flex-col items-center gap-y-10 lg:hidden">
                    <Image
                        width={96}
                        height={96}
                        src={"/images/landing/im_b.png"}
                        alt="im_b"
                    />
                    <Image
                        className=""
                        width={96}
                        height={96}
                        src={"/images/landing/im_c.png"}
                        alt="im_b"
                    />
                </div>
                <div className="flex flex-col items-center gap-y-10 lg:hidden">
                    <Image
                        width={59}
                        height={759}
                        src={"/images/landing/arrow_b.png"}
                        alt="im_a"
                        className=""
                    />
                    <Image
                        width={110}
                        height={186}
                        src={"/images/landing/im_a.png"}
                        alt="im_a"
                    />
                </div>
            </div>
            <div className="flex-1 flex relative">
                <div className="px-5 flex-col justify-between hidden lg:flex" >
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
                <div className="flex-1 relative flex items-center justify-center flex-col mt-10 lg:mt-0">
                    <img src="/images/world.png" alt="" sizes="" className="w-full h-full absolute object-contain" />
                    <span className="font-[400] text-xl lg:text-[49px] lg:leading-[57px] lg:px-10 text-center z-10 text-[#187593]">
                        We Give Top Courses of Today’s Job Market
                    </span>
                    <p className="lg:px-10 font-wa font-[500] text-[14px] leading-[26px] z-10 text-center">
                        Knowing the current job market is what really matters when choosing a course to study. We provide selected courses that are in high demand today, along with 100% career assistance. Our course list covers fields like aviation, logistics, and hospitality. Do your dreams match these fields? Then this is your destination
                    </p>
                </div>
                <div className="px-5 hidden lg:flex flex-col justify-between">
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
                        className="ml-[200px]"
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