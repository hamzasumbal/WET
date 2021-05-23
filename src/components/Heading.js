import React from 'react';
import { Text, View, StyleSheet, Animated, Dimensions, } from 'react-native';
import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('window').width;


const Heading = ({scrollY, text}) => {

    const Color = Colors();
    
    return <Animated.View style={styles.container}>
        <Animated.Text
            style={{
                fontWeight: 'bold',
                color: Color.text,
                fontSize: scrollY.interpolate({
                    inputRange: [-250, -25],
                    outputRange: [37, 32],
                    extrapolate: 'clamp'
                }),
                transform : [{
                    translateY : scrollY.interpolate({
                        inputRange : [0, 0, 100],
                        outputRange : [0, 0,-100]
                    })
                }]

            }}
        >{text}</Animated.Text>
    </Animated.View>
};


const styles = StyleSheet.create({
    container: {
        marginLeft: WIDTH * 0.05,
        marginVertical : 5
    }
});


export default Heading;