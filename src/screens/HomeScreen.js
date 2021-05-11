import React,{useRef} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Animated, FlatList } from 'react-native';
import Heading from '../components/Heading';
import Colors from '../constants/Colors';

import DrawerIcon from '../components/DrawerIcon';
import Spacer from '../components/Spacer';

const HomeScreen = ({navigation}) => {

    const scrollY = useRef(new Animated.Value(0)).current;
    return <SafeAreaView
        style={styles.container}

    >
        <Spacer/>
        <DrawerIcon onPress = {navigation.openDrawer}/>
      {/*   <Animated.ScrollView style = {{flex: 1}}
        onScroll={(event) => {
            scrollY.setValue(event.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
        scrollToOverflowEnabled={"false"}
        stickyHeaderIndices = {[0]}
        >
        <Heading scrollY = {scrollY} text = {"Water Eject Tool"}/>
        <View
        style = {{
            width : 100,
            height : 100,
            backgroundColor : "red"
        }}
        />

        
        </Animated.ScrollView> */}

        <Animated.FlatList
        scrollToOverflowEnabled={"false"}
        ListHeaderComponent = {()=>{
            return<Heading scrollY = {scrollY} text = {"Water Eject Tool"}/>
        }}
        scrollEventThrottle={1}
        onScroll={(event) => {
            scrollY.setValue(event.nativeEvent.contentOffset.y);
            //console.log(event.nativeEvent.contentOffset.y)
        }}
        renderItem = {()=>{
            return <View
            style = {{
                width : 100,
                height : 100,
                backgroundColor : "red"
            }}
            />
        }}
        />

    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : null,
    }
});



export default HomeScreen