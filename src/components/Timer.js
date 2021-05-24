import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import Colors from '../constants/Colors'
import { Audio } from 'expo-av';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import CTAButton from './CTAButton';
import TextButton from './TextButton';
import SoundTest from './SoundTest';
import StopButton from './StopButton';
import { FontAwesome } from '@expo/vector-icons';
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const Timmer = () => {
    const Anim = useRef(new Animated.Value(0)).current;
    const Anim1 = useRef(new Animated.Value(0)).current;
    const Anim2 = useRef(new Animated.Value(0)).current;
    const [sound, setSound] = useState();
    const [complete, setComplete] = useState(false)
    const [key, setKey] = useState(0);
    const Color = Colors();

    const [play, setPlay] = useState(true)

    const springInAnim = async () => {

        Animated.spring(Anim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false
        }).start(); // start the sequence group


    };

    const springOutAnim = async () => {

        Animated.spring(Anim, {
            toValue: 0.8,
            duration: 200,
            useNativeDriver: false
        }).start(); // start the sequence group

    };

    const translateOutAnim1 = async () => {

        Animated.timing(Anim1, {
            toValue: HEIGHT * 0.2,
            duration: 200,
            useNativeDriver: false
        }).start(); // start the sequence group

    };


    const translateInAnim1 = async () => {

        Animated.timing(Anim1, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false
        }).start(); // start the sequence group

    };


    const translateOutAnim2 = async () => {

        Animated.timing(Anim2, {
            toValue: WIDTH * 0.25,
            duration: 300,
            useNativeDriver: false
        }).start(); // start the sequence group

    };


    const translateInAnim2 = async () => {

        Animated.timing(Anim2, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
        }).start(); // start the sequence group

    };

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/water-eject.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(() => {
        springInAnim()
        playSound()
    }, [])


    const completeSequence = () => {
        springOutAnim()
        translateOutAnim1()
        Anim2.setValue(0)
        setComplete(true)

    }


    return <View>
        {complete ?
            <SoundTest />
            : null}
        <Animated.View style={{
            transform: [{ scale: Anim }],
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Animated.View style={{
                transform: [{ translateY: Anim1 }]
            }}>
                <CountdownCircleTimer
                    key={key}
                    trailColor={Color.accent}
                    isPlaying={play}
                    duration={10}
                    size={230}
                    trailStrokeWidth = {20}
                    strokeWidth = {15}
                    colors={[
                        [Color.blue, 0.4],
                    ]}

                    onComplete={completeSequence}
                >
                    {({ remainingTime, animatedColor }) => {

                        return <>
                            {remainingTime === 0 ?
                                <FontAwesome name="check" size={80} color={Color.green} />
                                :
                                <Animated.Text style={{
                                    color: Color.blue, fontSize: 80, fontWeight: 'bold'
                                }}>
                                    {remainingTime}
                                </Animated.Text>
                            }
                        </>


                    }}
                </CountdownCircleTimer>
                {complete ?
                    <TextButton text={"Play Again"} onPress={() => {
                        setKey(prevKey => prevKey + 1)
                        setPlay(true)
                        setComplete(false)
                        springInAnim()
                        translateInAnim1()
                        playSound()

                    }} />
                    :
                    <View>
                        <CTAButton play={play} setPlay={setPlay} sound={sound}
                            onPress={() => {
                                play ? translateOutAnim2() : translateInAnim2()
                            }}
                        />
                        <Animated.View style={{
                            position: "absolute",
                            alignSelf: "center",
                            transform: [{ translateX: Anim2 }],
                            zIndex: -1,
                            opacity: Anim2.interpolate({
                                inputRange: [0, WIDTH * 0.1, WIDTH * 0.25],
                                outputRange: [0, 0, 1]
                            })
                        }}>
                            <StopButton
                                onPress={completeSequence}
                            />
                        </Animated.View>
                    </View>
                }

            </Animated.View>
        </Animated.View>
    </View>

};


const styles = StyleSheet.create({
    testButtonContainer: { position: "absolute", alignSelf: "center", top: HEIGHT * 0.05, zIndex: 99 }
});



export default Timmer