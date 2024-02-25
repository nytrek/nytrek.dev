import { About } from "@/components/about";
import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Head from "next/head";

export default function Page() {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Kenny Tran - {capitalizeFirstLetter(t("about me"))}</title>
      </Head>
      <main className="grid gap-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {capitalizeFirstLetter(t("about me"))}
        </h1>
        <About />
      </main>
    </>
  );
}
