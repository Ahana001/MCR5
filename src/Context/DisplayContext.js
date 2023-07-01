import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [recipe, setRecipe] = useState(null);

  return (
    <DisplayContext.Provider
      value={{ isOpenModal, setIsOpenModal, setRecipe, recipe }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
