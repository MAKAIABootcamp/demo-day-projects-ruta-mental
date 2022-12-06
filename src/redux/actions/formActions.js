import { formTypes } from "../types/formTypes";

export const addFormSync = (responses) => {
    return {
        type: formTypes.ADD_FORM,
        payload: responses,
    };
}