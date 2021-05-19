import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import Colors from '../constants/Colors'
import { Audio } from 'expo-av';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import CTAButton from './CTAButton';
import TextButton from './TextButton';
import SoundTest from './SoundTest';
const HEIGHT = Dimensions.get('screen').height


const Timmer = () => {
    const Anim = useRef(new Animated.Value(0)).current;
    const Anim1 = useRef(new Animated.Value(0)).current;
    const [sound, setSound] = useState();
    const [complete, setComplete] = useState(false)
    const [key, setKey] = useState(0);

    const [play, setPlay] = useState(true)

    const springInAnim = async () => {

        Animated.spring(Anim, {
            toValue: 1,
            duration: 500,
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

    const TranslateOutAnim = async () => {

        Animated.timing(Anim1, {
            toValue: HEIGHT * 0.2,
            duration: 200,
            useNativeDriver: false
        }).start(); // start the sequence group

    };


    const TranslateInAnim = async () => {

        Animated.timing(Anim1, {
            toValue: 0,
            duration: 150,
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



    return <View>
        {complete ?
           <SoundTest/>
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
                    trailColor={Colors.accent}
                    isPlaying={play}
                    duration={10}
                    size={230}
                    colors={[
                        [Colors.shade, 0.4],
                    ]}

                    onComplete={() => {
                        /* setKey(prevKey => prevKey + 1) */
                        springOutAnim()
                        TranslateOutAnim()
                        setComplete(true)
                    }}
                >
                    {({ remainingTime, animatedColor }) => {

                        return <Animated.Text style={{
                            color: Colors.shade, fontSize: 70, fontWeight: 'bold'
                        }}>
                            {remainingTime}
                        </Animated.Text>
                    }}
                </CountdownCircleTimer>
                {complete ?
                    <TextButton text={"Play Again"} onPress={() => {
                        setKey(prevKey => prevKey + 1)
                        setComplete(false)
                        springInAnim()
                        TranslateInAnim()
                        playSound()

                    }} />
                    :
                    <CTAButton play={play} setPlay={setPlay} sound={sound} />
                }

            </Animated.View>
        </Animated.View>
    </View>

};


const styles = StyleSheet.create({
    testButtonContainer : { position: "absolute", alignSelf: "center", top : HEIGHT * 0.05, zIndex : 99 }
});



export default Timmer