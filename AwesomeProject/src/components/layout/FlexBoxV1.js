import React from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';
export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado color="#900"/>
            <Quadrado color="#090"/>
            <Quadrado color="#009"/>
        </View>
    );
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow:1,
        justifyContent:'space-between',
        backgroundColor:'#000',
    }
});