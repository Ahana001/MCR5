import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { recipes } from "../Data/recipes";
export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    const localStorageRecipes = localStorage.getItem(
      "recipes",
      JSON.stringify(recipes)
    );
    if (!localStorageRecipes) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
      dispatch({
        type: ActionTypes.INITIAL_SET_RECIPES,
        payload: { recipes: recipes },
      });
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_RECIPES,
        payload: { recipes: JSON.parse(localStorageRecipes) },
      });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
