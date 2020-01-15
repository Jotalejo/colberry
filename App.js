//   JOTALEJO - SW y SISTEMAS <'-'> APPs
//     Bogotá - Enero 10 de 2020
//       A N D R O I D

//Importaciones

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, NavigatorIOS } from 'react-native';

const Login = require('./src/components/loginView')
const Dashboard = require('./src/components/dashboardView')

// Componente
export default class Colberry extends Component {
  render() {
    return (
      <Login></Login>
    );
  }
  
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('Colberry', () => Colberry);