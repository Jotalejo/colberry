'use strict'

import React, { Component } from 'react';
import { NativeModules, Alert, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class dashboardView extends Component {    
    render (){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Soy el scrapie componente Dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,     
        alignItems: 'center',      
    },
    title: {        
        fontSize: 25
    }
});


module.exports = dashboardView;
