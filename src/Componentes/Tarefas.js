/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';


export default class Tarefas extends Component{

  constructor(props){

        super(props)

        if(this.props.status==="Não concluída"){
        this.state = {
           
            
            
            frase: 'Concluido',
            color: 'red'
        }}
        else{
          this.state = {
          frase: 'Concluido',
          color: 'green'}
        }
  }

  mudar = () =>{

      if(this.props.status==="Não concluída"){
      this.setState({
        
        color: 'green',
        frase: 'Não concluída'
      })
      this.props.Atualizar(this.props.id,"Concluida")
    }
      else{
        this.setState({
        status: "Não concluída",
        color: 'red',
        frase: "Concluido"
      })
      this.props.Atualizar(this.props.id,"Não concluída")
      }
  }

  twofunction = (id) =>{

    this.mudar()
   

  }

  render(){
  
    return(

    <ScrollView>
    <View>
        <View style={estilo.menuinterno && {backgroundColor: this.state.color}} >
      
        <Text style={estilo.menu}>Nome da Tarefa: {this.props.tarefa}</Text>
        <Text style={estilo.menu}>Descrição: {this.props.descricao}</Text>
        <Text style={estilo.menu}>Término: {this.props.termino}</Text>
        <Text style={estilo.menu}>status: {this.props.status}</Text>
        <Text style={estilo.menu}>Prioridade: {this.props.prioridade}</Text>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={estilo.botao} onPress={() => this.twofunction(this.props.id)}>
                <Text style={estilo.textoBotao}>{this.state.frase}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.botao} onPress={() => this.props.Remover(this.props.id)}>
                <Text style={estilo.textoBotao}>Remover</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    </View>
    </ScrollView>
  )


}

}


const estilo = StyleSheet.create({


  menu: {

    margin: 5,
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold'
  },
  menuinterno: {
    
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'lightblue'
    
    

  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkblue',
    borderRadius: 2,
    margin: 12,
    width: 140
  },
  textoBotao: {
    fontWeight:'bold',
    fontSize: 24,
    color: 'white'    
  }
})