//state argument is not application state, only the state that
//this reducer is responsible for
export default function(state = null, action) { //if argument comes in undefined, set it to null
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}