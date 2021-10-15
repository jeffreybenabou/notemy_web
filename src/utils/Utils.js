import {setState, typeOfAction} from '../redux/setState'

export const mapDispatchToProps = (dispatch) => {
    return {
        [typeOfAction]: async (state) => await dispatch(setState(state)),
    };

}

export const isUndefined=(value)=>{
    return value!==undefined&&value!=null
}
