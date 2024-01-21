import {SET_PEOPLE, SET_PERSON} from "./actionDefinitions";
import {getPeopleService} from "../services/people.service";
// import {getPersonService} from "../services/person.service";

const bootstrapActions = () => {
    return async (dispatch, getStore) => {
        const people = await getPeopleService();
        dispatch({type: SET_PEOPLE, data: people.data});
        //
        // const person = await getPersonService(1);
        // dispatch({type: SET_PERSON, data: person});
    }
};

export { bootstrapActions };