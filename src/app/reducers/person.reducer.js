import {SET_PERSON} from "../actions/actionDefinitions";

const personReducer = (state, action) => {
    if (action.type = SET_PERSON) {
        return {...state, action: action.data }
    }
    return state;
}

export { personReducer };