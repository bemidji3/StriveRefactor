import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_AGE,
    UPDATE_DESCRIPTION,
    UPDATE_PHONE,
    UPDATE_CELEBRITY
} from "./actions";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    description: "",
    celebrity: "",
    phone: "",
};

function striveApp(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FIRST_NAME:
            return {...state, firstName: action.text}
        case UPDATE_LAST_NAME:
            return {...state, lastName: action.text}
        default:
            return state;

    }
}

export default striveApp;
