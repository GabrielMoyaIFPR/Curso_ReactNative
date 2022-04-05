import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilo';

export default props => {
    if(Platform.OS === 'android') {
        return <Text style={Estilo.txtG}>Android</Text>
    } else {
        return <Text style={Estilo.txtG}>IOS</Text>
    }
}