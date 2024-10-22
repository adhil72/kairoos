import React from "react";
import Image from "next/image";
const WhyAviationSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 relative text-center md:text-left flex flex-col md:flex-row items-center md:items-start mb-5">
        <div className="mb-10 md:mb-0 relative">
          <Image
            src={"/images/arrowL.png"}
            alt="rightarrow"
            width={75.84}
            height={77}
            className="hidden lg:absolute bottom-5 -left-20"
          />
          <h2 className="text-4xl font-bold text-[#187593] mb-6">
            Why Aviation Course?
          </h2>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative py-2 md:hidden w-[362.21px] h-[526px]">
              <Image
                src={"/images/Qplane.png"}
                width={362}
                height={526}
                alt="Aviation"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            The aviation industry has excellent growth both in India &
            internationally. Thousands of jobs have opened up at every level &
            airlines/ airports are looking for talented, trained people for
            various roles – from airport management to ticketing, from cabin
            crew to cargo handling & ground staff.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kairos Institute offers the best aviation courses, internships,
            co-op programs, or other work-study options that can help students
            gain valuable experience and make connections in the industry. We
            conduct inductions, counseling & mock interview sessions to prepare
            them for job interviews with airlines & airports. Enrolling in an
            Aviation Course might be a terrific way to get ready for a lucrative
            worldwide career in the exciting and dynamic industry of aviation.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="hidden md:relative w-[362.21px] h-[526px]">
            <Image
              src={"/images/Qplane.png"}
              width={362}
              height={526}
              alt="Aviation"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <Image
            src={"/images/arrowL.png"}
            alt="rightarrow"
            width={75.84}
            height={77}
            className="absolute lg:hidden -bottom-8 right-40"
          />
      </div>

      <div className="mt-16 bg-[#F8F8F8] py-10 px-6 md:px-16 shadow-lg rounded-lg max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Enquiry Form</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="border border-gray-300 rounded-md py-3 px-4 font-sml focus:outline-none focus:ring-2 focus:ring-blue-300 col-span-1 md:col-span-2"
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
    </section>
  );
};

export default WhyAviationSection;
