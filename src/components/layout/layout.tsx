import { directionContext } from "@/context/direction";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { variants } from "./variants";

/**
 * @see https://buildui.com/recipes/animated-tabs
 * @see https://github.com/pacocoursey/next-themes/issues/245
 * @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#usetheme
 */
export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { route } = useRouter();
  const { direction } = useContext(directionContext);
  return (
    <div className="py-24 sm:py-32">
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
