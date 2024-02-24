import "@/styles/globals.css";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Public_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect, useMemo } from "react";

const public_sans = Public_Sans({ subsets: ["latin"] });

const tabs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
] as const;

/**
 * @see https://buildui.com/recipes/animated-tabs
 * @see https://stackoverflow.com/questions/64452685/how-to-convert-unicode-character-to-svg-and-then-a-favicon
 */
export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    document.head.appendChild(
      Object.assign(document.createElement("link"), {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>",
      }),
    );
  }, []);
  const tab = useMemo(() => {
    return tabs.find((tab) => tab.href === router.route)?.name;
  }, [router.route]);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${public_sans.style.fontFamily};
        }
      `}</style>
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-6 px-6 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-zinc-300 text-zinc-900 focus:border-zinc-500 focus:ring-zinc-500"
                onChange={(e) => router.push(e.target.value)}
                defaultValue={tab}
              >
                {tabs.map((tab) => (
                  <option key={tab.name} value={tab.href}>
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden py-4 sm:block">
              <nav className="flex space-x-4" aria-label="Tabs">
                {tabs.map((tab) => (
                  <Link
                    key={tab.name}
                    className="relative rounded-md border border-white px-3 py-2 text-sm font-medium"
                    href={tab.href}
                    aria-current={
                      tab.href === router.route ? "page" : undefined
                    }
                  >
                    {tab.href === router.route && (
                      <motion.span
                        layoutId="tab"
                        className="absolute inset-0 z-10 rounded-md bg-white mix-blend-difference"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
            <button
              className="rounded-md border border-white px-3 py-2 text-sm font-medium"
              type="button"
            >
              Dark
            </button>
          </header>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
