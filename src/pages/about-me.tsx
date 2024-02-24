import Head from "next/head";
import useTranslate from "@/hooks/useTranslate";

export default function Page() {
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>
          Kenny Tran -{" "}
          {t("about me").charAt(0).toUpperCase() + t("about me").slice(1)}
        </title>
      </Head>
      <main className="grid gap-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {t("about me").charAt(0).toUpperCase() + t("about me").slice(1)}
        </h1>
      </main>
    </>
  );
}
