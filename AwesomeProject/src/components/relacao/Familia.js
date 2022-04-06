import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>Início da família</Text>
            {props.children}
            <Text style={Estilo.txtG}>Fim da família</Text>
        </>
    );
}