import Image from "next/image";
import { clientsData } from "@/data/clients";

export default function Clients() {
  const { title, description, logos } = clientsData;

  return (
    <section
      id="clients"
      className="bg-white pt-14 pb-10 sm:pt-16 sm:pb-12"
      aria-labelledby="clients-title"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <h2
            id="clients-title"
            className="text-[32px] font-semibold leading-tight text-[#4d4d4d] sm:text-[36px]"
          >
            {title}
          </h2>

          <p className="mt-3 text-[16px] leading-6 text-[#717171] sm:text-[18px]">
            {description}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-[48px] min-w-[48px] items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={48}
                height={48}
                className="h-[48px] w-[48px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
