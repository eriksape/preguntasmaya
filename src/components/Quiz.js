import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Picker } from 'react-native';
import { NativeRouter, Link } from 'react-router-native'
import { map } from 'lodash';

class Quiz extends Component {
    state = {
        selected: 0
    }
    componentWillMount(){
        if(this.props.idQuiz == 0){
            this.props.reset();
        }
    }
    componentWillUpdate(nextProps, nextState){
        //this.props.quiz[this.props.idQuiz].opciones[this.state.selected].correcto;
        if(nextProps.idQuiz !== this.props.idQuiz){
            const respuesta = this.props.quiz[this.props.idQuiz].opciones[this.state.selected].correcto;
            console.log(respuesta);
            if(respuesta) this.props.add();
        }
    }
    componentWillUnmount(){
        const respuesta = this.props.quiz[this.props.idQuiz].opciones[this.state.selected].correcto;
        console.log(respuesta);
        if(respuesta) this.props.add();
    }
    render() {
        const nextQuiz = parseInt(this.props.idQuiz)+1;
        console.log('idQuiz', this.props.idQuiz, 'next', nextQuiz);
            if(this.props.quiz.length === 0){
                return (
                    <View>
                        <Text>Cargando...</Text>
                    </View>
                )
            }
        return (
            <View style={{padding: 10}}>
                <Text>{this.props.quiz[this.props.idQuiz].pregunta}</Text>
                <Picker
                    selectedValue={this.state.selected}
                    onValueChange={(val) => this.setState({selected: val})}
                >
                    {
                        map(this.props.quiz[this.props.idQuiz].opciones,
                            (opcion, key) => <Picker.Item key={key} value={key} label={opcion.respuesta} />
                        )
                    }
                </Picker>
                <View style={styles.container}>
                    <View style={styles.nav}>
                        {
                            nextQuiz < 5 &&
                            <Link
                                to={`/quiz/${nextQuiz}`}
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>Siguiente</Text>
                            </Link>
                        }
                        {
                            nextQuiz === 5 &&
                            <Link
                                to={`/resultado`}
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>Finalizar</Text>
                            </Link>
                        }

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
export default Quiz;