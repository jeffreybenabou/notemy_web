import { AiFillFacebook } from "react-icons/ai";
import {isUndefined} from "./Utils";
import * as PropTypes from "prop-types";
import { AiFillTwitterSquare,AiFillMail,AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

export const GetIcon=(props)=>{
    switch (props.type){
        case TYPE_OF_ICON.FACEBOOK:
            return <AiFillFacebook size={isUndefined(props.size)?15:props.size}/>
        case TYPE_OF_ICON.GMAIL:
            return <AiFillMail size={isUndefined(props.size)?15:props.size}/>
        case TYPE_OF_ICON.TWITTER:
            return <AiFillTwitterSquare size={isUndefined(props.size)?15:props.size}/>
        case TYPE_OF_ICON.ARROW_LEFT:
            return  <AiOutlineArrowLeft size={isUndefined(props.size)?15:props.size}/>
        case TYPE_OF_ICON.ARROW_RIGHT:
            return  <AiOutlineArrowRight size={isUndefined(props.size)?15:props.size}/>

        default:
            return <div/>
    }
}

export const TYPE_OF_ICON={
    FACEBOOK:1,
    GMAIL:2,
    TWITTER:3,
    ARROW_LEFT:4,
    ARROW_RIGHT:5
}

GetIcon.propTypes={
    size:PropTypes.number,
    color:PropTypes.string,
    type:PropTypes.number
}
