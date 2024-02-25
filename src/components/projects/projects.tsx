import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { projects } from "./data";

export const Projects: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  const t = useTranslate();
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2", className)} {...props}>
      {projects.map((item) => (
        <li key={item.name}>
          <Link
            className="flex flex-col gap-3.5 rounded-md border border-zinc-900 px-3 py-2.5 md:flex-row md:items-center dark:border-white"
            href={item.href}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <span className="w-fit rounded-full border border-dashed border-zinc-900 px-3 py-2 text-2xl dark:border-white">
              {item.emoji}
            </span>
            <span className="flex flex-col">
              <span className="font-medium">
                {capitalizeFirstLetter(item.name)}
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                {capitalizeFirstLetter(t(item.description))}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
