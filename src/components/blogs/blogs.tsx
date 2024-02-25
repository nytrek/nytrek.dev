import { cn } from "@/utils/cn";
import Link from "next/link";
import { blogs } from "./data";

export const Blogs: React.FC<
  React.HTMLAttributes<HTMLUListElement> & { year: number }
> = ({ className, year, ...props }) => {
  return (
    <ul
      className={cn(
        "grid gap-y-1 divide-y divide-dashed divide-zinc-900 dark:divide-white",
        className,
      )}
      data-testid="blogs"
      {...props}
    >
      {blogs
        .filter((blog) => new Date(blog.date).getFullYear() === year)
        .map((item, index) => (
          <li key={item.name}>
            <Link
              className={cn(
                index && "pt-3",
                "flex items-center justify-between text-zinc-600 dark:text-zinc-300",
              )}
              href={item.slug}
            >
              <span>{item.name}</span>
              <span className="hidden sm:inline">{item.date}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};
