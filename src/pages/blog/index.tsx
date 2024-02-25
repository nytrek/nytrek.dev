import { Blogs } from "@/components/blogs";
import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Head from "next/head";

export default function Page() {
  const t = useTranslate();
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
          Dive into a lush oasis of thoughts and discoveries where I cultivate
          ideas on tech, creativity, and everything in between.
        </p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">2024</h2>
        <Blogs year={2024} />
      </main>
    </>
  );
}
