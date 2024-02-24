import { cn } from "@/utils/cn";
import Link from "next/link";
import { links } from "./data";

export const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <footer className={cn("grid gap-y-10", className)} {...props}>
      <nav className="-mb-6 columns-2" aria-label="Footer">
        {links.main.map((item) => (
          <div key={item.name} className="group w-fit pb-6">
            <Link href={item.href} className="text-sm leading-6">
              {item.name}
            </Link>
            <hr className="w-0 border-zinc-900 transition-all duration-300 group-hover:w-full dark:border-white" />
          </div>
        ))}
      </nav>
      <div className="flex gap-x-10">
        {links.social.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <p className="text-xs leading-5">
        &copy; {new Date().getFullYear()} nytrek.dev. All rights reserved.
      </p>
    </footer>
  );
};
