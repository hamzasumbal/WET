import React from 'react';
import { View, StyleSheet, Text , Dimensions} from 'react-native'
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('window').height;


const Spacer = ({ children , horizontal, vertical}) => {


    return <View style={{ marginVertical: vertical? vertical :HEIGHT * 0.01, marginHorizontal : horizontal }}>
        {children}
    </View>
}


export default Spacer;