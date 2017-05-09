import { combineReducers } from 'redux';
import name from './name'
import quiz from './quiz'
import counter from './counter'

const rootReducer = combineReducers({
    name,
    quiz,
    counter
});

export default rootReducer;