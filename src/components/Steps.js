import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import Colors from '../constants/Colors';
import Spacer from './Spacer';
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const Steps = () => {


    return <View style={styles.container}>
        <Text style={styles.heading}>Steps</Text>
        <Spacer/>
        <Image source={require('../../assets/phonefront.png')} style={{
            width: 100,
            height : 70,
        }}
            resizeMode={"contain"}
        />
        <Spacer/>
        <Text style = {styles.text}>1. Remove from silent and set the volume to maximum</Text>
        <Spacer vertical = {20}/>
        <Image source={require('../../assets/phoneback.png')} style={{
             width: 100,
             height : 70,
        }}
            resizeMode={"contain"}
        />
        <Spacer/>
        <Text style = {styles.text}>2. Press "Eject Water" and place your phone with screen facing down.</Text>
        <Spacer/>
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
        textAlign : "center",
        fontSize : 16,
        width : WIDTH * 0.8,
        lineHeight : 25
    }
});


export default Steps;