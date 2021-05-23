import React,{useState} from 'react';
import { View, Text , Dimensions, Appearance} from 'react-native';
import { DrawerContentScrollView,DrawerItemList, } from '@react-navigation/drawer';
import Spacer from './Spacer';
import ToggleSwitch from './ToggleSwitch';
import Colors from '../constants/Colors';
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const DrawerContent = ({props})=>{

    const Color = Colors();
    return<DrawerContentScrollView {...props} style = {{
        backgroundColor : Color.accent
    }} >
    <View style = {{
      height : HEIGHT * 0.2,
      width : WIDTH * 0.53,
      borderBottomWidth : 2,
      borderColor : Color.text+"AA",
      alignSelf : "center",
      justifyContent : "center",
      alignItems : "center",
    }}> 
      <Text style = {{
        fontSize : 20,
        fontWeight : "bold",
        color : Color.text
      }}>Water Eject Tool</Text>
    </View>
    <Spacer vertical = {HEIGHT * 0.07}/>
    <DrawerItemList {...props} labelStyle = {{
        color : Color.text,
        fontWeight : "700"
    }}/>
    <Spacer vertical = {HEIGHT * 0.07}/>
    <ToggleSwitch/>
  </DrawerContentScrollView>
}


export default DrawerContent;