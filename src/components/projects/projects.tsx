import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { projects } from "./data";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const Projects: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  const t = useTranslate();
  return (
    <ul
      className={cn("grid gap-6 sm:grid-cols-2", className)}
      data-testid="projects"
      {...props}
    >
      {projects.map((item) => (
        <li key={item.name}>
          <Link
            className="relative flex flex-col gap-3.5 rounded-md border border-zinc-900 px-3 py-2.5 md:flex-row md:items-center dark:border-white"
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
            <ArrowUpRightIcon className="absolute right-4 top-4 w-6 sm:w-4" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
