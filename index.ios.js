import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store'

import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './src/containers/Home';

const HomeComponent = () => (
    <Home />
)

const About = () => (
    <Text style={styles.header}>
      About
    </Text>
)

const Topic = ({ match }) => (
    <Text style={styles.topic}>
        {match.params.topicId}
    </Text>
)

const Topics = ({ match }) => (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <Link
            to={`${match.url}/rendering`}
            style={styles.subNavItem}
            underlayColor='#f0f4f7'>
          <Text>Rendering with React</Text>
        </Link>
        <Link
            to={`${match.url}/components`}
            style={styles.subNavItem}
            underlayColor='#f0f4f7'>
          <Text>Components</Text>
        </Link>
        <Link
            to={`${match.url}/props-v-state`}
            style={styles.subNavItem}
            underlayColor='#f0f4f7'>
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
          <Text style={styles.topic}>Please select a topic.</Text>
      )} />
    </View>
);

class App extends React.Component {
    render(){
        const store = configureStore({});
        return (
            <Provider store={store}>
                <NativeRouter>
                    <View style={styles.container}>
                        <View style={styles.nav}>
                            <Link
                                to="/"
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>Home</Text>
                            </Link>
                            <Link
                                to="/about"
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>About</Text>
                            </Link>
                            <Link
                                to="/topics"
                                underlayColor='#f0f4f7'
                                style={styles.navItem}>
                                <Text>Topics</Text>
                            </Link>
                        </View>

                        <Route exact path="/" component={HomeComponent}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
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

const cuestionario = [
    {
        "pregunta":"Rito maya que significa “abrazar a horcadas” el cual tiene los siguientes elementos: niñ@ menor de 4 meses, padrinos y una mesa en el centro de la habitación con utensilios apropiados al ritual como el huevo y pepita gruesa.",
        "opciones": [
            {
                "respuesta":"Jets’ mek’",
                "correcto":true
            },
            {
                "respuesta":"Cha’a cháak",
                "correcto":false
            },
            {
                "respuesta":"wakax che’",
                "correcto":false
            },
            {
                "respuesta":"pa’ p’úul",
                "correcto":false
            }
        ]
    },
    {
        "pregunta":"Concepto al que corresponde esta definición: transmisión de noticias, composiciones literarias, doctrinas, ritos, etc., hecha de generación en generación",
        "opciones": [
            {
                "respuesta":"Tradición",
                "correcto":true
            },
            {
                "respuesta":"Costumbre",
                "correcto":false
            },
            {
                "respuesta":"Hábito",
                "correcto":false
            },
            {
                "respuesta":"Historia",
                "correcto":false
            }
        ]
    },
    {
        "pregunta":"Cual NO es una tradición de México",
        "opciones": [
            {
                "respuesta":"Ritual de los voladores",
                "correcto":true
            },
            {
                "respuesta":"Los Parachicos",
                "correcto":false
            },
            {
                "respuesta":"Hanal pixan",
                "correcto":false
            },
            {
                "respuesta":"Noche de muertos/brujas",
                "correcto":false
            }
        ]
    },
    {
        "pregunta":"Nombre de la tradición en la cual se toma un cerdo, se baña con cebo extraido de otro porcino y se deja en libertad para ser atrapado por algún participante.",
        "opciones": [
            {
                "respuesta":"Jajalkil k'éek’en",
                "correcto":true
            },
            {
                "respuesta":"u pool k’éek’en",
                "correcto":false
            },
            {
                "respuesta":"wakax che’",
                "correcto":false
            },
            {
                "respuesta":"k’éek’en",
                "correcto":false
            }
        ]
    },
    {
        "pregunta":"¿Qué significa el nombre de esta tradición “pa’ p’úul” ?",
        "opciones": [
            {
                "respuesta":"Romper el cántaro",
                "correcto":true
            },
            {
                "respuesta":"Cabeza de Cochino",
                "correcto":false
            },
            {
                "respuesta":"Abrazar a horcadas",
                "correcto":false
            },
            {
                "respuesta":"Danza de Cháak",
                "correcto":false
            }
        ]
    }
]

AppRegistry.registerComponent('quiz', () => App);