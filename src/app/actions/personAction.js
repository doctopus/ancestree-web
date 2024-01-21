import {SET_PERSON} from "./actionDefinitions";
import {getPersonService} from "../services/person.service";

const personAction = (id) => {
    return async (dispatch) => {
        const person = await getPersonService(id)
        dispatch({type:SET_PERSON, data:person});
    };
};

export { personAction };