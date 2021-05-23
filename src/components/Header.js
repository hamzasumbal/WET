import React from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Animated } from 'react-native';
import DrawerIcon from './DrawerIcon';
import Colors from '../constants/Colors'
const WIDTH = Dimensions.get('screen').width;


const Header = ({ scrollY, text }) => {

    const Color = Colors();
    const opacityBG = {
        opacity: scrollY.interpolate({
            inputRange: [0, 0, 50],
            outputRange: [0, 0, 1]
        })
    }

    const opacityText  = {
        opacity: scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [0, 0.2, 1]
        })
    }



    return <>
        <Animated.View style={{
            position: "absolute",
            width: WIDTH,
            height: 200,
            backgroundColor: Color.accent,
            transform: [{
                translateY: -200
            }],
            backgroundColor: Color.accent,
            opacity: opacityBG.opacity
        }} />
        <Animated.View style={[styles.container,
        { opacity: opacityBG.opacity,
         backgroundColor : Color.accent,
         borderColor : Color.text }]}>
            <Animated.Text style={[styles.text,
            {
                opacity : opacityText.opacity,
                color : Color.text
            }]}>{text}</Animated.Text>
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
        borderBottomWidth  : 0.25,
    },
    text: {
        fontSize: 18,
        fontWeight: "700",
    }
});


export default Header;