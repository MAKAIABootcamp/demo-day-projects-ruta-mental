import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { phoneLinesTypes } from "../types/phoneLinesTypes";

const collectionName = 'infoByLocation';
const phoneLinesCollection = collection(database, collectionName);

export const actionFillPhoneLinesAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(phoneLinesCollection);
        const phoneLines = [];
        try {
            querySnapshot.forEach(element => {
                const phoneLine = {
                    id: element.id,
                    ...element.data()
                }
                phoneLines.push(phoneLine)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillPhoneLinesSync(phoneLines));

        }
    }
}

const actionFillPhoneLinesSync = (phoneLines) => {
    return {
      type: phoneLinesTypes.PHONELINES_FILL,
      payload: phoneLines
    };
  };
