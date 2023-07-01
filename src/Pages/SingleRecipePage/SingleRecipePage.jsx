import "./SingleRecipePage.css";

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

export function SingleRecipePage() {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const recipe = state?.recipes?.find((recipe) => recipe.id === id);
  if (!recipe) {
    return null;
  }
  return (
    <div className="SingleRecipeContainer">
      <div className="RecipeHeader">{recipe.title}</div>
      <div className="RecipeContentContainer">
        <img src={recipe.image} alt={recipe.title} />
        <div className="RecipeContentWrapper">
          <div className="RecipeCuisine">
            <div>Cuisine:</div>
            <div>{recipe.cuisine}</div>
          </div>
          <div className="RecipeIngredients">
            <div>Ingredients:</div>
            <div>{recipe.ingredients.join(",")}</div>
          </div>
          <div className="RecipeInstructions">
            <div>Instructions:</div>
            <ol>
              {recipe.instructions.map((instruction) => {
                return <li key={instruction}>{instruction}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
