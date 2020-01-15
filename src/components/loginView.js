'use strict'

import React, { Component } from 'react';
import { Alert, Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';

export default class loginView extends Component {
    render(){
        return(                      
            <View >

              <Image style={styles.logo} style={styles.container} source={{uri:'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}/>
                    <Text style={styles.title}>Colberry Group</Text>
                    <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
                    <Text style={styles.textoBoton}>Login</Text>
                    </TouchableHighlight>              
            </View>       
        )
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
    container: {
        flex: 1,        
        alignItems: 'stretch',
        padding: 30,
        width: 350,
        height: 500,
        marginTop: 60,
        marginBottom: 10,
    },
    boton: {
      width: 300,
      height: 30,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',      
      marginTop: 60,
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
    },
    textoBoton:{
      color: 'white',    
    },    
    title: {
        marginTop: 100,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });

module.exports = loginView;
