import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors'

const HomeScreen =()=>{


    return<SafeAreaView
    style = {styles.container}
    >
        <Text>This is a homescreen</Text>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container : {
        backgroundColor : 'grey',
        flex : 1,
        paddingTop: Platform.OS === "android" ? 25 : null,
    }
});



export default HomeScreen