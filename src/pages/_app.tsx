import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${public_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
