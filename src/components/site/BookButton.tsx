import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "solid" | "outline" | "invert";
  size?: "sm" | "md" | "lg";
  label?: string;
};

export function BookButton({
  className,
  variant = "solid",
  size = "md",
  label = "Book a Zoom Call",
}: Props) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "solid" &&
          "bg-accent text-accent-foreground shadow-[0_10px_30px_-12px_var(--accent)] hover:-translate-y-0.5 hover:brightness-110",
        variant === "invert" &&
          "bg-ink-foreground text-ink hover:-translate-y-0.5 hover:brightness-95",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-secondary",
        className,
      )}
    >
      {label}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}