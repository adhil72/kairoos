import Image from 'next/image';
import React from 'react';

interface Course {
  image: string;
  title: string;
  duration: string;
  eligibility: string;
}

const courses: Course[] = [
  {
    image: '/images/plane.png',
    title: 'BBA Aviation',
    duration: '3 Years',
    eligibility: 'Plus Two (Any Stream) Minimum 50% Marks in aggregate',
  },
  {
    image: '/images/employe.png',
    title: 'Diploma in Airline & Airport Management',
    duration: '12 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/management.png',
    title: 'Diploma in Cabin Crew Management',
    duration: '12 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/airfare.png',
    title: 'Diploma in Air Fare and Ticketing Management',
    duration: '6 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/handling.png',
    title: 'Diploma in Airport Handling',
    duration: '6 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/mba.png',
    title: 'MBA with Airline and Airport Management',
    duration: '2 Years',
    eligibility: 'Completed Graduation with minimum 50% aggregate',
  },
  {
    image: '/images/passenger.png', 
    title: 'Diploma in Passenger Management',
    duration: '6 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/cargo.png', 
    title: 'Diploma in Air Cargo Management',
    duration: '6 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/travel.png',
    title: 'Diploma in International Hospitality and Travel Management',
    duration: '12 Months',
    eligibility: 'Plus Two (Any Stream) Minimum 50% Marks in aggregate',
  },
  {
    image: '/images/tourism.png', 
    title: 'Advanced Diploma in Travel and Tourism',
    duration: '6 Months',
    eligibility: 'Degree / plus two equivalent',
  },
  {
    image: '/images/business.png', 
    title: 'Travel Agency and Tour Operation Business',
    duration: '6 Months',
    eligibility: 'Degree / plus two equivalent',
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section className="text-center py-16">
     
      <h2 className="text-[43px] font-bold text-[#187593] mb-6 max-w-6xl mx-auto">
        Explore Our Aviation & Airport Management Courses
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Uncover your potential with our best courses, created for your successful future. Our complete training program can help you succeed in any area you choose, whether it be aviation, logistics, or hospitality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-14">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col border-2 border-tint-alt"
          >
            <div className="w-full flex justify-center py-4">
              <Image
                src={course.image}
                height={240}
                width={240}
                alt={course.title}
                className="object-cover rounded-full"
              />
            </div>
            
            <div className="p-6 flex flex-col justify-center text-left">
              <h3 className="text-xl font-semibold text-tint mb-4">
                {course.title}
              </h3>

              <div className="flex items-center justify-center mb-2">
                <Image
                  src={'/images/timer.png'}
                  height={30}
                  width={30}
                  alt="timer icon"
                />
                <p className="ml-2 text-gray-600">{course.duration}</p>
              </div>

              <div className="flex items-center justify-center mb-4">
                <Image
                  src={'/images/done.png'}
                  height={30}
                  width={30}
                  alt="eligibility icon"
                />
                <p className="ml-2 text-gray-600">{course.eligibility}</p>
              </div>

              <div className="flex justify-between">
                <button className="border border-[#187593] text-[#187593] px-4 py-2 rounded hover:bg-blue-50">
                  Apply Now
                </button>
                <button className="border border-[#187593] text-[#187593] px-4 py-2 rounded hover:bg-blue-50">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
