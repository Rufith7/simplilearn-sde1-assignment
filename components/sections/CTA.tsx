import { ctaData } from "@/data/cta";

export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-[#f5f7fa] py-16 sm:py-20"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2
          id="cta-title"
          className="text-4xl font-semibold leading-tight text-[#263238] sm:text-5xl"
        >
          {ctaData.title}
        </h2>

        <a
          href={ctaData.button.href}
          className="mt-8 inline-flex items-center rounded-md bg-[#4caf50] px-7 py-3 text-base font-medium text-white transition-colors hover:bg-[#43a047]"
        >
          {ctaData.button.label}
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
