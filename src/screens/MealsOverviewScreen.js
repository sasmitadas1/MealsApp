import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const cardId = route.params.categoryId;

  const displaysdMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cardId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={syles.container}>
      <FlatList
        data={displaysdMeals}
        key={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const syles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
