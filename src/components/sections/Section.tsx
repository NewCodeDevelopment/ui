"use client";

import { Color } from "@/config/colors";
import { DESKTOP_MIN_WIDTH } from "@/utils/const";
import { useWindow } from "@/utils/hooks/window";
import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
  px?: boolean;
  py?: boolean;
  pt?: boolean;
  pb?: boolean;
  pl?: boolean;
  pr?: boolean;
  bg?: Color;
  align?: "left" | "center" | "right";
  hiddenSection?: boolean;
  mobileScreen?: boolean;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      px = true,
      py = true,
      pt,
      pb,
      pl,
      pr,
      bg = "dark",
      align = "left",
      className,
      style,
      hiddenSection = false,
      mobileScreen = false,
      ...props
    },
    ref,
  ) => {
    const { height, width } = useWindow();

    const bgColors: { [key in Color]: string } = {
      red: "bg-red-500",
      dark: "bg-dark-700",
      light: "bg-light-500",
      transparent: "bg-transparent",
    };

    const navigationColors: { [key in Color]: string } = {
      red: "red",
      dark: "dark",
      light: "light",
      transparent: "light",
    };

    const alignItems = {
      left: "place-items-start",
      center: "place-items-center",
      right: "place-items-end",
    };

    return (
      <motion.section
        {...props}
        ref={ref}
        data-visibility={hiddenSection ? "hidden" : "visible"}
        data-color={navigationColors[bg]}
        className={twMerge(
          "z-0 grid grid-cols-1 grid-rows-1 transition-all duration-200 ease-in-out lg:relative lg:h-screen",
          bgColors[bg],
          alignItems[align],
          "border-red-500",
          //  y-axis
          py && "py-page",
          pt && "pt-page",
          pb && "pb-page",
          // x -axis
          px && "px-page",
          pl && "pl-page",
          pr && "pr-page",

          className,
        )}
        style={{
          height:
            parseInt(width.toString()) > DESKTOP_MIN_WIDTH
              ? height
              : mobileScreen
              ? "100vh"
              : "auto",
          ...style,
        }}
      >
        {children}
      </motion.section>
    );
  },
);

Section.displayName = "Section";
export default Section;
