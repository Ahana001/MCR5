import { createContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../Reducer/DataReducer";
export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  // useEffect(() => {
  //   dispatch({
  //     type: ActionTypes.INITIAL_SET_SNACKS,
  //     payload: { snacks: snacks },
  //   });
  // }, []);

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
