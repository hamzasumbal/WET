import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions,} from 'react-native';
import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height

const StartButton = ({text, onPress})=>{



    return <View style = {styles.container}>
        <TouchableOpacity style = {styles.button} onPress = {onPress}>
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
        backgroundColor : Colors.accent,
        justifyContent : "center",
        alignItems  : "center"
    },
    button : {
        width : WIDTH * 0.9,
        height : 60,
        backgroundColor : Colors.shade,
        borderRadius : 10,
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        fontSize : 20,
        fontWeight : "700",
        color : Colors.text
    }
});



export default StartButton