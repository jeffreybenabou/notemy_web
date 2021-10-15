import {connect} from "react-redux";
import React from 'react';
import {isUndefined, mapDispatchToProps} from "../../utils/Utils";
import "./inputComponent.css"
import * as PropTypes from "prop-types";

class InputComponent extends React.Component {

    state = {
        value: ''
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            this.props.placeholder != nextProps.placeholder ||
            this.state.value != nextState.value
        )
    }

    render() {
        return (
            <div id={"container"}>
                <input
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                    value={this.state.value}/>
            </div>
        )
    }

    onChange = (event) => {

        this.setState({
            value: event.target.value
        })
        if (isUndefined(this.props.onChange)) {
            this.props.onChange(event.target.value);
        }
    }
}

InputComponent.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
