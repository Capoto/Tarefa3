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
} from 'react-native';


export default class Menu extends Component{

  render(){
  return(

    <View>
      
      <Text style={estilo.menu}>Tarefas</Text>
    </View>
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
  }
})