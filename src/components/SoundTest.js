import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Dimensions, Animated } from 'react-native';
import TextButton from './TextButton';
import { Audio } from 'expo-av';
const HEIGHT = Dimensions.get('screen').height


const SoundTest = () => {

    const [sound, setSound] = useState();
    const [play, setPlay] = useState(false)

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/test-sound.mp3')
        );
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(async (status) => {
            if (status.didJustFinish === true) {
              setPlay(false)
              await sound.unloadAsync()
            }
          })

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    

    return<Animated.View
                style={styles.testButtonContainer}
            >
                <TextButton text={play? "Playing ..." :"Play Test Sound"} showIcon play = {play} 
                onPress = {()=>{
                    if(!play)
                    {
                        playSound()
                    }
                    else{
                        sound.pauseAsync()
                    }
                    setPlay(!play)
                }
                } />
            </Animated.View>
          
};


const styles = StyleSheet.create({
    testButtonContainer : { position: "absolute", alignSelf: "center", top : HEIGHT * 0.05, zIndex : 99 }
});



export default SoundTest