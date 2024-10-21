import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ashmi Basheer',
      role: 'Student',
      image: '/placements/d.png',
      testimony:
        "Kairos gives me the best environment for my studies. They always provided me with the assistance that I required for my overall development and to improve my technical knowledge. I will always be grateful to them for providing me a platform of practical learning and preparing me for the future life. The teacher-student interaction was great. The teachers were very friendly because of which I could clarify many of my doubts.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-lg md:text-xl  text-[#187593] mb-6">Testimonials</h2>
        <h1 className="text-[29px] md:text-[46px] md:text-4xl font-bold text-[#187593] mb-6">About our Institution</h1>
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 mb-4 rounded-lg">
              <div className="flex text-left mb-4 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-[176px] h-[139px]"
                />
                <img
                  src='/placements/qoutes.png'
                  alt="qoute"
                  className="object-cover w-[129px] h-[152px] absolute -bottom-28 left-0 "
                />

                <p className="text-gray-600 italic mb-6">{testimonial.testimony}</p>
              </div>
              
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
