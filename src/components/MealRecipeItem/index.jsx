const MealRecipe = (props) => {
  const {
    strMeal,
    strCategory,
    strArea,
    idMeal,
    strYoutube,
    strMealThumb,
    strInstructions,
  } = props;

  return (
    <div className="card">
      <div className="card-image recipe">
        <img src={strMealThumb} alt={strMeal} />
      </div>

      <div className="card-content">
        <span className="card-title">{strMeal}</span>
        <span className="card-title">{strCategory}</span>
        {strArea ? <span className="card-title">{strArea}</span> : null}

        <p>{strInstructions}</p>
      </div>
      <div className="card-action">
        {strYoutube ? (
          <div className="row">
            <h5>Video Recipe</h5>
            <iframe
              title={idMeal}
              src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default MealRecipe;
