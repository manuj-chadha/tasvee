import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "outline-white" | "ghost" | "white";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-tasvee-red text-white hover:bg-red-700 border border-tasvee-red",
  outline:
    "bg-transparent text-white border border-white hover:bg-white/10",
  "outline-white":
    "bg-transparent text-white border border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-white",
  white:
    "bg-white text-tasvee-red hover:bg-gray-100 border border-white",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = false,
  type = "button",
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {children}
          {showArrow && <ArrowRight className="h-4 w-4" />}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
