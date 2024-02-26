import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { cn } from "@/utils/cn";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";

/**
 * @description The contents of this page has been generated using ChatGPT
 */

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  year: number;
}

export const getStaticProps = (async (context) => {
  const { locale } = context;

  let blogPosts: BlogPost[] = [];

  const postsDirectory = path.join(
    process.cwd(),
    "src",
    "content",
    locale ?? "en-US",
  );
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((item) => item !== "about.mdx")
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return {
        slug,
        title: data.title,
        date: data.date,
        year: new Date(data.date).getFullYear(),
      };
    });
  blogPosts = blogPosts.concat(posts);

  return {
    props: {
      blogPosts,
    },
  };
}) as GetStaticProps;

export default function Page({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslate();
  const postsByYear: Record<string, BlogPost[]> = blogPosts.reduce(
    (acc: Record<string, BlogPost[]>, post: BlogPost) => {
      if (!acc[post.year]) {
        acc[post.year] = [];
      }
      acc[post.year].push(post);
      return acc;
    },
    {},
  );
  return (
    <>
      <Head>
        <title>Kenny Tran - {capitalizeFirstLetter(t("blog"))}</title>
      </Head>
      <main className="grid gap-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {capitalizeFirstLetter(t("blog"))}
        </h1>
        <p className="text-lg leading-8">
          {capitalizeFirstLetter(
            t(
              "welcome to my blog page! Here, you'll find a collection of my thoughts, experiences, and insights on all things tech, development, and beyond.",
            ),
          )}
        </p>
        {Object.entries(postsByYear).map(([year, posts]) => (
          <div className="grid gap-y-6" key={year}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              {year}
            </h2>
            <ul>
              {posts.map((post, index) => (
                <li key={post.slug}>
                  <Link
                    as={`/blog/${post.slug}`}
                    className={cn(
                      index && "pt-3",
                      "flex items-center justify-between text-zinc-600 dark:text-zinc-300",
                    )}
                    href="/blog/[slug]"
                  >
                    <span>{post.title}</span>
                    <span className="hidden sm:inline">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}
