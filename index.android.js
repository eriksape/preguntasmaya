import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store'

import { NativeRouter, Route } from 'react-router-native'
import Home from './src/containers/Home';
import Quiz from './src/containers/Quiz';
import Resultado from './src/containers/Resultado';


const HomeComponent = () => (
    <Home />
);

const QuizComponent = ({ match }) => (
    <Quiz idQuiz={match.params.id} />
);


class App extends React.Component {
    render(){

        const store = configureStore({});
        return (
            <Provider store={store}>
                <NativeRouter>
                    <View style={styles.container}>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route path="/quiz/:id" component={QuizComponent}/>
                        <Route exact path="/resultado" component={Resultado}/>
                    </View>
                </NativeRouter>
            </Provider>
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

AppRegistry.registerComponent('quiz', () => App);