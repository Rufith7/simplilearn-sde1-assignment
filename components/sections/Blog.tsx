import Image from "next/image";
import { blogsData } from "@/data/blogs";

export default function Blog() {
  const { title, description, posts } = blogsData;

  return (
    <section
      id="blog"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="blog-title"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="blog-title"
            className="text-3xl font-semibold text-[#4d4d4d] sm:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-3 text-base leading-7 text-[#717171]">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={380}
                  height={240}
                  className="h-[220px] w-full object-cover"
                />
              </div>

              <div className="relative mx-4 -mt-12 rounded-lg bg-white p-6 text-center shadow-lg">
                <h3 className="text-lg font-semibold leading-7 text-[#4d4d4d]">
                  {post.title}
                </h3>

                <a
                  href={post.href}
                  className="mt-4 inline-block text-sm font-semibold text-[#4caf50]"
                >
                  Readmore →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
