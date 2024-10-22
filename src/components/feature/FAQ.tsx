"use client"
import React, { useState } from 'react';
import Container from '../common/Container';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Who is the No. 1 aviation training institute in Kerala?',
      answer:
      'With top courses, expert instructors, and unparalleled placement opportunities Kairos is known as the No. 1 aviation training institute in Kerala. We have branches across Kerala and Bangalore to avail the course at your convenience.  Our extensive network of industry connections and career placement services will help you land the job of your dreams after graduation. Admission for the next batch is closing soon. Enrol now for the last few seats.'},
    { question: 'What sets Kairos Institute apart as the best choice for aviation education in Kerala?', answer: '' },
    { question: 'What do I need to join Kairos Institute?', answer: '' },
    { question: 'How does Kairos Institute help students during their training?', answer: '' },
    { question: 'Does Kairos Institute offer job placement assistance?', answer: '' },
    { question: 'How long are the courses?', answer: '' },
    { question: 'How can I apply for admission?', answer: '' },
    { question: 'What is the fee structure?', answer: '' },
  ];

  return (
    <section className="py-12 bg-[#F8F8F8]">
      <Container className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#187593] mb-6">FAQ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-3xl border border-tint-alt shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className=" text-[#187593]">{faq.question}</h3>
                <span  className='border border-[#187593] rounded-[50%] p-3'>{activeIndex === index ? '^' : 'v'}</span>
              </button>
              {activeIndex === index && <p className=" text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
