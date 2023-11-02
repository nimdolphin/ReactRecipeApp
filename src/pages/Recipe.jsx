import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";
import MealRecipe from "../components/MealRecipe";

const Recipe = () => {
  const { mealId } = useParams();
  const [recipe, setRecipe] = useState([]);

  const goBack = useNavigate();

  const handleClick = (back) => () => {
    goBack(back);
  };

  useEffect(() => {
    getMealById(mealId).then((data) => {
      setRecipe(data.meals);
    });
  }, [mealId]);

  return (
    <>
      <button className="btn #1b5e20 green darken-4" onClick={handleClick(-1)}>
        Go Back
      </button>
      {!recipe.length ? <Preloader /> : <MealRecipe recipe={recipe} />}
    </>
  );
};

export default Recipe;
