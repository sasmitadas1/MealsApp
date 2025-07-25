import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealDetailScreen from "./src/screens/MealDetailScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title:catId
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
