import { createContext, useContext } from "react";

export const StoreContext = createContext(null);

export const useStores = () => {
  const context = useContext(StoreContext);

  if (context === null) {
    throw new Error("");
  }

  return context;
};
