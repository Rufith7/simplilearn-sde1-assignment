import Image from "next/image";
import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { title, description, cta, image } = heroData;

  return (
    <section
      id="home"
      className="bg-[#f5f7fa]"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <h1
            id="hero-title"
            className="max-w-[650px] text-4xl font-semibold leading-tight tracking-tight text-[#4d4d4d] sm:text-5xl lg:text-[64px]"
          >
            {title.primary}
            <span className="block text-[#4caf50]">
              {title.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-[600px] text-base leading-7 text-[#717171] sm:text-lg">
            {description}
          </p>

          <Button
            label={cta.label}
            href={cta.href}
            className="mt-8"
          />
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={400}
            priority
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
