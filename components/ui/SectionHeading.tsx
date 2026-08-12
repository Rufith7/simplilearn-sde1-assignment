interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-[#263238] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-6 text-[#717171] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}