const INITIALAIZED_SUCCESS = 'app/INITIALAIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALAIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALAIZED_SUCCESS,
        /*payload: {

        }*/
    }
}


export default appReducer;