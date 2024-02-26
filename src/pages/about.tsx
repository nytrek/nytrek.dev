import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";

/**
 * @description The contents of this page has been generated using ChatGPT
 */

// Function to fetch MDX content
export const getStaticProps = (async (context) => {
  const { locale } = context;
  const fullPath = path.join(
    process.cwd(),
    "src",
    "content",
    locale ?? "en-US",
    "about.mdx",
  );
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}) as GetStaticProps;

// Component to render the blog post
export default function BlogPost({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Kenny Tran - {capitalizeFirstLetter(t("about me"))}</title>
      </Head>
      <article className="prose xl:prose-xl dark:prose-invert">
        <h1>{frontMatter.title}</h1>
        <MDXRemote
          {...source}
          components={{
            a: ({ children, ...props }) => (
              <a rel="nofollow noopener noreferrer" target="_blank" {...props}>
                {children}
              </a>
            ),
          }}
        />
      </article>
    </>
  );
}
