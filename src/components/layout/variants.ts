import type { DirectionContext } from "@/context/direction";
import type { Variants } from "framer-motion";

export const variants = (direction: DirectionContext["direction"]) =>
  ({
    initial: {
      x: direction === "right" ? -20 : 20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      x: direction === "left" ? -20 : 20,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
      },
    },
  }) satisfies Variants;
