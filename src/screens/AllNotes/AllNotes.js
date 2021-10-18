import React from "react";
import {connect} from "react-redux";
import {withCookies} from "react-cookie";
import {mapDispatchToProps} from "../../utils/Utils";


class AllNotes extends React.Component{
    render() {
        return(
            <div style={{display:'flex',flex:1,backgroundColor:'hotpink',flexDirection:'column'}}>


            </div>

        )
    }

}

const mapStateToProps=(state)=>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(AllNotes));

