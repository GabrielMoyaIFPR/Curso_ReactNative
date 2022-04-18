import React from "react";
import { View, StyleSheet} from "react-native";

export default props => {
    return (
        <View style={style.container}>
            <View style={style.coreMine}/>
            <View style={style.line}/>
            <View style={[style.line, {transform: [{rotate: '45deg'}]}]}/>
            <View style={[style.line, {transform: [{rotate: '90deg'}]}]}/>
            <View style={[style.line, {transform: [{rotate: '135deg'}]}]}/>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        width: 14,
        height: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        position: 'absolute',
        width: 20,
        height: 3,
        borderRadius: 3,
        backgroundColor: 'black',
    
    }
});

