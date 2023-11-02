import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  const goBack = useNavigate();

  const handleClick = (back) => () => {
    goBack(back);
  };

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="btn #1b5e20 green darken-4" onClick={handleClick(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
