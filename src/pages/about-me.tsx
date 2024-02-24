import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Head from "next/head";
import Link from "next/link";

export default function Page() {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Kenny Tran - {capitalizeFirstLetter(t("about me"))}</title>
      </Head>
      <main className="grid gap-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hey there! 👋
        </h1>
        <div className="grid gap-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          <p>
            I&apos;m Kenny Tran, a seasoned developer with a passion for
            crafting innovative and scalable solutions. With over three years of
            experience in the dynamic realm of full-stack development, I thrive
            on the excitement of building something new and tackling fresh
            challenges head-on.
          </p>
          <p>
            In my professional journey, I&apos;ve collaborated closely with
            diverse teams, from product owners to graphic designers, translating
            intricate product strategies into tangible, sustainable solutions.
            Whether it&apos;s developing modern websites for international
            clients or architecting robust SaaS platforms like{" "}
            <Link
              className="underline hover:no-underline"
              href="https://www.bostadsval.se/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Bostadsval
            </Link>{" "}
            for real estate advertisements, I&apos;ve consistently strived for
            excellence in every project I undertake.
          </p>
          <p>
            Outside of the tech realm, I&apos;m fluent in both English and
            Swedish, and I cherish moments spent connecting with others on a
            personal level. Whether it&apos;s mentoring junior colleagues,
            coordinating integrations between programs, or simply engaging in
            meaningful conversations, I believe in fostering strong
            relationships built on trust, respect, and collaboration.
          </p>
          <p>
            I&apos;m excited about the opportunity to connect with like-minded
            individuals who share my enthusiasm for innovation and growth,
            whether it&apos;s in the professional arena or beyond. If
            you&apos;re interested in exploring potential collaborations,
            discussing tech trends, or simply grabbing a coffee and exchanging
            ideas, feel free to reach out! I&apos;m always up for a stimulating
            conversation or an exciting coding challenge.
          </p>
        </div>
      </main>
    </>
  );
}
