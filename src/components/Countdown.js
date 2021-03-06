import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import { Audio } from 'expo-av';
import Colors from '../constants/Colors'
const HEIGHT = Dimensions.get('screen').height


const Countdown = ({count , setCount}) => {

    
    const Color = Colors();
    const Anim = useRef(new Animated.Value(0)).current;
    const [sound, setSound] = useState();
    const springAnim = async () => {

        Animated.sequence([
            Animated.spring(Anim, {
                toValue: 8,
                duration: 800,
                useNativeDriver: false
            }),
            Animated.spring(Anim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }),
        ]).start();


    };

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/countdown.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); }
    
      useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);


    useEffect(() => {
        springAnim()
        playSound()
        let interval = setInterval(() => {
            springAnim()
            setCount(prev => {
                if (prev === 1) 
                {
                    clearInterval(interval)
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return  <Animated.Text
                    style={{
                        fontSize: Anim.interpolate({
                            inputRange: [0, 3],
                            outputRange: [20, 60]
                        }),
                        fontWeight: "bold",
                        color : Color.green
                    }}
                >{count}</Animated.Text>
};


const styles = StyleSheet.create({});



export default Countdown