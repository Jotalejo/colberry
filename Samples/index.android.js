//   JOTALEJO - SW y SISTEMAS <'-'> APPs
//     Bogotá - Enero 10 de 2020
//       A N D R O I D

//Importaciones

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// Componente
export default class Colberry extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.welcome}>
                Wel come pastusos :)
            </Text>
            <Text style={styles.instructions}>
                Para arrancar pongase las putas pilas en index.android.js
            </Text>
            <Text style={styles.instructions}>                
                Sacuda o presione el boton de menu para Menu Dev
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
});

AppRegistry.registerComponent('Colberry', () => Colberry);