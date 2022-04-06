import React from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';
export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado color="#900" lado={20}/>
            <Quadrado color="#090" lado={30}/>
            <Quadrado color="#009" lado={40}/>
        </View>
    );
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'baseline',
        height:250,
        width:'100%',
        backgroundColor:'#000',
    }
});