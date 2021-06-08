import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import Colors from '../constants/Colors';
import Spacer from './Spacer';
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const Steps = () => {


    const Color = Colors();


    return <View style={[styles.container,{backgroundColor : Color.accent}]}>
        <Text style={[styles.heading,{color: Color.text,}]}>Steps</Text>
        <Spacer/>
        <Image source={require('../../assets/phonefront.png')} style={{
            width: 100,
            height : 70,
        }}
            resizeMode={"contain"}
        />
        <Spacer/>
        <Text style = {[styles.text,{color : Color.text,}]}>1. Remove from silent and set the volume to maximum</Text>
        <Spacer vertical = {20}/>
        <Image source={require('../../assets/phoneback.png')} style={{
             width: 100,
             height : 70,
        }}
            resizeMode={"contain"}
        />
        <Spacer/>
        <Text style = {[styles.text,{color : Color.text,}]}>2. Press "Start" and place your phone with speaker facing downward.</Text>
        <Spacer/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        height: "auto",
        alignSelf: "center",
        borderRadius: 10,
        padding: 15,
        alignItems : "center"
    },
    heading: {
        fontSize: 32,
        fontWeight: "600",
        alignSelf : "flex-start"
    },
    text : {
        textAlign : "center",
        fontSize : 16,
        width : WIDTH * 0.8,
        lineHeight : 25
    }
});


export default Steps;