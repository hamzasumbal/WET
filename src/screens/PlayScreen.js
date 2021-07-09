import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Feather } from '@expo/vector-icons';
import Timmer from '../components/Timer';
import Countdown from '../components/Countdown';
const HEIGHT = Dimensions.get('screen').height


const PlayScreen = ({navigation}) => {

  
    const [count, setCount] = useState(3)
    const Color = Colors();

    return <SafeAreaView
        style={[styles.container,{backgroundColor : Color.bg}]}
    >
        
        
        <View style={styles.subContainer}>
        <TouchableOpacity style = {{
                position : "absolute",
                top : 25,
                left : 10
            }} onPress = {navigation.goBack}>
        <Feather name="chevron-left" size={42} color={Color.text} />
        </TouchableOpacity>
            {count === 0 ?

                <Timmer />

                :
                <Countdown count={count} setCount={setCount} />

            }

        </View>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
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