import { useContext, useEffect } from "react";
import "./HomePage.css";
import { DataContext } from "../../Context/DataContext";
import { filters } from "./constants";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { DisplayContext } from "../../Context/DisplayContext";
import { CreateRecipeModal } from "../../Components/CreateRecipeModal/CreateRecipeModal";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useFilterDataHook } from "../../Hook/FilterDataHook";

export function HomePage() {
  const { state, dispatch } = useContext(DataContext);
  const { setIsOpenModal, setRecipe } = useContext(DisplayContext);
  const filteredRecipes = useFilterDataHook();
  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_SEARCH_BY,
      payload: {
        searchBy: "Name",
      },
    });
    dispatch({
      type: ActionTypes.SET_SEARCH_TEXT,
      payload: {
        searchText: "",
      },
    });
  }, []);
  return (
    <div className="HomePageContainer">
      <div className="SearchBoxContainer">
        <input
          placeholder="search recipe"
          value={state.searchText}
          onChange={(e) => {
            dispatch({
              type: ActionTypes.SET_SEARCH_TEXT,
              payload: {
                searchText: e.target.value,
              },
            });
          }}
        />
        <div className="SearchByFilters">
          <h2>Filters : </h2>
          <div className="SearchFiltersChoice">
            {filters.map((filter) => {
              return (
                <div key={filter}>
                  <input
                    type="radio"
                    id={filter}
                    name="searchBy"
                    className="Filter"
                    defaultChecked={filter === state.searchBy}
                    onClick={() => {
                      dispatch({
                        type: ActionTypes.SET_SEARCH_BY,
                        payload: {
                          searchBy: filter,
                        },
                      });
                    }}
                  />
                  <label htmlFor={filter}>{filter}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ul className="RecipeListContainer">
        {filteredRecipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          );
        })}
        <div className="CreateRecipe">
          <AiOutlinePlusCircle
            className="CreateRecipeIcon"
            onClick={() => {
              setRecipe(() => null);
              setIsOpenModal(() => true);
            }}
          />
        </div>
      </ul>
      <CreateRecipeModal />
    </div>
  );
}
