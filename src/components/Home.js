import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

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
                    {this.props.name}
                </Text>
            </View>
        );
    }
}

export default Home;