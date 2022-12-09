import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { placesTypes } from "../types/placesTypes";

const collectionName = 'infoPlacesByLocation';
const placesCollection = collection(database, collectionName);

export const actionFillPlacesAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(placesCollection);
        const places = [];
        try {
            querySnapshot.forEach(element => {
                const place = {
                    id: element.id,
                    ...element.data()
                }
                places.push(place)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillPlacesSync(places));

        }
    }
}

const actionFillPlacesSync = (places) => {
    return {
      type: placesTypes.PLACES_FILL,
      payload: places
    };
  };
