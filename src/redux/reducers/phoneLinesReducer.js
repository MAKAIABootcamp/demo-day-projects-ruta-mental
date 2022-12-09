import { phoneLinesTypes } from "../types/phoneLinesTypes";
const initialState = {
    phoneLines: []
};

export const phoneLinesReducer = (state = initialState, action) => {

    switch (action.type) {

        case phoneLinesTypes.PHONELINES_FILL:

            return { ...state, phoneLines: [...action.payload]};

        default:
            return state;
    }
}