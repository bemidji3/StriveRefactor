import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_AGE,
    UPDATE_DESCRIPTION,
    UPDATE_PHONE,
    UPDATE_CELEBRITY,
    RECEIVE_RESPONSE,
    NEW_USER_CREATE_START,
} from "./actions";

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    description: "",
    celebrity: "",
    phone: "",
    api_key: "15c97b04fd8ebe0d590455aeba453c50",
    is_fetching: false,
    return_status: null,
};

function striveApp(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FIRST_NAME:
            return {...state, first_name: action.text};
        case UPDATE_LAST_NAME:
            return {...state, last_name: action.text};
        case UPDATE_EMAIL:
            return {...state, email: action.text};
        case UPDATE_PHONE:
            return {...state, phone: action.text};
        case UPDATE_AGE:
            return {...state, age: action.text};
        case UPDATE_CELEBRITY:
            return {...state, celebrity: action.text};
        case UPDATE_DESCRIPTION:
            return {...state, description: action.text};
        case RECEIVE_RESPONSE:
            return {...state, return_status: action.response, is_fetching: false};
        case NEW_USER_CREATE_START:
            return {...state, is_fetching: true};
        default:
            return state;

    }
}

export default striveApp;
