'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { itemVariants } from '@/lib/animation';

// Define the FAQ data array
const faqData = [
  {
    question: 'What is Webflow and why is it the best website builder?',
    answer:
      'Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before.',
  },
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer: '[Answer text goes here]',
  },
  {
    question: 'How do you clone a Webflow Template from the Showcase?',
    answer: '[Answer text goes here]',
  },
  {
    question: 'Why is BRIX Templates the best Webflow agency out there?',
    answer: '[Answer text goes here]',
  },
];

function FaQ() {
  return (
    <div className="max-w-7xl relative  mx-auto px-4 py-16 md:py-28">
      <motion.div
        variants={itemVariants}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="font-poppins font-semibold text-3xl md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-700 text-lg md:text-xl">
          Got questions? We’ve got answers. Explore our FAQ to learn more about
          what we do and how we can help you!
        </p>
      </motion.div>

      <div className="space-y-4">
        <Accordion
          className="rounded-lg"
          type="single"
          collapsible
          defaultValue="item-1"
        >
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="font-poppins px-6 py-3 font-semibold text-lg md:text-xl text-[#022C22] transition-all ease-in-out duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed px-6 py-3 text-sm md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaQ;
