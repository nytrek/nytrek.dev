import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import remarkGfm from "remark-gfm";

// Function to fetch MDX content
export const getStaticProps = (async (context) => {
  const { locale, params } = context;
  const slug = params?.slug as string;
  const fullPath = path.join(
    process.cwd(),
    "src",
    "content",
    locale ?? "en-US",
    `${slug}.mdx`,
  );
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  /**
   * @see https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#apis
   */
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}) as GetStaticProps;

// Function to get paths for all blog posts
export const getStaticPaths = (async (context) => {
  const postsDirectories = fs.readdirSync(
    path.join(process.cwd(), "src", "content"),
  );

  let paths: { params: { slug: string }; locale: string }[] = [];
  for (const locale of postsDirectories) {
    const postsDirectory = path.join(process.cwd(), "src", "content", locale);
    const filenames = fs.readdirSync(postsDirectory);
    const localePaths = filenames
      .filter((item) => item !== "about.mdx")
      .map((filename) => ({
        params: {
          slug: filename.replace(/\.mdx$/, ""),
        },
        locale,
      }));
    paths = paths.concat(localePaths);
  }

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}) as GetStaticPaths;

// Component to render the blog post
export default function BlogPost({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Kenny Tran</title>
      </Head>
      <Link href="/blog">
        <ArrowLongLeftIcon className="w-8 sm:w-12" />
      </Link>
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
