import React from 'react';

const AviationFaculty = () => {
  const facultyMembers = [
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
    { name: 'ADITHYAN S', designation: 'Designation', image: '/images/faculty.png' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className='relative'>
        <h2 className="relative text-3xl md:text-4xl font-bold text-[#187593] mb-6">
          <span className='text-[22px] font-[400]'>Team of Experienced</span>
          <img 
                src='/images/sarrow.png'
                alt= 'arrow'
                className="hidden md:absolute top-0 right-32 w-[43px] h-[42px] object-cover" 
              />
             
          <p></p>
          Aviation Faculty Members
        
        </h2>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="p-6">
              <img 
                src={member.image} 
                alt={member.name} 
                className="mx-auto mb-4 object-cover" 
              />
              <span className="text-sm">{member.name}</span>
              <p className="text-gray-600 text-xs">{member.designation}</p>
            </div>
          ))}
        </div>
        
        <button className="bg-tint-alt text-white py-2 px-6 rounded-full hover:bg-[#135e6e]">
          View More
        </button>
      </div>
    </section>
  );
};

export default AviationFaculty;
