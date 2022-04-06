import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
    function obterLista(){
        return produtos.map(p => {
        return (
            <Text key={p.id} style={Estilo.txtG}>
                {p.nome} - R$ {p.preco}
            </Text>
        )})
    }

    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {obterLista()}
        </>
    );
}