import * as React from 'react';
import { View, Text , Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import PlayScreen from './src/screens/PlayScreen';
import Colors from './src/constants/Colors';
import AboutDeveloper from './src/screens/AboutDeveloper';
import Spacer from './src/components/Spacer';


const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style = {{
        height : HEIGHT * 0.2,
        width : WIDTH * 0.5,
        borderWidth : 2,
        alignSelf : "center",
        justifyContent : "flex-end",
        alignItems : "center",
      }}> 
        <Text style = {{
          fontSize : 20,
          fontWeight : "bold",
          color : Colors.text
        }}>Water Eject Tool</Text>
      </View>
      <Spacer vertical = {HEIGHT * 0.07}/>
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
      <Drawer.Screen name="AboutDeveloper" component={AboutDeveloper} options = {{
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