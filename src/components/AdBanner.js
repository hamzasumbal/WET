import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Platform, Dimensions } from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
} from 'expo-ads-admob';
import Colors from '../constants/Colors';
import Keys from '../../config/keys.json'
import Spacer from './Spacer';
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width


const AdBanner = () => {

    const [error, setError] = useState(false)
    const Color = Colors();

    const setUpIntAd = async () => {
        await AdMobInterstitial.setAdUnitID(Platform.OS === "android" ? Keys.AndroidIntID : Keys.IOSIntID); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
        await AdMobInterstitial.showAdAsync();
    }


    useEffect(() => {

         /* setUpIntAd() */
    }, [])

    return <>
        {!error ?
            <>
            <Spacer vertical = {20}/>
                <View style={[styles.ad, { backgroundColor: Color.accent }]} >
                    <AdMobBanner bannerSize={'largeBanner'}
                        adUnitID={Platform.OS === "android" ? Keys.AndroidBannerID : Keys.IOSBannerID}
                        servePersonalizedAds={false}
                        onDidFailToReceiveAdWithError={(error) => {
                            console.log(error)
                            setError(true)
                        }} />
                    <Text style={{
                        alignSelf: "flex-end",
                        fontSize: 13,
                        fontStyle: 'italic',
                        color: Color.text,
                        opacity: 0.5,
                    }}>Advertisement</Text>
                </View>
            </>
            : null}
    </>
};


const styles = StyleSheet.create({

    ad: {
        alignSelf: "center",
        width: WIDTH * 0.9,
        height: "auto",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
        paddingBottom: 10
    }

});


export default AdBanner;

