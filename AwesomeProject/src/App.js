import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contador from './components/Contador';
//import Botao from './components/Botao';
//import Titulo from './components/Titulo';
//import Aleatorio from './components/Aleatorio';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';


export default () => (
    <View style={style.App}>
        <Contador inicial={100} passo={13} />
        <Contador/>
        {/* 
        <Botao/>
        <Titulo principal="Cadastro"
            secundario="Tela de Cadastro" />
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/> 
        <MinMax min={3} max={20}/>
        <MinMax min={20} max={75}/> 
        <CompPadrao />
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