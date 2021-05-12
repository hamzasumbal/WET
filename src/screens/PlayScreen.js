import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import Colors from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Timmer from '../components/Timer';
const HEIGHT = Dimensions.get('screen').height


const PlayScreen = () => {

    const Anim = useRef(new Animated.Value(0)).current;

    const [key, setKey] = useState(0)


    const fadeIn = async () => {

        Animated.sequence([
            Animated.spring(Anim, {
                toValue: 8,
                duration: 800,
                useNativeDriver: false
            }),
            Animated.spring(Anim, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }),
        ]).start(); // start the sequence group


    };


    const [count, setCount] = useState(3)

    useEffect(() => {
        fadeIn()
        let interval = setInterval(() => {
            fadeIn()
            setCount(prev => {
                if (prev === 1) clearInterval(interval)
                return prev - 1
            })
        }, 1000)

        // interval cleanup on component unmount
        return () => clearInterval(interval)
    }, [])

    return <SafeAreaView
        style={styles.container}
    >

        <View style={styles.subContainer}>
            {count !== 0 ?

                <Animated.Text
                    style={{
                        fontSize: Anim.interpolate({
                            inputRange: [0, 3],
                            outputRange: [20, 60]
                        }),
                        fontWeight: "bold",
                        color : Colors.green
                    }}
                >{count}</Animated.Text>

                : <Timmer/>

            }

        </View>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bg,
        flex: 1,
        paddingTop: Platform.OS === "android" ? HEIGHT * 0.045 : null,
    },
    subContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
});



export default PlayScreen