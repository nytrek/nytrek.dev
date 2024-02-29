import Image from "next/image";

/**
 * @see https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page
 */
export default function Custom500() {
  return (
    <Image
      alt="500"
      className="mx-auto"
      height={260}
      priority
      src="/illustration_500.png"
      sizes="100%"
      width={348}
    />
  );
}
