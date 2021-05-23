import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('screen').width

const DrawerIcon = ({onPress})=>{
    return<TouchableOpacity style = {{
        position : "absolute",
        right : WIDTH * 0.05,
        top : 10
    }}
    onPress = {onPress}>
    <FontAwesome name="bars" size={24} color={Colors.text} />
    </TouchableOpacity>
}


const styles = StyleSheet.create({});


export default DrawerIcon;