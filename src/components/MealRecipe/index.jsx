import MealRecipeItem from "../MealRecipeItem";

const MealRecipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      {recipe.map((meal) => (
        <MealRecipeItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

export default MealRecipe;
