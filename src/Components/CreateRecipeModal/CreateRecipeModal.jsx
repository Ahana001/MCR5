import { useContext } from "react";
import "./CreateRecipeModal.css";
import { DisplayContext } from "../../Context/DisplayContext";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

export function CreateRecipeModal() {
  const { isOpenModal, setIsOpenModal, recipe, setRecipe } =
    useContext(DisplayContext);

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
                Enter Ingredients Steps Separated By comma (,)
              </label>
              <textarea
                id="RecipeIngredients"
                type="text"
                value={recipe?.Ingredients?.join(",")}
                onChange={(e) => {
                  setRecipe(() => ({
                    ...recipe,
                    Ingredients: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="RecipeInstructionsContainer">
              <label htmlFor="RecipeInstructions">
                {" "}
                Enter Instructions Steps Separated By comma (,)
              </label>
              <textarea
                id="RecipeInstructions"
                type="text"
                value={recipe?.instructions}
                onChange={(e) => {
                  setRecipe(() => ({
                    ...recipe,
                    instructions: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
