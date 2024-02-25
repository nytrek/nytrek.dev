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
      </main>
    </>
  );
}
