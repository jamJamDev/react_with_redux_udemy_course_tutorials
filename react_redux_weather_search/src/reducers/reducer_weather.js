import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]); --- one way to write this, or do...
            return [ action.payload.data, ...state ];//make new array, put action.payload.data, take elements from state array & insert them into new array.
    }

    return state;
}