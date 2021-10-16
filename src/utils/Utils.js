import {setState, SET_STATE} from '../redux/setState'

export const mapDispatchToProps = (dispatch) => {
    return {
        [SET_STATE]: async (state) => await dispatch(setState(state)),
    };

}

export const isUndefined=(value)=>{
    return value!==undefined&&value!=null
}
