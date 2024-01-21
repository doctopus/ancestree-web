import {SET_PEOPLE} from "../actions/actionDefinitions";

const peopleReducer = (state = {}, action) => {
    if (action.type === SET_PEOPLE) {
        return {...state, items: action.data }
    }
    return state;
}
export { peopleReducer };