import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Feature } from "@/types";

interface FeaturesProps {
  feature: Feature;
}

export default function Features({ feature }: FeaturesProps) {
  return (
    <section
      id="feature"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-label={feature.title}
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
          <div className="flex items-center justify-center">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={360}
              height={300}
              className="h-auto max-h-[310px] w-full max-w-[360px] object-contain"
            />
          </div>

          <div className="max-w-[620px]">
            <h2 className="text-[28px] font-semibold leading-[1.2] text-[#4d4d4d] sm:text-[32px]">
              {feature.title}
            </h2>

            <p className="mt-5 text-[14px] leading-[1.6] text-[#717171] sm:text-[15px]">
              {feature.description}
            </p>

            <Button
              label={feature.button.label}
              href={feature.button.href}
              className="mt-6 min-h-[44px] px-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
