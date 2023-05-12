"use client";

import { Testimonial } from "@/utils/types/testimonial";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Section from "../sections/Section";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [ref, inView] = useInView();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const animations = {
    container: {
      intial: {
        opacity: 0,
        y: -20,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
    },
    testimonials: {
      initial: {
        opacity: 0,
        y: -20,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: 20,
      },
    },
    dots: {
      initial: {
        opacity: 0,
        y: -20,
      },
      animate: (i: number) => ({
        opacity: currentIndex === i ? 1 : 0.3,
        y: 0,
        transition: {
          delay: 0.2 + i * 0.1,
        },
      }),
    },
  };

  return (
    <Section bg="red" align="center">
      <motion.div
        className="flex flex-col gap-6 self-center text-center lg:gap-8"
        whileInView={{
          opacity: [0, 1],
          y: [-20, 0],
        }}
      >
        <Heading element="h2" type="h3" color="light">
          Testimonials_
        </Heading>

        <AnimatePresence mode="wait">
          {testimonials.map(
            ({ body, company, name }, index) =>
              currentIndex === index && (
                <motion.div
                  ref={ref}
                  className="flex flex-col gap-6"
                  key={index}
                  variants={animations.testimonials}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Paragraph
                    color="dark"
                    maxCharacters={40}
                    size="large"
                    className="italic"
                    weight="extrabold"
                  >
                    “{body}”
                  </Paragraph>

                  <div className="flex flex-col gap-3">
                    <Heading type="h3">{name}</Heading>
                    <Heading type="h4" color="dark" weight="medium">
                      {company}
                    </Heading>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        <div className="flex flex-row gap-3 self-center">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className="bg-light-300 h-2 w-2 cursor-pointer rounded-full"
              variants={animations.dots}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              custom={index}
              onClick={() => setCurrentIndex(index)}
            >
              &nbsp;
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
