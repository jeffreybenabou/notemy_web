import React from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../utils/Utils";
import './login.css'
import LoginSection from "./LoginSection";

class LoginScreen extends React.Component{

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        return(
            <div className={"grid-container"}>
                <div className={"row"} style={{backgroundColor:'green'}}>

                </div>
                <div className={"row"} id={"middleDiv"} style={{backgroundColor:'grey'}}>
                    <LoginSection/>
                </div>
                <div className={"row"}>

                </div>

            </div>
        )
    }


}
const mapStateToProps=(state)=>{
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
