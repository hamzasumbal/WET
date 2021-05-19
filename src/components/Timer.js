import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import Colors from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
const HEIGHT = Dimensions.get('screen').height


const Timmer = () => {
    const Anim = useRef(new Animated.Value(0)).current;

    const [key, setKey] = useState(0)

    const springAnim = async () => {

            Animated.spring(Anim, {
                toValue: 1.2,
                duration: 800,
                useNativeDriver: false
            }).start(); // start the sequence group


    };

    useEffect(()=>{

        springAnim()
    },[])



    return<Animated.View style = {{
        transform : [{scale : Anim}]
    }}>
    <CountdownCircleTimer
                    key={key}
                    trailColor={Colors.accent}
                    isPlaying
                    duration={15}
                    colors={[
                        [Colors.shade, 0.4],
                    ]}

                    onComplete={() => {
                        setKey(prevKey => prevKey + 1)

                    }}
                >
                    {({ remainingTime, animatedColor }) => {

                        return <Animated.Text style={{
                            color: Colors.shade, fontSize: 60, fontWeight: 'bold'
                        }}>
                            {remainingTime}
                        </Animated.Text>
                    }}
                </CountdownCircleTimer>
                </Animated.View>

};


const styles = StyleSheet.create({
});



export default Timmer