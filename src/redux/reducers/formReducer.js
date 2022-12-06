import { formTypes } from "../types/formTypes"

const initialState = {
    form: []
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case formTypes.ADD_FORM:
            return {
                ...state,
                form: action.payload
            }
        default:
            return state
    }
}