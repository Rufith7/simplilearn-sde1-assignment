import Image from "next/image";
import { navigationData } from "@/data/navigation";

export default function Navbar() {
  const { links, actions } = navigationData;

  return (
    <header className="bg-[#f5f7fa]">
      <nav
        className="mx-auto flex min-h-[84px] max-w-[1200px] items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <a href="#home" aria-label="Nexcent home">
          <Image
            src="/images/hero/Logo.png"
            alt="Nexcent"
            width={140}
            height={32}
            priority
            className="h-auto w-[140px]"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#18191f] transition-colors hover:text-[#4caf50]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={actions.login.href}
            className="px-4 py-2 text-sm font-medium text-[#4caf50]"
          >
            {actions.login.label}
          </a>

          <a
            href={actions.signup.href}
            className="rounded-md bg-[#4caf50] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#43a047]"
          >
            {actions.signup.label}
          </a>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md bg-[#4caf50]">
            <span className="sr-only">Open menu</span>

            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
            </span>
          </summary>

          <div className="absolute right-0 top-12 z-50 w-64 rounded-lg bg-white p-5 shadow-lg">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-[#18191f] hover:bg-[#f5f7fa]"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 border-t border-gray-100 pt-3">
                <a
                  href={actions.login.href}
                  className="block px-3 py-2 text-sm text-[#4caf50]"
                >
                  {actions.login.label}
                </a>

                <a
                  href={actions.signup.href}
                  className="mt-1 block rounded-md bg-[#4caf50] px-4 py-2.5 text-center text-sm text-white"
                >
                  {actions.signup.label}
                </a>
              </div>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
