import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: "light" | "dark";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ theme = "light", className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={twMerge(
          "text-md appearance-none rounded-none border-b-2 bg-transparent pb-4 font-normal focus:border-red-500 focus:outline-none lg:text-2xl",
          theme === "light" && "border-dark-500 text-dark-500 focus:text-dark-700",
          theme === "dark" &&
            "border-light-500 placeholder-light-500 text-light-500 placeholder-opacity-50",
          className,
        )}
      />
    );
  },
);

Input.displayName = "Input";
