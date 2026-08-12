import Link from "next/link";
import type { ButtonData } from "@/types";

interface ButtonProps extends ButtonData {
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  label,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-[#4CAF4F] text-white hover:bg-[#3d963f]",
    secondary:
      "border border-[#4CAF4F] bg-transparent text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}