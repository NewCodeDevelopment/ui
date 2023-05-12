"use client";

import { LandingLogo } from "@/icons/brand/LandingLogo";
import { HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Section from "../sections/Section";
import { Heading } from "../typography/Heading";
import { Scroll } from "./Scroll";

export type LandingProps = HTMLMotionProps<"section"> & {
  title: string;
  hiddenSection?: boolean;
};

export const Landing = forwardRef<HTMLElement, LandingProps>(
  ({ title, className, hiddenSection, ...props }, ref) => {
    return (
      <Section
        {...props}
        bg="dark"
        className={twMerge("relative h-screen pb-52", className)}
        mobileScreen
        align="center"
        hiddenSection={hiddenSection}
        ref={ref}
      >
        <Heading
          type="h1"
          color="light"
          className="col-start-1 row-start-1 lg:text-center"
          maxCharacters={10}
        >
          {title}
          <span className="text-red-500">_</span>
        </Heading>

        <LandingLogo className="-z-10 col-start-1 row-start-1 lg:w-3/4 2xl:w-1/2" />

        <Scroll className="absolute left-0 right-0 bottom-40 mx-auto lg:bottom-20" />
      </Section>
    );
  },
);

Landing.displayName = "Landing";
