import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeRouter, Link } from 'react-router-native'

class Home extends Component {
    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Escribe tu nombre"
                    onChangeText={(name) => this.props.setName(name)}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.props.name!==''?'Hola, ':''} {this.props.name}
                </Text>
                    <View style={styles.container}>
                        <View style={styles.nav}>
                            <Link
                                to="/quiz/0"
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>Siguiente</Text>
                            </Link>
                        </View>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 15,
    }
});

export default Home;