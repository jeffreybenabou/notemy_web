import {SET_STATE} from "./setState";
import {DEFINITION} from "../utils/DEFINITIONS";


export const initialState = {
    [DEFINITION.CURRENT_USER]:null,
    [DEFINITION.SPLASH_SCREEN]:true,
    [DEFINITION.LOGGED_IN]:false,
    [DEFINITION.ALL_NOTES]:true,
    [DEFINITION.MY_NOTES]:false,
    [DEFINITION.SETTINGS]:false
};


const AppReducer = (state = initialState, action) => {


    let stateToChange = {...state};
    if(action!=undefined&&action.type==SET_STATE){

        try {
            Object.keys(action.state).map((key) => {
                stateToChange[key] = action.state[key];
            });
        } catch (e) {
        }
        return {
            ...stateToChange,
        };
    }else{
        return {
            ...stateToChange
        }
    }

};

export default AppReducer;
