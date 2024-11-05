import { useState } from "react";
import Node from "@/assets/Node";
import Container from "@/components/common/Container";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "/images/landing/im_i.png",
    text: "Kairos gives me the best environment for my studies. They always provided me with the assistance that I required for my overall development and to improve my technical knowledge. I will always be grateful to them for providing me a platform of practical learning and preparing me for the future life. The teacher-student interaction was great. The teachers were very friendly because of which I could clarify many of my doubts.",
    name: "Ashmi Basheer",
    role: "Student",
  },
  {
    image: "/images/landing/im_i.png",
    text: "Kairos has been instrumental in helping me develop the skills I needed to excel in my career. The supportive environment was key to my growth.",
    name: "John Doe",
    role: "Engineer",
  },
  {
    image: "/images/landing/im_i.png",
    text: "My experience at Kairos was transformative, allowing me to develop both personally and professionally. The teachers provided constant support.",
    name: "Jane Smith",
    role: "Designer",
  },
];

export default function SectionH() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle previous and next navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full min-h-[60vh]">
      <Container className="items-center">
        <span className="font-[400] text-[15.52px] lg:text-[22px] leading-[57px] text-[#187593] text-center">Testimonials</span>
        <span className="font-[400] text-[29.1px] lg:text-[43px] leading-[57px] text-[#187593] text-center">About our Institution</span>
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 gap-y-10 lg:gap-y-0">
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              className="w-[282.94px] object-right h-[266.82px] object-contain"
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
          </div>
          <div className="flex-1 px-5">
            <p className="font-wa h-[150px] overflow-y-auto font-[500] text-[14px] leading-[26px] text-center lg:text-start">{currentTestimonial.text}</p>
            <div className="flex items-center lg:items-start flex-col mt-[17px] lg:mt-0">
              <span className="text-[#187593] font-[400] text-[17px] lg:leading-[57px]">{currentTestimonial.name}</span>
              <span className="font-wa font-[600] text-[16px] lg:leading-[26px]">{currentTestimonial.role}</span>
            </div>
          </div>
        </div>
        <div className="flex w-full my-10">
          <div className="flex-1 flex items-center">
            <Node />
            <div className="h-0.5 bg-[#2FC5E1] flex-1" />
          </div>
          <div className="w-5"></div>
          <div className="flex gap-x-2">
            <button
              onClick={handlePrev}
              className="bg-[#2FC5E1] font-bold rounded-full w-[50px] h-[50px] flex justify-center items-center"
            >
              <LucideChevronLeft size={25} color="#fff" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#2FC5E1] font-bold rounded-full w-[50px] h-[50px] flex justify-center items-center"
            >
              <LucideChevronRight size={25} color="#fff" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
