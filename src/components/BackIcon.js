import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('screen').width

const BackIcon = ({onPress})=>{

    const Color = Colors();
    return<TouchableOpacity style = {{
        position : "absolute",
        left : WIDTH * 0.02,
        top : 7
    }}
    onPress = {onPress}>
     <Feather name="chevron-left" size={38} color={Color.text} />
    </TouchableOpacity>
}


const styles = StyleSheet.create({});


export default BackIcon;