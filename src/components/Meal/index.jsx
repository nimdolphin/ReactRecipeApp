import { Link } from "react-router-dom";

const Meal = (props) => {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>

      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn #1b5e20 green darken-4">
          Watch recipe
        </Link>
      </div>
    </div>
  );
};
export default Meal;
