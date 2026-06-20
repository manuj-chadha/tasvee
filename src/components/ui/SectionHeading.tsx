type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-tasvee-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
