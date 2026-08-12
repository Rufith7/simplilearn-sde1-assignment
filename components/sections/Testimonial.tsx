import Image from "next/image";
import { testimonialData } from "@/data/testimonial";

export default function Testimonial() {
  const { quote, author, role, image, logos } = testimonialData;

  return (
    <section
      id="testimonial"
      className="bg-[#f5f7fa] py-14 sm:py-16 lg:py-20"
      aria-labelledby="testimonial-author"
    >
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
        <div className="flex justify-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={280}
            height={280}
            className="h-[250px] w-[250px] rounded-lg object-cover shadow-sm sm:h-[280px] sm:w-[280px]"
          />
        </div>

        <div className="min-w-0">
          <blockquote className="text-[14px] leading-[1.65] text-[#717171] sm:text-[15px]">
            {quote}
          </blockquote>

          <p
            id="testimonial-author"
            className="mt-5 text-[16px] font-semibold text-[#4caf50]"
          >
            {author}
          </p>

          <p className="mt-1 text-[13px] text-[#89939e]">
            {role}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-[220px] flex-1">
              <Image
                src={logos.src}
                alt={logos.alt}
                width={600}
                height={60}
                className="h-auto max-h-[48px] w-full max-w-[600px] object-contain object-left"
              />
            </div>

            <a
              href="#"
              className="text-[#4caf50] font-semibold transition-colors duration-200 hover:text-emerald-600"
            >
              Meet all customers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
