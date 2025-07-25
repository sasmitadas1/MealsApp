import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { useContext } from "react";
// import { FavoritesContext } from "../../store/context/Favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoriteScreen() {
  // const favoritesMealCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state)=>state.favoriteMeal.ids)

  const favoriteMeals = MEALS.filter((meal) =>
    // favoritesMealCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)

  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet .</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}
export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color:'white'
  },
});
