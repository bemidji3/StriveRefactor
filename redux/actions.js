export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_AGE = 'UPDATE_AGE';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const UPDATE_CELEBRITY = 'UPDATE_CELEBRITY';
export const UPDATE_PHONE = 'UPDATE_PHONE';
export const MAKE_REQUEST = 'MAKE_REQUEST';


export function updateFirstName(text) {
    return { type: UPDATE_FIRST_NAME, text}
}

export function updateLastName(text) {
    return { type: UPDATE_LAST_NAME, text}
}

export function updateEmail(text) {
    return { type: UPDATE_EMAIL, text}
}

export function updateAge(text) {
    return { type: UPDATE_AGE, text}
}

export function updateDescription(text) {
    return { type: UPDATE_DESCRIPTION, text}
}

export function updateCelebrity(text) {
    return { type: UPDATE_CELEBRITY, text}
}

export function updatePhone(text) {
    return { type: UPDATE_PHONE, text}
}
