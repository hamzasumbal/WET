import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Animated, FlatList, Dimensions } from 'react-native';
import Heading from '../components/Heading';
import Colors from '../constants/Colors';
import DrawerIcon from '../components/DrawerIcon';
import Spacer from '../components/Spacer';
import Header from '../components/Header'
import StartButton from '../components/StartButton';

const HEIGHT = Dimensions.get('screen').height

const HomeScreen = ({ navigation }) => {

    const scrollY = useRef(new Animated.Value(0)).current;


    return <SafeAreaView
        style={styles.container}
    >
        <View style={{ flex: 1 ,}}>
            <Header scrollY={scrollY} />
            <DrawerIcon onPress = {navigation.openDrawer}/>
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
                <Heading scrollY={scrollY} text={"Water Eject Tool"} />
            </Animated.ScrollView>
            <StartButton text = {"Start"} onPress = {()=>navigation.navigate("Play")}/>
        </View>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bg,
        flex: 1,
        paddingTop: Platform.OS === "android" ? HEIGHT * 0.045 : null,
    }
});



export default HomeScreen