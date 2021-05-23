import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Animated, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import Heading from '../components/Heading';
import Colors from '../constants/Colors';
import DrawerIcon from '../components/DrawerIcon';
import Spacer from '../components/Spacer';
import Header from '../components/Header'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const AboutDeveloper = ({ navigation }) => {

    const scrollY = useRef(new Animated.Value(0)).current;


    return <SafeAreaView
        style={styles.container}
    >
        <View style={{ flex: 1 }}>
            <Header scrollY={scrollY} text = {"About the Developer"}/>
            <DrawerIcon onPress={navigation.openDrawer} />
            <Animated.ScrollView style={{ flex: 1 }}
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
                <Heading scrollY={scrollY} text={"About The Developer"} />
                <View style={{ alignItems: "center",}}>
                    <Spacer  vertical = {30}/>
                    <View style = {styles.imageBorder}>
                    <Image style={styles.image} source = {require('../../assets/profileimage.jpg')}/>
                    </View>
                   <Spacer/>
                    <Text style = {styles.name}>Hamza Sumbal</Text>
                    <Spacer/>
                    <Text style = {styles.bio}>React Native Developer</Text>
                    <Spacer/>
                    <TouchableOpacity
                    onPress = {()=>Linking.openURL("https://github.com/hamzasumbal")}
                    >
                    <Text style ={styles.link}>https://github.com/hamzasumbal</Text>
                    </TouchableOpacity>
                    <Spacer vertical = {20}/>
                    <View style ={styles.messageContainer}>
                    <Text style = {[styles.message,{fontWeight : "bold", fontSize : 18}]}>Thank you for Installing my App.</Text>
                    <Spacer/>
                    <Text style = {styles.message}> I hope you find it useful and enjoying every bit of it. Makesure to download more exciting apps I have for you guys. </Text>
                    </View>
                </View>
                <Spacer vertical = {20}/>
            </Animated.ScrollView>

        </View>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bg,
        flex: 1,
        paddingTop: Platform.OS === "android" ? HEIGHT * 0.045 : null,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    name : {
        fontSize : 30,
        color : Colors.text,
        fontWeight : "700"
    },
    bio : {
        fontSize : 20,
        color : Colors.text
    },
    link : {
        color : Colors.shade,
        fontSize : 16,
        textDecorationLine: 'underline',
    },
    imageBorder : {
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : Colors.shade,
    },
    messageContainer : {
        width : WIDTH * 0.8,
        height : "auto",
        backgroundColor : Colors.accent,
        borderRadius : 10,
        padding : 20
    },
    message : {
        fontSize : 18,
        color : Colors.text,
        textAlign: "center",
        lineHeight : 24
    }
});



export default AboutDeveloper