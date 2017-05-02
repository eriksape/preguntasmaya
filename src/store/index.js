import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './../reducers'

export default function configureStore(initialState) {

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                logger
            )
        )
    );
}