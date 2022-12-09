import { placesTypes } from "../types/placesTypes";
const initialState = {
    places: []
};

export const placesReducer = (state = initialState, action) => {

    switch (action.type) {

        case placesTypes.PLACES_FILL:

            return { ...state, places: [...action.payload]};

        default:
            return state;
    }
}