import {getAuthUser} from "./auth-thunks";
import {initializedSuccess} from "../app-reducer";

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUser());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })

}