import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Head from "next/head";
import Link from "next/link";

export default function Page() {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Kenny Tran - Home</title>
      </Head>
      <main className="grid gap-y-4">
        <span>
          {capitalizeFirstLetter(t("welcome to my"))}{" "}
          <Link
            className="underline hover:no-underline"
            href="https://maggieappleton.com/garden-history"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            digital garden.
          </Link>{" "}
          🌱
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {capitalizeFirstLetter(t("i'm"))} Kenny -
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {t(
            "an experienced developer with a passion for creating scalable and maintainable solutions.",
          )}
        </p>
      </main>
    </>
  );
}
