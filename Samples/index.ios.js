//   JOTALEJO - SW y SISTEMAS <'-'> APPs
//     Bogotá - Enero 10 de 2020
//       I O S

//Importaciones

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

// Componente
class Colberry extends Component {
    render () {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Wel come pastusos :)
            </Text>
            <Text style={styles.instructions}>
                Para arrancar pongase las putas pilas en index.ios.js
            </Text>
            <Text style={styles.instructions}>
                Presione Cmd+R para realimentar,{'\n'}
                Cmd+D or sacuda para menu dev
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