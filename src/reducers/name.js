import {
    SET_NAME,
    RESET_NAME
} from './../actions'

export default (state = '', action) => {
    const { type, payload } = action;
    switch(type){
        case SET_NAME:
            return payload;
        case RESET_NAME:
            return '';
        default:
            return state;
    }
}