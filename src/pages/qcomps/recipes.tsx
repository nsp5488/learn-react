export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: new Set(["tomatoes", "cucumber", "onion", "olives", "feta"]),
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: new Set([
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ]),
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: new Set([
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ]),
  },
];
function IngredientList({ ingredients }: { ingredients: Array<string> }) {
  let cleanedList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
  return <ul>{cleanedList}</ul>;
}

function CleanRecipes() {
  let cleanedRecipes = recipes.map((recipe) => {
    return (
      <div>
        <h2>{recipe.name}</h2>
        <IngredientList ingredients={Array.from(recipe.ingredients)} />
      </div>
    );
  });
  return <div>{cleanedRecipes}</div>;
}
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <CleanRecipes />
    </div>
  );
}
