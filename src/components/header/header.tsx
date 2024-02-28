import { directionContext } from "@/context/direction";
import useTranslate, { type Locale } from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { cn } from "@/utils/cn";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { tabs } from "./data";
import directionary from "../../dictionary.json";

export const Header: React.FC<
  React.HTMLAttributes<HTMLElement> & { l?: Locale }
> = ({ className, l, ...props }) => {
  const t = useTranslate(l);
  const { push, route, query, locale } = useRouter();
  const { theme, setTheme, systemTheme } = useTheme();
  const { setDirection } = useContext(directionContext);
  const currentTab = useMemo(() => {
    return tabs.find((tab) => tab.href === route);
  }, [route]);
  const handleDirection = (href: string) => {
    push(href);
    setDirection(
      (tabs.find((item) => item.href === route)?.id as number) <
        (tabs.find((item) => item.href === href)?.id as number)
        ? "left"
        : "right",
    );
  };
  return (
    <header
      className={cn("flex items-center justify-between", className)}
      data-testid="header"
      {...props}
    >
      <div className="sm:hidden">
        <label className="sr-only" htmlFor="tabs">
          Select a tab
        </label>
        <select
          className="block w-full rounded-md border-zinc-300 text-zinc-900 focus:border-zinc-500 focus:ring-zinc-500"
          id="tabs"
          name="tabs"
          onChange={(e) => handleDirection(e.target.value)}
          value={currentTab?.href}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.href}>
              {tab.emoji}
              &nbsp;&nbsp;
              {capitalizeFirstLetter(t(tab.name))}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden py-4 sm:block">
        <nav aria-label="Tabs" className="flex gap-x-4">
          {tabs.map((tab) => (
            <button
              className="relative flex items-center gap-x-1.5 rounded-md border border-zinc-900 px-3 py-2.5 text-sm font-medium dark:border-white"
              key={tab.name}
              onClick={() => handleDirection(tab.href)}
            >
              {tab.href === route && (
                <motion.span
                  className="absolute inset-0 z-10 rounded-md bg-white mix-blend-difference"
                  layoutId="tab"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
              <span>{tab.emoji}</span>
              {capitalizeFirstLetter(t(tab.name))}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-x-1.5">
        {locale === "en-US" && (
          <Link
            className="hidden items-center gap-x-1.5 rounded-md border border-zinc-900 px-3 py-2 font-medium sm:flex dark:border-white"
            href={{
              href: route,
              query: query.slug
                ? {
                    slug: directionary["sv-SE"][
                      query.slug as keyof (typeof directionary)["sv-SE"]
                    ],
                  }
                : query,
            }}
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
            className="hidden items-center gap-x-1.5 rounded-md border border-zinc-900 px-3 py-2 font-medium sm:flex dark:border-white"
            href={{
              href: route,
              query: query.slug
                ? {
                    slug: directionary["en-US"][
                      query.slug as keyof (typeof directionary)["en-US"]
                    ],
                  }
                : query,
            }}
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
  );
};
