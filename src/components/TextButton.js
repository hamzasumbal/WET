import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Touchable } from 'react-native';
import Colors from '../constants/Colors';
import { Foundation } from '@expo/vector-icons';
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const TextButton = ({ text, onPress, showIcon, play }) => {


    const Color = Colors();
    return <TouchableOpacity style={[styles.container,{backgroundColor : Color.shade}]}
        onPress={onPress}
    >
        {showIcon ?
            <>
                {play ?
                    <Foundation name="pause" size={24} color={"white"} style={{ marginHorizontal: 20,}} />
                    :
                    <Foundation name="play" size={24} color={"white"} style={{ marginHorizontal: 20, }} />
                }
            </>
            : null
        }
        <Text style={[styles.text,{paddingLeft : showIcon? null : 20}]}>{text}</Text>
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: 60,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: HEIGHT * 0.08,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        paddingRight: 20
    }
});


export default TextButton;