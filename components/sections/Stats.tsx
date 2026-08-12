import Image from "next/image";
import { statsData } from "@/data/stats";

export default function Stats() {
  const { title, description, items } = statsData;

  return (
    <section
      id="product"
      className="bg-[#f5f7fa] py-14 sm:py-16 lg:py-20"
      aria-labelledby="stats-title"
    >
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="stats-title"
            className="max-w-[500px] text-[30px] font-semibold leading-[1.2] text-[#4d4d4d] sm:text-[36px]"
          >
            Helping a local
            <br />
            <span className="text-[#4caf50]">business reinvent itself</span>
          </h2>

          <p className="mt-4 text-[15px] leading-6 text-[#717171]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <p className="text-[24px] font-bold leading-tight text-[#4d4d4d] sm:text-[28px]">
                  {item.value}
                </p>

                <p className="mt-1 text-[13px] text-[#717171] sm:text-[14px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
