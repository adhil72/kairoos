import Container from "@/components/common/Container";
import Image from "next/image";

export default function B() {
    return <Container className="bg-[#EDFDFE] py-16">
        <div className="w-full mx-auto text-center max-w-[907px]">
            <h2 className="text-[43px] font-bold text-[#187593]">
                Best Aviation Institute in Kerala & Bangalore
            </h2>
            <h2 className="text-[30px] text-[#187593] mb-2">
                100% Placement Assistance
            </h2>
            <span className="text-lg text-[#5B5B5B] my-6 pb-3 mx-auto max-w-[907px]">
                The career choices have now expanded beyond doctors and engineers to include the Airline, Aviation, and Hospitality sectors, both in India and internationally. If your dream aligns with this, Kairos, the best aviation institute, is here with branches conveniently located in Kochi, Thodupuzha, and Bengaluru. With expert instructors, advanced facilities, and hands-on training, we have been instrumental in guiding numerous students towards successful careers. Whether you dream of becoming a pilot, aircraft maintenance engineer, or air traffic controller, we have the courses and resources to help you succeed. With our 100% placement Assistance, you can rest assured that your future in aviation is in good hands. Choose the best aviation institute in Kerala and the best aviation institute in Bangalore to receive the best possible education. Our extensive network of industry connections and career placement services will help you land the job of your dreams after graduation.
            </span>

            <div className="bg-white text-[#187593] py-4 pl-5 rounded-[45px] text-left max-w-4xl border-tint-alt border-2 flex mt-6 flex-col lg:flex-row">
                <div className='text-center lg:text-start'>
                    <p>Admission for the next batch is closing soon.</p>
                    <p className="mb-2">Enroll now for the last few seats.</p>
                </div>

                <div className="flex px-6 gap-4 flex-col lg:flex-row">
                    <button className='bg-tint-alt rounded-3xl text-white p-2 hover:bg-[#187593]'>Enroll Now</button>
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