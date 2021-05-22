import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import Colors from '../constants/Colors';
import Spacer from './Spacer';
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const HowItWorks = () => {


    return <View style={styles.container}>
        <Text style={styles.heading}>How It Works?</Text>
        <Spacer/>
        <Text style = {styles.text}>So you've dropped your phone in the 🚽 toilet, 🚰 sink or 🏊‍ pool? When water gets into your phone's speaker enclosure the sound becomes muffled. Leaving any type of fluid in your speaker can cause serious damage when it dries out. It works just like the ⌚️ Apple watch's built-in water ejection feature. It plays a specific tone that generates sound waves which causes the water to be ejected.</Text>
        <Spacer/>
        <Image source = {require('../../assets/solution.gif')} style = {{
            width: WIDTH * 0.8,
            height : 270,
            borderRadius : 10
        }}/>
        <Text style = {{
            color : Colors.text,
            alignSelf : "flex-end",
            fontSize : 12,
            opacity : 0.5,
            paddingVertical : 5
        }}>fixmyspeaker.com</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        height: "auto",
        borderWidth: 1,
        alignSelf: "center",
        backgroundColor: Colors.accent,
        borderRadius: 10,
        padding: 15,
        alignItems : "center"
    },
    heading: {
        fontSize: 32,
        fontWeight: "600",
        color: Colors.text,
        alignSelf : "flex-start"
    },
    text : {
        color : Colors.text,
        textAlign : "justify",
        fontSize : 16,
        width : WIDTH * 0.8,
        lineHeight : 25
    }
});


export default HowItWorks;