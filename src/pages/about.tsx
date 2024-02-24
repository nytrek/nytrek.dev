import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>Kenny Tran - About</title>
      </Head>
      <main className="grid gap-y-4">
        <span>
          Welcome to my{" "}
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
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          I&apos;m Kenny -
        </h2>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          an experienced developer with a passion for creating scalable and
          maintainable solutions.
        </p>
      </main>
    </>
  );
}
