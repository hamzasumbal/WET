import React from 'react';
import { Text, View, StyleSheet, Animated, Dimensions, } from 'react-native';

const WIDTH = Dimensions.get('window').width;


const Heading = ({scrollY, text}) => {


    return <View style={styles.container}>
        <Animated.Text
            style={{
                //fontSize: 32,
                fontWeight: 'bold',
                color: 'white',
                fontSize: scrollY.interpolate({
                    inputRange: [-250, -30],
                    outputRange: [40, 35],
                    extrapolate: 'clamp'
                })
            }}
        >{text}</Animated.Text>
    </View>
};


const styles = StyleSheet.create({
    container: {
        marginLeft: WIDTH * 0.05,
        marginVertical : 5
    }
});


export default Heading;