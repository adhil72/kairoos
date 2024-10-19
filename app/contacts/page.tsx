import HeroB from '@/assets/HeroB';

export default function page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="py-16 flex items-center justify-center flex-col-reverse lg:flex-row">
        <div className="">
          <h1 className="text-4xl font-bold text-tint">AVIATION</h1>
          <p className="text-lg text-gray-600">WE ARE HERE WITH YOUR DREAMS</p>
        </div>
          <div className=''>
          <HeroB/>
          </div>
      </div>

      
      <div className="bg-[#EDFDFE] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-[43px] font-bold text-[#187593]">
            Best Aviation Institute in Kerala & Bangalore
          </h2>
          <h3 className="text-xl text-[#187593] mt-4">
            100% Placement Assistance
          </h3>
          <p className="text-lg text-[#5B5B5B] mt-6 mx-auto max-w-2xl">
            The career choices have now expanded beyond doctors and engineers
            to include the Airline, Aviation, and Hospitality sectors, both in
            India and internationally. If your dream aligns with this, we are
            here to guide you with our expert instructors, advanced facilities,
            and hands-on training.
          </p>
        </div>

      </div>
        
      <div className="fixed right-5 bottom-5">
        <button className="w-14 h-14 bg-teal-600 text-white flex items-center justify-center rounded-full shadow-lg">
          🤖
        </button>
      </div>
    </div>
  );
}
                     
                        

      
