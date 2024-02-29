import Image from "next/image";

/**
 * @see https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page
 */
export default function Custom404() {
  return (
    <Image
      alt="404"
      className="mx-auto"
      height={260}
      priority
      src="/illustration_404.png"
      sizes="100%"
      width={356}
    />
  );
}
