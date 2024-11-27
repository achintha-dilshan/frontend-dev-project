import { ComponentProps } from "react";

type ButtonProps = {
  href?: string;
} & ComponentProps<"a">;

export const Button = ({ href = "#", children, ...props }: ButtonProps) => {
  return (
    <a
      href={href}
      {...props}
      className="font-bold uppercase inline-block text-sm text-white bg-secondary leading-none rounded px-5 py-3 tracking-widest w-fit"
    >
      {children}
    </a>
  );
};
