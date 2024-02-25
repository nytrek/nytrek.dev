import useTranslate, { type Locale } from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { links } from "./data";

export const Footer: React.FC<
  React.HTMLAttributes<HTMLElement> & { l?: Locale }
> = ({ className, l, ...props }) => {
  const t = useTranslate(l);
  return (
    <footer
      className={cn("grid gap-y-10", className)}
      data-testid="footer"
      {...props}
    >
      <nav aria-label="Footer" className="-mb-6 grid grid-cols-2">
        {links.main.map((item) => (
          <div className="group w-fit pb-6" key={item.name}>
            <Link
              className="text-sm leading-6"
              href={item.href}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {capitalizeFirstLetter(t(item.name))}
            </Link>
            <hr className="w-0 border-zinc-900 transition-all duration-300 group-hover:w-full dark:border-white" />
          </div>
        ))}
      </nav>
      <div className="flex flex-wrap gap-10">
        {links.social.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon aria-hidden="true" className="w-6" />
          </Link>
        ))}
      </div>
      <p className="text-xs leading-5">
        &copy; {new Date().getFullYear()} nytrek.dev.{" "}
        {capitalizeFirstLetter(t("all rights reserved."))}
      </p>
    </footer>
  );
};
