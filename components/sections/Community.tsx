import Image from "next/image";
import { communityData } from "@/data/community";

export default function Community() {
  const { title, description, cards } = communityData;

  return (
    <section
      id="service"
      className="bg-white pb-16 pt-8 sm:pb-20 sm:pt-10"
      aria-labelledby="community-title"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            id="community-title"
            className="text-[36px] font-semibold leading-[1.2] text-[#4d4d4d] sm:text-[42px]"
          >
            {title}
          </h2>

          <p className="mt-4 text-[16px] leading-6 text-[#717171] sm:text-[18px]">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3 lg:mt-10 lg:gap-10">
          {cards.map((card) => (
            <article
              key={card.id}
              className="flex min-h-[285px] flex-col items-center rounded-lg bg-white px-8 py-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={72}
                  height={72}
                  className="h-[64px] w-[64px] object-contain"
                />
              </div>

              <h3 className="mt-6 max-w-[280px] text-[28px] font-bold leading-[1.15] text-[#4d4d4d]">
                {card.title}
              </h3>

              <p className="mt-4 max-w-[300px] text-[16px] leading-6 text-[#717171]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
