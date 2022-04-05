import React from 'react';
import { View, StyleSheet } from 'react-native';
import Aleatorio from './components/Aleatorio';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';


export default () => (
    <View style={style.App}>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        {/* <MinMax min={3} max={20}/>
        <MinMax min={20} max={75}/> */}
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro/> */}
    </View>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});