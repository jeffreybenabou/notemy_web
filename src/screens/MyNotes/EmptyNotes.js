import React from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../utils/Utils";
import './my_notes.css'
import {DEFINITION} from "../../utils/DEFINITIONS";


class EmptyNote extends React.Component{

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        return(
            <div className={"grid-container"}>
                <input placeholder={"add new note "}/>
            </div>
        )
    }


}
const mapStateToProps=(state)=>{
    return{
        [DEFINITION.CURRENT_USER]:state.appReducer[DEFINITION.CURRENT_USER]
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmptyNote);
