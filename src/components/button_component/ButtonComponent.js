import {connect} from "react-redux";
import React from 'react';
import {isUndefined, mapDispatchToProps} from "../../utils/Utils";
import "./buttonComponent.css"
import * as PropTypes from "prop-types";
import {GetIcon} from "../../utils/GetIcon";

class ButtonComponent extends React.Component {



    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            true
        )
    }

    render() {
        return (
            <div id={"container"}>
                <button onClick={this.props.onClick}>
                    <div>
                        {
                            this.props.title
                        }
                    </div>
                    <GetIcon
                        size={this.props.iconSize}
                        type={this.props.iconType}
                        color={this.props.iconColor} />
                </button>
            </div>
        )
    }

}

ButtonComponent.propTypes = {
    onClick: PropTypes.func,
    title:PropTypes.string,
    iconSize:PropTypes.number,
    iconColor:PropTypes.string,
    iconType:PropTypes.number
};
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
