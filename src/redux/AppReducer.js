import {typeOfAction} from "./setState";
import {DEFINITION} from "../utils/DEFINITIONS";


export const initialState = {
    [DEFINITION.TEST]:''
};


const AppReducer = (state = initialState, action) => {


    switch (action.type) {
        case [typeOfAction]:
            let stateToChange = {...state};

            try {
                Object.keys(action.state).map((key) => {
                        stateToChange[key] = action.state[key];
                });
            } catch (e) {
            }
            return {
                ...stateToChange,
            };


        default:
            return state;
    }
};

export default AppReducer;
