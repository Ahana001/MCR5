import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);
  let filteredRecipes = state.recipes;

  if (state.searchBy !== "" && state.searchText !== "") {
    const searchBySmallCase = state.searchBy.toLowerCase();
    if (searchBySmallCase === "ingredients") {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.ingredients
          .join(",")
          .toLowerCase()
          .includes(state.searchText.toLowerCase())
      );
    } else if (searchBySmallCase === "name") {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchText.toLowerCase())
      );
    } else {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(state.searchText.toLowerCase())
      );
    }
  }

  return filteredRecipes;
};
