import React, { useRef, useState, useContext } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Animated, FlatList, Dimensions, } from 'react-native';
import Heading from '../components/Heading';
import Colors from '../constants/Colors';
import DrawerIcon from '../components/DrawerIcon';
import Spacer from '../components/Spacer';
import Header from '../components/Header'
import StartButton from '../components/StartButton';
import Steps from '../components/Steps';
import HowItWorks from '../components/HowItWorks';
import { StatusBar } from 'expo-status-bar';
import ThemeContext from '../contexts/ThemeContext';

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const HomeScreen = ({ navigation }) => {
    const {state : theme,} = useContext(ThemeContext)
    const Color = Colors();
    const scrollY = useRef(new Animated.Value(0)).current;


    return <SafeAreaView
        style={[styles.container,{backgroundColor : Color.bg}]}
    >
        <StatusBar style={theme === "light"? "dark" : "light"} />
        <View style={{ flex: 1 ,}}>
            <Header scrollY={scrollY} text = {"Water Eject Tool"}/>
            <DrawerIcon onPress = {navigation.openDrawer}/>
            <Animated.ScrollView style={{ flex: 1, marginBottom : 80 }}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY,
                                },
                            },
                        },
                    ],
                        { useNativeDriver: false })
                }
                scrollEventThrottle={1}
                scrollToOverflowEnabled={"false"}
                stickyHeaderIndices={[0]}
            >
                <Heading scrollY={scrollY} text={"Water Eject Tool"} />
                <Spacer vertical = {20}/>
                <Text style = {[styles.message,{color : Color.text}]}>Eject 💦 water from your phone's speakers after getting it wet.</Text>
                <Spacer vertical = {20}/>
                <Steps/>
                <Spacer vertical = {20}/>
                <HowItWorks/>
                <Spacer vertical = {20}/>
            </Animated.ScrollView>
            <StartButton text = {"Start"} onPress = {()=>navigation.navigate("Play")}/>
        </View>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? HEIGHT * 0.045 : null,
    },
    message : {
        width : WIDTH * 0.9,
        alignSelf : "center",
        fontSize : 16,
        textAlign :"center",
        lineHeight : 25
    }
});



export default HomeScreen