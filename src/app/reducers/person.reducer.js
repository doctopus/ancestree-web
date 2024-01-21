import {SET_PERSON} from "../actions/actionDefinitions";

const personReducer = (state = {item:{}}, action) => {
    if (action.type === SET_PERSON) {
        return {...state, item: action.data }
    }
    return state;
}

export { personReducer };