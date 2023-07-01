import "./RecipeCard.css";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
import { DisplayContext } from "../../Context/DisplayContext";

export function RecipeCard({ recipe }) {
  const { dispatch } = useContext(DataContext);
  const { setIsOpenModal, setRecipe } = useContext(DisplayContext);

  return (
    <div className="RecipeCardContainer">
      <img src={recipe.image} alt={recipe.title} />
      <div className="RecipeName">{recipe.title}</div>
      <div className="RecipeContent">
        <div className="Cuisions">
          <span>Cuisine Types:</span>
          <span>{recipe.cuisine}</span>
        </div>
        <div className="Instructions">
          <span>Instructions:</span>
          <Link to={`/recipe/${recipe.id}`}>See Recipe</Link>
        </div>
        <div className="Ingredients">
          <span>Ingredients:</span>
          <Link to={`/recipe/${recipe.id}`}>See Recipe</Link>
        </div>
      </div>
      <div className="ActionButtons">
        <div
          className="DeleteButton"
          onClick={() => {
            dispatch({
              type: ActionTypes.DELETE_RECIPE,
              payload: { recipe: recipe },
            });
          }}
        >
          <AiFillDelete />
        </div>
        <div className="EditButton">
          <AiFillEdit
            onClick={() => {
              setRecipe(() => recipe);
              setIsOpenModal(() => true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
