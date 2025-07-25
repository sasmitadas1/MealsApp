import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const cardId = route.params.categoryId;

  const displaysdMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cardId) >= 0;
  });

  return <MealsList items={displaysdMeals} />;
}

export default MealsOverviewScreen;
