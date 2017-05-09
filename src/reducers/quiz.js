import { random, filter, map, shuffle } from 'lodash';
import quizdata from './../../data';

export default (state = [], action) => {
    switch(action.type) {
        case 'RESET':
            return setQuiz();
    }
    return state;
}

function setQuiz(){
    const data = quizdata;
    const size = data.length-1;
    for(var i = 0; i < 5; i++){
        let x = random(0,size);
        console.log(i, x);
        if(data[x].seleccionado){
            i--;
        } else {
            data[x].seleccionado = true;
        }
    }

    let quiz = filter(data, obj => obj.seleccionado);
    quiz = map(quiz, obj => {
        obj.opciones = shuffle(obj.opciones);
        return obj;
    });

    //console.log(data);
    console.log(quiz);
    return quiz;
}