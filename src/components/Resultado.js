import React, { Component } from  'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Link } from 'react-router-native';

class Resultado extends Component {
    render() {
        return (
            <View>
                <Text>
                    Felicidades {this.props.name} tu resultado es {this.props.counter}/5
                </Text>
                <Link
                    to={`/quiz/0`}
                    underlayColor='#f0f4f7'
                    style={styles.navItem}
                >
                    <Text>Volver a intentar</Text>
                </Link>
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

export default Resultado;