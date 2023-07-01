import { useContext } from "react";
import "./CreateRecipeModal.css";
import { DisplayContext } from "../../Context/DisplayContext";
import { RxCross1 } from "react-icons/rx";

import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function CreateRecipeModal() {
  const { isOpenModal, setIsOpenModal, recipe, setRecipe } =
    useContext(DisplayContext);
  const { dispatch } = useContext(DataContext);

  return (
    <div
      className="ModalPortal"
      style={{ display: isOpenModal ? "block" : "none" }}
    >
      <div className="ModalOverlay">
        <div className="ModalPortalContent">
          <div
            className="ModalPortalCloseButton"
            onClick={() => {
              setIsOpenModal(() => false);
            }}
          >
            <RxCross1 />
          </div>
          <div className="RecipeContentSetter">
            <div className="RecipeNameContainer">
              <label htmlFor="RecipeTitle"> Name</label>
              <input
                id="RecipeTitle"
                type="text"
                value={recipe?.title}
                onChange={(e) => {
                  setRecipe(() => ({ ...recipe, title: e.target.value }));
                }}
              />
            </div>
            <div className="RecipeImage">
              <div className="RecipeImageContainer">
                <label htmlFor="RecipeImage"> Image</label>
                <input
                  id="RecipeImage"
                  type="text"
                  value={recipe?.image}
                  onChange={(e) => {
                    setRecipe(() => ({ ...recipe, image: e.target.value }));
                  }}
                />
              </div>
              <img src={recipe?.image} alt="NoImage" />
            </div>
            <div className="RecipeCuisionContainer">
              <label htmlFor="RecipeCuision"> Cuision</label>
              <input
                id="RecipeCuision"
                type="text"
                value={recipe?.cuisine}
                onChange={(e) => {
                  setRecipe(() => ({ ...recipe, cuisine: e.target.value }));
                }}
              />
            </div>
            <div className="RecipeIngredientsContainer">
              <label htmlFor="RecipeIngredients">
                Enter Ingredients Steps Separated By New Line
              </label>
              <textarea
                id="RecipeIngredients"
                type="text"
                value={recipe?.ingredients?.join("\n")}
                onChange={(e) => {
                  const Ingredients = e.target.value.split("\n");
                  setRecipe(() => ({
                    ...recipe,
                    ingredients: Ingredients,
                  }));
                }}
              />
            </div>
            <div className="RecipeInstructionsContainer">
              <label htmlFor="RecipeInstructions">
                {" "}
                Enter Instructions Steps Separated By New Line
              </label>
              <textarea
                id="RecipeInstructions"
                type="text"
                value={recipe?.instructions?.join("\n")}
                onChange={(e) => {
                  const Instructions = e.target.value.split("\n");
                  setRecipe(() => ({
                    ...recipe,
                    instructions: Instructions,
                  }));
                }}
              />
            </div>
            <div
              className="SaveButton"
              onClick={() => {
                if (recipe?.id) {
                  dispatch({
                    type: ActionTypes.EDIT_RECIPE,
                    payload: { recipe: recipe },
                  });
                } else {
                  dispatch({
                    type: ActionTypes.ADD_RECIPE,
                    payload: { recipe: recipe },
                  });
                }
                setIsOpenModal(() => false);
                setRecipe(() => null);
              }}
            >
              save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
