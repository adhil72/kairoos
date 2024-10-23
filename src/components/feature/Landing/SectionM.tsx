import Container from "@/components/common/Container";
import ArrowTr from "./assets/ArrowTr";
import Button from "@/components/common/Button";

export default function SectionM() {
    return <section>
        <Container className="items-center">
            <span className="font-[400] text-[43px] leading-[57px] text-[#187593]">Blog</span>

            <div className="flex justify-center w-full overflow-x-hidden mt-[55px] gap-x-[50px]">
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
}