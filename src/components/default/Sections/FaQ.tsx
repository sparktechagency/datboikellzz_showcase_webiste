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
import { useAllFaqQuery } from '@/app/provider/redux/services/faqApis';

function FaQ() {
  const { data, isLoading } = useAllFaqQuery(undefined);
  console.log(data);
  if (isLoading)
    return (
      <div className="min-h-screen">
        <div className="flex flex-col gap-4 container mx-auto px-4 py-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-500/40 rounded h-6 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );

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

      {data?.data?.length > 0 ? (
        <div className="space-y-4">
          <Accordion
            className="rounded-lg"
            type="single"
            collapsible
            defaultValue="item-1"
          >
            {data?.data?.map(
              (
                item: { question: string; description: string },
                index: number
              ) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="font-poppins px-6 py-3 font-semibold text-lg md:text-xl text-[#022C22] transition-all ease-in-out duration-300">
                    {item?.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed px-6 py-3 text-sm md:text-base">
                    {item?.description}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default FaQ;
