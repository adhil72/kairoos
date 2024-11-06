import Container from "@/components/common/Container";
import Image from "next/image";

export default function B() {
    return <Container className="bg-[#EDFDFE] py-16">
        <div className="w-full mx-auto text-center max-w-[907px]">
            <h2 className="text-[29px] text-start md:text-center md:text-[39px] lg:text-[43px] font-bold text-[#187593] leading-[39px] md:leading-[55px] lg:leading-[57px]">
                Best Aviation Institute in Kerala & Bangalore
            </h2>
            <h2 className="text-[18px] text-start md:text-center md:text-[29px] lg:text-[43px] text-[#187593] mb-2 lg:mb-4 leading-[39px] lg:leading-[55px]">
                100% Placement Assistance
            </h2>
            <p className="text-[15px] text-start md:text-center md:text-[14px] leading-[25px] md:leading-[26px] font-semibold font-wa text-[#5B5B5B] my-6 pb-3 mx-auto max-w-[907px]">
                The career choices have now expanded beyond doctors and engineers to include the Airline, Aviation, and Hospitality sectors, both in India and internationally. If your dream aligns with this, Kairos, the best aviation institute, is here with branches conveniently located in Kochi, Thodupuzha, and Bengaluru. With expert instructors, advanced facilities, and hands-on training, we have been instrumental in guiding numerous students towards successful careers. Whether you dream of becoming a pilot, aircraft maintenance engineer, or air traffic controller, we have the courses and resources to help you succeed. With our 100% placement Assistance, you can rest assured that your future in aviation is in good hands. Choose the best aviation institute in Kerala and the best aviation institute in Bangalore to receive the best possible education. Our extensive network of industry connections and career placement services will help you land the job of your dreams after graduation.
            </p>

            <div className="bg-white items-center text-[#187593] py-4 px-5 rounded-[45px] text-left max-w-4xl border-tint-alt border-2 flex mt-6 flex-col md:flex-row">
                <div className='flex-1 text-center md:text-start font-semibold'>
                    <p className="font-wa text-[15px] leading-[21px]">Admission for the next batch is closing soon.</p>
                    <p className="mb-2 font-wa text-[15px] leading-[21px]">Enroll now for the last few seats.</p>
                </div>

                <div className="flex-1 w-full flex px-6 gap-4 flex-col md:flex-row ">
                    <button className='wf bg-tint-alt rounded-3xl text-white p-2 hover:bg-[#187593] flex-1'>Enroll Now</button>
                    <button className='bg-tint-alt rounded-3xl p-2 hover:bg-[#187593] flex justify-center'>
                        <div className=''>
                            <Image src={'/images/Download.png'}
                                width={120}
                                height={45}
                                alt='download'
                                className='text-center'
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>

    </Container>
}