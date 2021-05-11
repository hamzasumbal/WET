import React from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Animated } from 'react-native';
import DrawerIcon from './DrawerIcon';
import Colors from '../constants/Colors'
const WIDTH = Dimensions.get('screen').width;


const Header = ({ scrollY }) => {


    const opacityBG = {
        opacity: scrollY.interpolate({
            inputRange: [0, 0, 100],
            outputRange: [0, 0, 1]
        })
    }

    const opacityText  = {
        opacity: scrollY.interpolate({
            inputRange: [0, 60, 100],
            outputRange: [0, 0, 1]
        })
    }



    return <>
        <Animated.View style={{
            position: "absolute",
            width: WIDTH,
            height: 200,
            backgroundColor: Colors.accent,
            transform: [{
                translateY: -200
            }],
            backgroundColor: Colors.accent,
            opacity: opacityBG.opacity
        }} />
        <Animated.View style={[styles.container,
        { opacity: opacityBG.opacity }]}>
            <Animated.Text style={[styles.text,
            {
                opacity : opacityText.opacity
            }]}>Water Eject Tool</Animated.Text>
        </Animated.View>
    </>
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        paddingHorizontal: WIDTH * 0.05,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: Colors.accent,
        borderBottomWidth  : 0.25,
        borderColor  : Colors.text
    },
    text: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: "700",
    }
});


export default Header;