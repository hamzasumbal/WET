import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Dimensions} from 'react-native';
import Colors from '../constants/Colors'
const HEIGHT = Dimensions.get('screen').height
const PlayScreen =()=>{


    return<SafeAreaView
    style = {styles.container}
    >
        <Text>This is a PlayScreen</Text>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container : {
        backgroundColor : 'grey',
        flex : 1,
        paddingTop: Platform.OS === "android" ? HEIGHT * 0.045 : null,
    }
});



export default PlayScreen