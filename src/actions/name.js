export const SET_NAME = 'SET_NAME';
export const RESET_NAME = 'RESET_NAME';

function action(type, payload = {}) {
    return {type, payload}
}

export const name_actions = {
    setName: value => action(SET_NAME, value),
    resetName: () => action(RESET_NAME),
}