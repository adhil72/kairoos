import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const AviationFaculty = () => {
  const facultyMembers = [
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
  ];

  return (
    <section className="">
      <Container className="text-center !pt-0">
        <div className='relative'>
          <h2 className="relative text-3xl md:text-4xl font-bold text-[#187593] mb-6">
            <span className='text-[22px] font-[400]'>Team of Experienced</span>
            <img
              src='/images/sarrow.png'
              alt='arrow'
              className="hidden md:absolute top-0 right-32 w-[43px] h-[42px] object-cover"
            />

            <p></p>
            Aviation Faculty Members

          </h2>
        </div>

        <Carousel>
          <CarouselContent>
            {facultyMembers.map((member, index) => (
              <CarouselItem className='basis-1/2 md:basis-1/3 lg:basis-1/5'>
                <div key={index} className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 object-cover"
                  />
                  <span className="text-sm">{member.name}</span>
                  <p className="text-gray-600 text-xs">{member.designation}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center">
          <Button className="text-white w-fit" alt>
            View More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AviationFaculty;
