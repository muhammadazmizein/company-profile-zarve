import Image from "next/image";
import logoMark from "@/assets/logo-mark.png";

interface LogoProps {
  variant?: "dark" | "light";
}

export function Logo({ variant = "dark" }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src={logoMark} alt="" width={34} height={34} className="h-8 w-8 object-contain" priority />
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          variant === "dark" ? "text-ink-900" : "text-white"
        }`}
      >
        ZARVE
      </span>
    </span>
  );
}
