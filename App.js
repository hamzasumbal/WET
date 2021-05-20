import * as React from 'react';
import { View, Text , Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import PlayScreen from './src/screens/PlayScreen';
import Colors from './src/constants/Colors';


const WIDTH = Dimensions.get('screen').width

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style = {{
        height : 200,
        width : WIDTH * 0.5,
        borderWidth : 2,
        alignSelf : "center",
        backgroundColor : "red"
      }}> 

      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent = {CustomDrawerContent}
    drawerPosition = {'right'}
    drawerStyle={{
	    width: WIDTH * 0.6,
      backgroundColor : Colors.accent
	  }}
    drawerContentOptions = {
      {
        labelStyle : {
          color : Colors.text,
          fontWeight: "700"
        },
      }
    }
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} options = {{
        title : "About the Developer"
      }}/>
    </Drawer.Navigator>
  );
}

function App() {
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

export default App;