import React,{useState} from 'react';
import { View, Text , Dimensions, Appearance} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import { Provider as ThemeProvider } from './src/contexts/ThemeContext';
import PlayScreen from './src/screens/PlayScreen';
import Colors from './src/constants/Colors';
import AboutDeveloper from './src/screens/AboutDeveloper';
import Spacer from './src/components/Spacer';
import useCachedResources from './src/hooks/useCachedResources';
import ToggleSwitch from './src/components/ToggleSwitch';
import DrawerContent from './src/components/DrawerContent';


const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    
    <DrawerContent props = {props}/>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent = {CustomDrawerContent}
    drawerPosition = {'right'}
    drawerStyle={{
	    width: WIDTH * 0.6,
	  }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="AboutDeveloper" component={AboutDeveloper} options = {{
        title : "About the Developer"
      }}/>
    </Drawer.Navigator>
  );
}

function App() {



  const [loadingComplete] = useCachedResources();

  if (!loadingComplete) {
    return null;
  }



  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="Play" component={PlayScreen} />
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


/* export default App */
