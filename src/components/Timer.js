import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import Colors from '../constants/Colors'
import { Audio } from 'expo-av';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import CTAButton from './CTAButton';
const HEIGHT = Dimensions.get('screen').height


const Timmer = () => {
    const Anim = useRef(new Animated.Value(0)).current;
    const [sound, setSound] = useState();
    const [key, setKey] = useState(0);

    const [play, setPlay] = useState(true)

    const springInAnim = async () => {

            Animated.spring(Anim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: false
            }).start(); // start the sequence group
    };

    const springOutAnim = async () => {

        Animated.timing(Anim, {
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
        await sound.playAsync(); }
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    useEffect(()=>{
        springInAnim()
        playSound()
    },[])



    return<Animated.View style = {{
        transform : [{scale : Anim}]
    }}>
    <CountdownCircleTimer
                    key={key}
                    trailColor={Colors.accent}
                    isPlaying = {play}
                    duration={10}
                    size = {230}
                    colors={[
                        [Colors.shade, 0.4],
                    ]}

                    onComplete={() => {
                        /* setKey(prevKey => prevKey + 1) */
                        springOutAnim()

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
                <CTAButton play = {play} setPlay = {setPlay} sound = {sound}/>
                </Animated.View>

};


const styles = StyleSheet.create({
});



export default Timmer