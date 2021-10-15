import { AiFillFacebook } from "react-icons/ai";
import {isUndefined} from "./Utils";
import * as PropTypes from "prop-types";
import { AiFillTwitterSquare,AiFillMail } from "react-icons/ai";

export const GetIcon=(props)=>{
    switch (props.type){
        case TYPE_OF_ICON.FACEBOOK:
            return <AiFillFacebook size={isUndefined(props.size)?15:props.size}/>
        case TYPE_OF_ICON.GMAIL:
            return <AiFillMail size={isUndefined(props.size)?15:props.size}/>
        case TYPE_OF_ICON.TWITTER:
            return <AiFillTwitterSquare size={isUndefined(props.size)?15:props.size}/>

        default:
            return <div/>
    }
}

export const TYPE_OF_ICON={
    FACEBOOK:1,
    GMAIL:2,
    TWITTER:3
}

GetIcon.propTypes={
    size:PropTypes.number,
    color:PropTypes.string,
    type:PropTypes.number
}
