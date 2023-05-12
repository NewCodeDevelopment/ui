import { Color, textColors } from "@/config/colors";
import { FontWeights, ParagraphSizes, paragraphStyles } from "@/config/typography";
import { HTMLAttributes, createElement } from "react";
import { twMerge } from "tailwind-merge";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  color?: Color;
  className?: string;
  breakpoint?: number;
  size?: ParagraphSizes;
  maxCharacters?: number;
  weight?: FontWeights;
};

export function Paragraph({
  children,
  className,
  color = "light",
  breakpoint = 0,
  size = "medium",
  weight,
  maxCharacters,
  ...props
}: ParagraphProps) {
  return createElement(
    "p",
    {
      ...props,
      className: twMerge(paragraphStyles(size, weight), textColors[color][500], className),
      style: {
        ...(breakpoint > 0 && {
          WebkitLineClamp: breakpoint,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }),
        ...(maxCharacters != undefined && {
          maxWidth: `${maxCharacters}ch`,
        }),
      },
    },
    children,
  );
}
