import React from 'react';
import Container from './Container';
import Button from './Button';

const Placements = () => {
  const placementMembers = [
    { name: 'ADITHYAN S', role: 'Coplince Logistics', image: '/placements/a.png' },
    { name: 'SARAHYA R', role: 'Freight Forwarding', image: '/placements/b.png' },
    { name: 'SUJAMOL M.S', role: 'F.K Hub', image: '/placements/c.png' },
    { name: 'ARJUN V.R', role: 'Driver Logistics', image: '/placements/d.png' },
  ];

  return <section id='placements' className="w-full bg-[#E0F7F8] relative">
    <Container className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#187593] mb-6 relative">
        Placements
        <img
          src={"/placements/ring.png"}
          alt="ring"
          className="w-[16.49px] h-[16.49px] lg:w-[57px] lg:h-[57px]"
        />
        <img
          src={"/placements/decor1.png"}
          alt="ring"
          className="absolute w-[30px] h-[70px] left-56 top-0"
        />
        <img
          src={"/placements/decor2.png"}
          alt="ring"
          className="absolute w-[30px] h-[70px] right-56 top-0"
        />
        <img
          src={"/placements/rightS.png"}
          alt="ring"
          className="absolute w-[40.42px] h-[40.42px] lg:w-[64px] lg:h-[65px] -right-4 bottom-0"
        />

      </h2>

      <div className='flex justify-center'>
        <div className="w-fit grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {placementMembers.map((member, index) => (
            <div key={index} className="p-6 bg-[#E0F7F8] flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-[143.94px] h-[169.5px]"
              />
              <h3 className="text-sm">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button className='text-white w-fit' alt>
          View More
        </Button>
      </div>
      <img
        src={"/placements/ringSmall.png"}
        alt="ring"
        className="absolute w-[22px] h-[22px] right-60 bottom-32 hidden md:block"
      />
    </Container>
  </section>
};

export default Placements;
