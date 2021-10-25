import React from "react";
import { View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider as ThemeProvider } from "./src/contexts/ThemeContext";
import PlayScreen from "./src/screens/PlayScreen";
import AboutDeveloper from "./src/screens/AboutDeveloper";
import useCachedResources from "./src/hooks/useCachedResources";
import DrawerContent from "./src/components/DrawerContent";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return <DrawerContent props={props} />;
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      drawerPosition={"right"}
      drawerStyle={{
        width: WIDTH * 0.6,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="AboutDeveloper"
        component={AboutDeveloper}
        options={{
          title: "About the Developer",
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  const [loadingComplete] = useCachedResources();

  if (!loadingComplete) {
    return <View style={{ flex: 1, backgroundColor: "#007AFF" }} />;
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
