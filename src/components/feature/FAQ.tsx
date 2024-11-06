"use client";
import React, { useState } from "react";
import Container from "../common/Container";
import ArrowDown from "./Landing/assets/ArrowDown";

// FAQItem component to isolate each FAQ item
const FAQItem = ({ question, answer, isActive, onClick }:any) => (
  <div className="bg-white p-4 rounded-3xl border border-tint-alt shadow-md overflow-hidden transition-all duration-300">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left"
    >
      <h3 className="flex-1 px-2 text-[#187593] text-sm leading-5 font-medium">
        {question}
      </h3>
      <div
        className={`transform transition-transform duration-300 ${
          isActive ? "rotate-180" : "rotate-0"
        }`}
      >
        <ArrowDown className="w-6 h-6" />
      </div>
    </button>
    <div
      className={`transition-max-height duration-300 ease-in-out ${
        isActive ? "max-h-[500px]" : "max-h-0"
      } overflow-hidden`}
    >
      <p className="text-gray-600 font-wa text-base leading-6 mt-2">{answer}</p>
    </div>
  </div>
);

// Main FAQ component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is the No. 1 aviation training institute in Kerala?",
      answer:
        "With top courses, expert instructors, and unparalleled placement opportunities, Kairos is known as the No. 1 aviation training institute in Kerala. We have branches across Kerala and Bangalore to avail the course at your convenience. Our extensive network of industry connections and career placement services will help you land the job of your dreams after graduation. Admission for the next batch is closing soon. Enrol now for the last few seats.",
    },
    { question: "What sets Kairos Institute apart as the best choice for aviation education in Kerala?", answer: "Kairos Institute stands out due to its comprehensive curriculum, expert instructors, and strong industry ties that ensure students are job-ready upon graduation." },
    { question: "What do I need to join Kairos Institute?", answer: "You need a passion for aviation and a commitment to learning. Basic eligibility criteria apply depending on the course." },
    { question: "How does Kairos Institute help students during their training?", answer: "We provide hands-on training, mentorship, and internship opportunities, ensuring students gain practical skills and industry knowledge." },
    { question: "Does Kairos Institute offer job placement assistance?", answer: "Yes, we have a dedicated placement cell that assists students in finding job opportunities after graduation." },
    { question: "How long are the courses?", answer: "Our courses range from a few months to a year, depending on the specialization." },
    { question: "How can I apply for admission?", answer: "Visit our website or contact our admission office for the application process. Our team is here to guide you through each step." },
    { question: "What is the fee structure?", answer: "The fee structure varies by course. Please contact our admissions team for detailed information." },
  ];

  return (
    <section className="py-12 bg-[#F8F8F8]">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#187593] mb-6">
          FAQ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
