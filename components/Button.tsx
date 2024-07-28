"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  primary,
  secondary,
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn("btn", { primary, secondary }, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
