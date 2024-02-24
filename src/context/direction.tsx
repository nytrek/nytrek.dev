import { createContext, useState } from "react";

export interface DirectionContext {
  direction: "left" | "right";
  setDirection: React.Dispatch<React.SetStateAction<"left" | "right">>;
}

export const directionContext = createContext({} as DirectionContext);

/**
 * @see https://github.com/typehero/typehero/blob/main/apps/web/src/components/search/searchbox.context.tsx
 */
export const DirectionProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [direction, setDirection] =
    useState<DirectionContext["direction"]>("left");
  return (
    <directionContext.Provider
      value={{
        direction,
        setDirection,
      }}
    >
      {children}
    </directionContext.Provider>
  );
};
