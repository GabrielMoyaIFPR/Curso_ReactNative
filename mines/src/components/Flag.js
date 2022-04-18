import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={style.container}>
            <View style={[style.flagpole, props.bigger ? style.flagpoleBigger : null]} />
            <View style={[style.flag, props.bigger ? style.flagBigger : null]} />
            <View style={[style.base1, props.bigger ? style.base1Bigger : null]} />
            <View style={[style.base2, props.bigger ? style.base2Bigger : null]} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagpole: {
        position: "absolute",
        width: 2,
        height: 14, 
        backgroundColor: "#222",
        marginLeft: 9,
    },
    flag: {
        position: "absolute",
        width: 6,
        height: 5,
        backgroundColor: "#F22",
        marginLeft: 3,
    },
    base1: {
        position: "absolute",
        width: 6,
        height: 2,
        backgroundColor: "#222",
        marginLeft: 7,
        marginTop: 10,  
    },
    base2: {
        position: "absolute",
        width: 10,
        height: 2,
        backgroundColor: "#222",
        marginLeft: 5,
        marginTop: 12
    },
    flagpoleBigger: {
        width: 4,
        height: 28,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        width: 12,
        height: 4,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger: {
        width: 20,
        height: 4,
        marginTop: 24,
        marginLeft: 8,
    }
});