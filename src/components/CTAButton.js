import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Touchable } from 'react-native';
import Colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const WIDTH = Dimensions.get("screen").width;


const CTAButton = ({ play, setPlay, sound, onPress }) => {


    /*   const [play, setPlay] = useState(false) */


    return <TouchableOpacity style={[styles.container, {
        backgroundColor: play ? Colors.shade : Colors.bg,
        borderWidth: 3,
        borderColor: !play ? Colors.shade : Colors.bg
    }]}
        onPress={async () => {
            if (onPress) {
                onPress()
            }

            if (play) {
                await sound.pauseAsync()
            }
            else {
                await sound.playAsync()
            }
            setPlay(!play)
        }}
    >
        {play ?
            <AntDesign name="pause" size={38} color={Colors.bg} />
            :
            <Entypo name="controller-play" size={38} color={Colors.shade} style={{
                left: 3
            }} />
        }


    </TouchableOpacity>
};


const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: Colors.shade,
        borderRadius: 80,
        alignSelf: "center",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center"
    }
});


export default CTAButton;