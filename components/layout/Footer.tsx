import Image from "next/image";
import { footerData } from "@/data/footer";

export default function Footer() {
  const { company, sections } = footerData;

  return (
    <footer className="bg-[#263238] py-14 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/hero/Logo.png"
            alt={company.name}
            width={140}
            height={32}
            className="brightness-0 invert"
          />

          <p className="mt-8 max-w-sm text-sm text-[#f5f7fa]">
            {company.description}
          </p>

          <p className="mt-4 text-sm text-[#f5f7fa]">
            {company.rights}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4.5 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Website"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 2a8 8 0 0 1 7.938 7H14.9a13.96 13.96 0 0 0-1.54-4.069A6.004 6.004 0 0 0 12 4Zm-2.59 1.057A11.965 11.965 0 0 1 12 11.1a11.965 11.965 0 0 1 2.59-6.043A8.009 8.009 0 0 0 9.41 5.057ZM4 12a7.969 7.969 0 0 1 .147-1.469h4.121A12.034 12.034 0 0 0 9.89 12a12.034 12.034 0 0 0-1.622 1.469H4.147A7.969 7.969 0 0 1 4 12Zm1.684 3.53A11.965 11.965 0 0 1 12 12.9a11.965 11.965 0 0 1 6.316 2.63A8.01 8.01 0 0 0 11.1 18.94 8.007 8.007 0 0 0 5.684 15.53Zm6.316 5.94a7.969 7.969 0 0 1-7.938-7h4.121c.383 1.522.972 2.93 1.54 4.069A6.002 6.002 0 0 0 12 20.94Zm4.316-1.41a11.97 11.97 0 0 1-2.59-6.043 11.968 11.968 0 0 1 2.59-6.043A8.005 8.005 0 0 0 18.316 8.47 7.98 7.98 0 0 1 16.316 19.53Z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M22 5.878a8.19 8.19 0 0 1-2.357.646 4.108 4.108 0 0 0 1.804-2.27 8.19 8.19 0 0 1-2.605.995A4.097 4.097 0 0 0 11.08 8.03a11.62 11.62 0 0 1-8.447-4.28 4.078 4.078 0 0 0 1.27 5.467A4.073 4.073 0 0 1 2.8 8.57v.05a4.095 4.095 0 0 0 3.285 4.01 4.095 4.095 0 0 1-1.082.144 4.1 4.1 0 0 1-.771-.074 4.096 4.096 0 0 0 3.825 2.84 8.227 8.227 0 0 1-5.096 1.756A8.37 8.37 0 0 1 2 17.613a11.616 11.616 0 0 0 6.29 1.84c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0 0 22 5.878Z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a2.973 2.973 0 0 0-2.093-2.105C19.508 3.5 12 3.5 12 3.5s-7.508 0-9.405.581A2.973 2.973 0 0 0 .502 6.186 31.146 31.146 0 0 0 0 12a31.146 31.146 0 0 0 .502 5.814 2.973 2.973 0 0 0 2.093 2.105C4.492 20.5 12 20.5 12 20.5s7.508 0 9.405-.581a2.973 2.973 0 0 0 2.093-2.105A31.146 31.146 0 0 0 24 12a31.146 31.146 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
              </svg>
            </a>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold">{section.title}</h2>

            <nav className="mt-5 flex flex-col gap-3">
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#f5f7fa] transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}

        <div>
          <h2 className="text-lg font-semibold">Stay up to date</h2>

          <div className="mt-5 w-full max-w-sm">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <div className="relative">
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 pr-12 text-sm text-white placeholder:text-white/60 focus:border-[#4caf50] focus:outline-none focus:ring-2 focus:ring-[#4caf50]/30"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4caf50] text-white transition hover:bg-emerald-500"
                aria-label="Send email"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M3.4 20.1a1 1 0 0 0 1.26.35l17-8.5a1 1 0 0 0 0-1.8l-17-8.5A1 1 0 0 0 3 2.35 1 1 0 0 0 3.4 3.6L5.1 10.5 18.9 12 5.1 13.5 3.4 20.4a1 1 0 0 0-.01-.3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
