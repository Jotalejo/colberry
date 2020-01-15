//   JOTALEJO - SW y SISTEMAS <'-'> APPs
//     Bogotá - Enero 10 de 2020
//       A N D R O I D

//Importaciones

import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, StyleSheet, Text, View, Alert } from 'react-native';
import loginView from '../src/components/loginView';

const Login = require('../src/components/loginView')
const Dashboard = require('../src/components/dashboardView')

// Componente
export default class Colberry extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.welcome}>
                Wel come pastusos :)
            </Text>
            <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
            <Text style={styles.textoBoton}>Login</Text>
          </TouchableHighlight>
        </View>      
    );
  }
  onLogin(){
    //console.log('Has pulsado el boton login')
    Alert.alert(
      'Acceso',
      'Has ingresado al sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }
      ]
    )      
  }  
  aceptar(){
    console.log('Login Aceptado')
  }
  cancelar(){
    console.log('Login Cancelado')
  }
}

const styles = StyleSheet.create({
  boton: {
    width: 300,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  textoBoton:{
    color: 'white',    
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 25,
      textAlign: 'center',
      color: 'gray',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: 'purple',
      marginBottom: 5,
  },
});

AppRegistry.registerComponent('Colberry', () => Colberry);