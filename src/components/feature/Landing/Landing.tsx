import Container from "@/components/common/Container";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import SectionF from "./SectionF";
import SectionG from "./SectionG";
import SectionH from "./SectionH";
import SectionI from "./SectionI";
import SectionJ from "./SectionJ";
import Image from "next/image";
import Youtube from "@/assets/Youtube";
import ArrowT from "./assets/ArrowT";
import ArrowTr from "./assets/ArrowTr";
import Button from "@/components/common/Button";

export default function Landing() {
    return <div>
        {/* <SectionA /> */}
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <SectionF />
        <SectionG />
        <SectionH />
        <SectionI />
        <SectionJ />

        <section className="w-full min-h-[60vh]">
            <Container className="items-center">
                <span className="font-[400] text-[22px] leading-[57px] text-[#187593]">Latest</span>
                <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">News & Event</span>

                <div className="flex w-full overflow-x-auto justify-center mt-[52px] gap-x-[17px]">
                    <div className="flex items-center flex-col w-[319px] border-2 border-[#70DDF0] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                        <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px]  object-contain" />
                        <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                        <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                    </div>
                    <div className="flex items-center flex-col w-[319px] border-2 border-[#70DDF0] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                        <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px]  object-contain" />
                        <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                        <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                    </div>
                    <div className="flex items-center flex-col w-[319px] border-2 border-[#70DDF0] rounded-[33.6px] pt-[15.16px] pb-[30px] px-[25.92px]">
                        <img src="/images/landing/im_l.png" alt="" className="w-[301px] h-[315px]  object-contain" />
                        <span className="font-[400] text-[14px] leading-[19px] text-[#0C3040] mt-[5px]">Thailand Trip</span>
                        <span className="font-wa text-[12.48px] text-[#5B5B5B] leading-[13.26px] font-[500] text-center mt-[9.6px]">A wonderous trip to Thailand was organised for our students.</span>
                    </div>
                </div>
            </Container>
        </section>

        <section className="w-full min-h-[60vh]">
            <Container className="items-center">
                <span className="font-[400] text-[22px] leading-[57px] text-[#187593]">Watch</span>
                <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">Our Videos</span>

                <div className="flex gap-x-[15px] mt-[45px]">
                    {
                        [1, 2, 3].map((i) => <div className="w-[278.16px] h-[181.17px] rounded-[27.26px] overflow-hidden relative flex items-center justify-center">
                            <div className="absolute w-full h-full bg-opacity-30 flex items-center justify-center bg-black z-10">
                                <Youtube className="absolute fill-red-700 z-20 w-[63px] h-[44px]" />
                            </div>
                            <Image src={"/images/landing/yt.png"} className="!static object-cover" alt="" layout="fill" />
                        </div>)
                    }
                </div>
            </Container>
        </section >
        <section>
            <Container className="items-center">
                <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">Blog</span>

                <div className="flex mt-[55px] gap-x-[50px]">
                    <div className="bg-gradient-to-b w-[261px] from-[#70DDF0] to-[#70DDF000] rounded-[54.83px] px-[40px] py-[41px] mt-[72px]">
                        <div>
                            <div className="w-[162.54px] h-[216.56px] border-4 border-[#2FC5E1] rounded-[126.25px]">
                                <img src="/images/landing/im_o.png" alt="" className="w-[162.54px] h-[216.56px] object-cover rounded-[126.25px] -mt-5 ml-5" />
                            </div>
                            <p className="font-[400] text-[14px] leading-[20px] my-[20px] text-center">
                                What is the difference between Hospital Management and Hospital Administration?
                            </p>
                            <button className="rounded-[34.95px] border-[#2FC5E1] border-4 text-[#187593] items-center justify-center text-[12.64px] p-[11px] flex">
                                Read More <ArrowTr className="fill-black w-[9.53px] h-[14.09px] mx-[12px]" />
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[261px] from-[#70DDF0] to-[#70DDF000] rounded-[54.83px] px-[40px] py-[41px]">
                        <div>
                            <div className="w-[162.54px] h-[216.56px] border-4 border-[#2FC5E1] rounded-[126.25px]">
                                <img src="/images/landing/im_o.png" alt="" className="w-[162.54px] h-[216.56px] object-cover rounded-[126.25px] -mt-5 ml-5" />
                            </div>
                            <p className="font-[400] text-[14px] leading-[20px] my-[20px] text-center">
                                What is the difference between Hospital Management and Hospital Administration?
                            </p>
                            <button className="rounded-[34.95px] border-[#2FC5E1] border-4 text-[#187593] items-center justify-center text-[12.64px] p-[11px] flex">
                                Read More <ArrowTr className="fill-black w-[9.53px] h-[14.09px] mx-[12px]" />
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[261px] from-[#70DDF0] to-[#70DDF000] rounded-[54.83px] px-[40px] py-[41px] mt-[72px]">
                        <div>
                            <div className="w-[162.54px] h-[216.56px] border-4 border-[#2FC5E1] rounded-[126.25px]">
                                <img src="/images/landing/im_o.png" alt="" className="w-[162.54px] h-[216.56px] object-cover rounded-[126.25px] -mt-5 ml-5" />
                            </div>
                            <p className="font-[400] text-[14px] leading-[20px] my-[20px] text-center">
                                What is the difference between Hospital Management and Hospital Administration?
                            </p>
                            <button className="rounded-[34.95px] border-[#2FC5E1] border-4 text-[#187593] items-center justify-center text-[12.64px] p-[11px] flex">
                                Read More <ArrowTr className="fill-black w-[9.53px] h-[14.09px] mx-[12px]" />
                            </button>
                        </div>
                    </div>
                </div>

                <Button alt className="text-white mt-[56px]">
                    View more
                </Button>
            </Container>
        </section>

        <section className="w-full">
            <Container>
                <div className="mt-16 bg-[#F8F8F8] py-10 px-6 md:px-16 rounded-[40px] w-full">
                    <h3 className="text-3xl font-bold text-center mb-8">Enquiry Form</h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8]"
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="border border-gray-300 rounded-md py-3 px-4 font-sml focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300 col-span-1 md:col-span-2"
                        />
                    </form>
                    <div className="flex justify-center mt-7">
                        <button
                            type="submit"
                            className="w-[236px] bg-tint-alt text-white py-3 px-6 rounded-[55px] font-sml hover:bg-[#135e6e]"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    </div>
}