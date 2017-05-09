export default (state = 0, action) => {
    const { type } = action;
    switch(type){
        case 'ADD':
            return state+1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}