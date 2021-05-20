import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Touchable } from 'react-native';
import Colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const WIDTH = Dimensions.get("screen").width;


const StopButton = ({ onPress }) => {




    return <TouchableOpacity style={[styles.container]}
    onPress = {onPress}
    >
        <Entypo name="controller-stop" size={42} color="black" />
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: Colors.shade,
        borderRadius: 80,
        alignSelf: "center",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center"
    }
});


export default StopButton;