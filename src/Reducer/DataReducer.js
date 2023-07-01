export const ActionTypes = {
  INITIAL_SET_RECIPES: "INITIAL_SET_RECIPES",
  SET_SEARCH_BY: "SET_SEARCH_BY",
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
  DELETE_RECIPE: "DELETE_RECIPE",
  ADD_RECIPE: "ADD_RECIPE",
  EDIT_RECIPE: "EDIT_RECIPE",
};

export const initialState = {
  searchBy: "Name",
  searchText: "",
  recipes: [],
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_RECIPES: {
      result = {
        ...state,
        recipes: action.payload.recipes,
      };
      break;
    }
    case ActionTypes.SET_SEARCH_BY: {
      result = {
        ...state,
        searchBy: action.payload.searchBy,
      };
      break;
    }
    case ActionTypes.SET_SEARCH_TEXT: {
      result = {
        ...state,
        searchText: action.payload.searchText,
      };
      break;
    }
    case ActionTypes.DELETE_RECIPE: {
      const recipeId = action.payload.recipe.id;
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      result = {
        ...state,
        recipes: updatedRecipes,
      };
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      break;
    }
    case ActionTypes.ADD_RECIPE: {
      const recipe = action.payload.recipe;
      const totalRecipes = state.recipes.length;
      result = {
        ...state,
        recipes: [...state.recipes, { ...recipe, id: "RCP" + totalRecipes }],
      };
      localStorage.setItem(
        "recipes",
        JSON.stringify([
          ...state.recipes,
          { ...recipe, id: "RCP" + totalRecipes + 1 },
        ])
      );
      break;
    }
    case ActionTypes.EDIT_RECIPE: {
      console.log(action.payload.recipe);
      const updatedRecipe = action.payload.recipe;
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      console.log(updatedRecipes);
      result = {
        ...state,
        recipes: updatedRecipes,
      };
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      break;
    }
  }
  return result;
}
