import React, {Component} from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component{
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdeNumeros = (qtde) => {
        this.setState({qtdNumeros: +qtde});
    }
    
    gerarNumeroNaoContido = nums => {
        const numero = parseInt(Math.random() *60) + 1;
        return nums.includes(numero) ? this.gerarNumeroNaoContido(nums) : numero;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros).fill().reduce(nums => {
            const novoNumero = this.gerarNumeroNaoContido(nums);
            return [...nums, novoNumero];
        }, [])
        .sort((a, b) => a - b);
        this.setState({numeros});
    }

    // gerarNumeros = () => {
    //     const {qtdNumeros} = this.state;
    //     const numeros = [];

    //     for(let i = 0; i < qtdNumeros; i++) {
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }
    //     numeros.sort((a,b) => a-b);
    //     this.setState({numeros});
    // }

    exibirNumeros = () => {
        const numeros = this.state.numeros
        return numeros.map(num => {
            return <MegaNumero num={num} key={num}/>
        });
    }

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder='Qtd. Números'    
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdeNumeros}
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        );
    }
}