import useTranslate from "@/hooks/useTranslate";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { tabs } from "./data";

/**
 * @see https://buildui.com/recipes/animated-tabs
 * @see https://github.com/pacocoursey/next-themes/issues/245
 * @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#usetheme
 */
export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const t = useTranslate();
  const { push, route, locale } = useRouter();
  const { theme, setTheme, systemTheme } = useTheme();
  const tab = useMemo(() => {
    return tabs.find((tab) => tab.href === route)?.href;
  }, [route]);
  return (
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
              onChange={(e) => push(e.target.value)}
              value={tab}
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.href}>
                  {t(tab.name).charAt(0).toUpperCase() + t(tab.name).slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden py-4 sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  className="relative rounded-md border border-zinc-900 px-3 py-2.5 text-sm font-medium dark:border-white"
                  href={tab.href}
                  aria-current={tab.href === route ? "page" : undefined}
                >
                  {tab.href === route && (
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
                  {t(tab.name).charAt(0).toUpperCase() + t(tab.name).slice(1)}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-x-1.5">
            {locale === "en-US" && (
              <Link
                className="flex items-center gap-x-1.5 rounded-md border border-zinc-900 px-3 py-2 font-medium dark:border-white"
                href={route}
                locale="sv-SE"
              >
                EN
                <img
                  alt="locale"
                  className="h-3.5 w-6"
                  src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/gb.png"
                />
              </Link>
            )}
            {locale === "sv-SE" && (
              <Link
                className="flex items-center gap-x-1.5 rounded-md border border-zinc-900 px-3 py-2 font-medium dark:border-white"
                href={route}
                locale="en-US"
              >
                SE
                <img
                  alt="locale"
                  className="h-3.5 w-[1.6rem]"
                  src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/se.png"
                />
              </Link>
            )}
            <button
              className="rounded-md border border-zinc-900 px-3 py-2 font-medium dark:border-white"
              onClick={() =>
                theme === "system"
                  ? systemTheme === "dark"
                    ? setTheme("light")
                    : setTheme("dark")
                  : theme === "dark"
                    ? setTheme("light")
                    : setTheme("dark")
              }
              type="button"
            >
              {theme === "system" ? (
                systemTheme === "dark" ? (
                  <SunIcon className="w-6" />
                ) : (
                  <MoonIcon className="w-6" />
                )
              ) : theme === "dark" ? (
                <SunIcon className="w-6" />
              ) : (
                <MoonIcon className="w-6" />
              )}
            </button>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};
