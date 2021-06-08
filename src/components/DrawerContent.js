import React, { useState } from 'react';
import { View, Text, Dimensions, Appearance, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import Spacer from './Spacer';
import ToggleSwitch from './ToggleSwitch';
import Colors from '../constants/Colors';
import APP from '../../app.json'
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const DrawerContent = ({ props }) => {

  const Color = Colors();
  return <DrawerContentScrollView {...props} style={{
    backgroundColor: Color.accent
  }} >

    <View style={{
      height: HEIGHT * 0.2,
      width: WIDTH * 0.53,
      borderBottomWidth: 2,
      borderColor: Color.text + "AA",
      alignSelf: "center",
      justifyContent: "flex-end",
      alignItems: "center",
    }}>
      <Image
        source={require('../../assets/logo.png')}
        style={{
          width: 60,
          height: 60,
          marginBottom: 7
        }}
        resizeMode={"contain"}
      />
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        color: Color.text
      }}>Water Eject Tool</Text>
      <Text style={{
        color: Color.text,
        fontSize: 13,
        opacity: 0.6,
        marginTop:8
      }}>{APP.expo.version}</Text>
      <Spacer />
    </View>
    <Spacer vertical={HEIGHT * 0.08} />
    <DrawerItemList {...props} labelStyle={{
      color: Color.text,
      fontWeight: "700"
    }} />
    <Spacer vertical={HEIGHT * 0.07} />
    <ToggleSwitch />
  </DrawerContentScrollView>
}


export default DrawerContent;