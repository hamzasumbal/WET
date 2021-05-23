import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions,} from 'react-native';
import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height

const StartButton = ({text, onPress})=>{

    const Color = Colors();

    return <View style = {[styles.container,{backgroundColor : Color.accent, borderColor : Color.bg}]}>
        <TouchableOpacity style = {[styles.button,{backgroundColor : Color.shade}]} onPress = {onPress}>
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>

}


const styles = StyleSheet.create({
    container : {
        width : WIDTH,
        height : 80,
        position : "absolute",
        bottom : 0,
        justifyContent : "center",
        alignItems  : "center",
        borderTopWidth : 1,
    },
    button : {
        width : WIDTH * 0.9,
        height : 60,
        borderRadius : 10,
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        fontSize : 20,
        fontWeight : "700",
        color : "white"
    }
});



export default StartButton