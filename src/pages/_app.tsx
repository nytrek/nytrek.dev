import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Public_Sans } from "next/font/google";
import { useEffect } from "react";

const Layout = dynamic(
  () => import("@/components/layout").then((mod) => mod.Layout),
  {
    ssr: false,
  },
);

const public_sans = Public_Sans({ subsets: ["latin"] });

/**
 * @see https://stackoverflow.com/questions/64452685/how-to-convert-unicode-character-to-svg-and-then-a-favicon
 */
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.head.appendChild(
      Object.assign(document.createElement("link"), {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌱</text></svg>",
      }),
    );
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <style jsx global>{`
        html {
          font-family: ${public_sans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
