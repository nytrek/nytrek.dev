import { directionContext } from "@/context/direction";
import useSwipe from "@/hooks/useSwipe";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { tabs } from "../header/data";
import { variants } from "./variants";

/**
 * @see https://buildui.com/recipes/animated-tabs
 * @see https://github.com/pacocoursey/next-themes/issues/245
 * @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#usetheme
 */
export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { push, route } = useRouter();
  const { direction, setDirection } = useContext(directionContext);
  const onSwipe = (swipe: "left" | "right") => {
    if (swipe === "left") {
      push(tabs[tabs.findIndex((item) => item.href === route) + 1].href);
    } else {
      push(tabs[tabs.findIndex((item) => item.href === route) - 1].href);
    }
    setDirection(swipe);
  };
  const swipeHandlers = useSwipe({
    onSwipedLeft: () =>
      tabs.findIndex((item) => item.href === route) === tabs.length - 1
        ? null
        : onSwipe("left"),
    onSwipedRight: () =>
      !tabs.findIndex((item) => item.href === route) ? null : onSwipe("right"),
  });
  return (
    <div className="py-24 sm:py-32" {...swipeHandlers}>
      <div className="mx-auto grid max-w-4xl gap-y-6 px-6 lg:px-8">
        <Header />
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            animate="animate"
            exit="exit"
            initial="initial"
            key={route}
            variants={variants(direction)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};
