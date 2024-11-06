import React from "react";
import Image from "next/image";
import Container from "../common/Container";
const WhyAviationSection: React.FC = () => {
  return (
    <section className="">
      <Container className="relative">
        <div className="relative text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="h-full flex items-end  pr-5">
            <Image
              src={"/images/arrowL.png"}
              alt="rightarrow"
              width={89.66}
              height={91}
              className="ml-[100px] md:ml-0 hidden lg:flex"
            />
          </div>

          <div className="w-[100%]">
            <h2 className=" text-[29px] md:text-[39px] md:text-center lg:text-start lg:text-[43px] leading-[39px] lg:leading-[55px] font-[400] text-[#187593] mb-6">
              Why Aviation Course?
            </h2>
            <div className="w-full flex justify-center relative">
              <div className="relative py-2  md:hidden w-[362.21px] h-[380px]">
                <Image
                  src={"/images/Qplane.png"}
                  width={362}
                  height={526}
                  alt="Aviation"
                  className="w-full h-full object-contain rounded-full p-10"
                />
              </div>
            </div>

            <p className="text-gray-600 font-wa leading-relaxed mb-4">
              The aviation industry has excellent growth both in India &
              internationally. Thousands of jobs have opened up at every level &
              airlines/ airports are looking for talented, trained people for
              various roles – from airport management to ticketing, from cabin
              crew to cargo handling & ground staff.
            </p>
            <p className="text-gray-600 font-wa text-[14px] leading-[26px] mb-4">
              Kairos Institute offers the best aviation courses, internships,
              co-op programs, or other work-study options that can help students
              gain valuable experience and make connections in the industry. We
              conduct inductions, counseling & mock interview sessions to prepare
              them for job interviews with airlines & airports. Enrolling in an
              Aviation Course might be a terrific way to get ready for a lucrative
              worldwide career in the exciting and dynamic industry of aviation.
            </p>
          </div>

          <div className="md:w-1/2 justify-center relative hidden md:flex">
            <img src="/images/Qplane.png" className="w-[362px] h-[526px] object-contain" />
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/images/arrowL.png"}
            alt="rightarrow"
            width={68}
            height={67}
            className="ml-[100px] md:ml-0 lg:hidden"
          />
        </div>

      </Container>


      <Container className="!px-0 md:!px-[80px] lg:!px-[150px]">
        <div className=" lg:mt-16 bg-[#F8F8F8] py-10 px-6 md:px-16 md:rounded-[40px] w-full">
          <h3 className="text-[26px] font-[400] leading-[57px] text-center mb-8">Enquiry Form</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-wa">
            <input
              type="text"
              placeholder="FULL NAME"
              className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8]"
            />
            <input
              type="text"
              placeholder="MOBILE NUMBER"
              className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="LOCATION"
              className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
            />
            <textarea
              placeholder="MESSAGE"
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
  );
};

export default WhyAviationSection;
