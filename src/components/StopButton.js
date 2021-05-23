import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Touchable } from 'react-native';
import Colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const WIDTH = Dimensions.get("screen").width;


const StopButton = ({ onPress }) => {


    const Color = Colors();

    return <TouchableOpacity style={[styles.container,{backgroundColor : Color.shade}]}
    onPress = {onPress}
    >
        <Entypo name="controller-stop" size={42} color={Colors.bg} />
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        borderRadius: 80,
        alignSelf: "center",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center"
    }
});


export default StopButton;