import {configureStore} from "@reduxjs/toolkit";
import {peopleReducer} from "./reducers/people.reducer";
import {personReducer} from "./reducers/person.reducer";

const store = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
    }
})