import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.txtG, style.Numero]}>{num}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Container:{
        height: 50,
        width: 50,
        backgroundColor: '#01579b',
        margin: 5,
        borderRadius: 25,
    },
    Numero: {
        color: '#fff',
        fontSize: 35,
    }   
});