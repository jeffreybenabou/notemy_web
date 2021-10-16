import {SET_STATE} from "./setState";
import {DEFINITION} from "../utils/DEFINITIONS";
import {act} from "@testing-library/react";


export const initialState = {
    [DEFINITION.CURRENT_USER]:null,
    [DEFINITION.SPLASH_SCREEN]:true,
    [DEFINITION.LOGGED_IN]:false
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
