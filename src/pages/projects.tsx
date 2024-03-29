import { Projects } from "@/components/projects";
import useTranslate from "@/hooks/useTranslate";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import Head from "next/head";

export default function Page() {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Kenny Tran - {capitalizeFirstLetter(t("projects"))}</title>
      </Head>
      <main className="grid gap-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {capitalizeFirstLetter(t("projects"))}
        </h1>
        <Projects />
      </main>
    </>
  );
}
