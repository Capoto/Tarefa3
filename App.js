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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Menu from './src/Componentes/Menu'
import Task from './src/Componentes/Tarefas'
import Tarefa from './src/Model/Tarefa'
import Crud from './src/Database/crud_rn'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      tarefa:  "",
      descricao: "",
      termino: "",
      status: "Não concluída",
      prioridade: "",
      lista: []

    }
  }

  Listar = ()  =>{

    const banco = new Crud() 

    banco.Listar().then(
      listaCompleta =>{
      this.setState({lista: listaCompleta})}
    )
  }

  Inserir = (tarefa,descricao,termino,status,prioridade) =>{
    const novatarefa = new Tarefa(tarefa,descricao,termino,status,prioridade)
    
    const banco = new Crud() 

    banco.Inserir(novatarefa)
    this.Listar()
  }

  Remover = (id) =>{

    
    const banco = new Crud() 
    banco.Remover(id)
    this.Listar()
  }

  Atualizar = (id,status) =>{

    
    const banco = new Crud() 
    banco.Atualizar(id,status)
    this.Listar()
  }

  render(){
  return(
    <ScrollView>
    <View>
      <Menu/>
      <View style={estilo.menu}>

          <Text style={estilo.texto}>Cadastro de Tarefas</Text>
          <TextInput onChangeText={(valor) => {this.setState({tarefa: valor})}} placeholder='Nome da tarefa' style={estilo.input}/>
          <TextInput onChangeText={(valor) => {this.setState({descricao: valor})}} placeholder="Descrição" style={estilo.input}/>
          <TextInput onChangeText={(valor) => {this.setState({termino: valor})}} placeholder='Termino' style={estilo.input}/>
          <TextInput onChangeText={(valor) => {this.setState({prioridade: valor})}} placeholder='Prioridade' style={estilo.input}/>
          <TouchableOpacity onPress={() => this.Inserir(this.state.tarefa,this.state.descricao,this.state.termino,this.state.status,this.state.prioridade)} style={estilo.botao}><Text style={estilo.textoBotao}>Salvar</Text></TouchableOpacity>
      </View>
     
      <Text style={estilo.menu}>Lista de Tarefas</Text>
      {this.state.lista.map(l => (
        <Task
        l={l}
        id={l.id}
        tarefa ={l.tarefa}
        descricao ={l.descricao}
        termino = {l.termino}
        status = {l.status}
        prioridade ={l.prioridade}
        Remover = {this.Remover}
        Atualizar = {this.Atualizar}


        ></Task>
      )


      )


      }
    </View>
    </ScrollView>
  )


}

}


const estilo = StyleSheet.create({


  menu: {

    margin: 20,
    color: 'blue',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 36
  },

  input:{

    margin: 8,
    borderColor: 'blue',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 35

  },
  texto:{
    color: 'blue',
    fontSize: 36
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