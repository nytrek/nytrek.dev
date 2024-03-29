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
      sizes="100%"
      src="/illustration_500.png"
      width={348}
    />
  );
}
