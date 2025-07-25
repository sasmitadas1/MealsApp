import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealDetailScreen from "./src/screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/Favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#ecb795ff",
          drawerItemStyle: {
            borderRadius: 2, // Makes active background square
            marginHorizontal: 0, // Removes side margins
            paddingHorizontal: 10, // Adds padding for text
          },
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#3f2f25", // Global background
      card: "#351401", // Header background
      text: "white", // Header text color
    },
  };
  return (
    // <FavoritesContextProvider>
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            // contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            options={{
              title: "All about the meal ",
            }}
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    {/* </FavoritesContextProvider> */}
    </Provider>
  );
}
