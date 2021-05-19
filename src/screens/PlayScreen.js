import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import Colors from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Timmer from '../components/Timer';
import Countdown from '../components/Countdown';
const HEIGHT = Dimensions.get('screen').height


const PlayScreen = () => {


    const [count, setCount] = useState(3)


    return <SafeAreaView
        style={styles.container}
    >

        <View style={styles.subContainer}>
            {count !== 0 ?

                <Countdown count={count} setCount={setCount} />

                : <Timmer />

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