import React from "react";
import {connect} from "react-redux";
import {mapDispatchToProps} from "../utils/Utils";
import {withCookies} from "react-cookie";
import MyNotes from "./MyNotes/MyNotes";
import {strings} from "../utils/localization";
import ButtonComponent from "../components/button_component/ButtonComponent";
import {SET_STATE} from "../redux/setState";
import {DEFINITION} from "../utils/DEFINITIONS";
import Settings from "./settings/Settings";
import AllNotes from "./AllNotes/AllNotes";


class Navigation extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flex: 1, backgroundColor: 'hotpink', flexDirection: 'column'}}>

                <div style={{display: 'flex', paddingTop: '1%',paddingBottom: '1%', width: '100%', backgroundColor: 'blue'}}>
                    {
                        this.navigationButton({
                            text: strings.myNotes,
                            name: 'myNotes',
                            onClick: this.onClick,
                        })
                    }
                    {
                        this.navigationButton({
                            text: strings.allNotes,
                            name: 'allNotes',
                            onClick: this.onClick,
                        })
                    }
                    {
                        this.navigationButton({
                            onClick: this.onClick,
                            text: strings.settings,
                            name: 'settings'
                        })
                    }
                </div>
                {
                    this.props[DEFINITION.MY_NOTES] ?
                        <MyNotes/>
                        :
                        this.props[DEFINITION.SETTINGS] ?
                            <Settings/>
                            :
                            this.props[DEFINITION.ALL_NOTES] &&
                            <AllNotes/>
                }


            </div>

        )
    }

    navigationButton = (props) => {
        return <ButtonComponent
            name={props.name}
            onClick={props.onClick}
            title={props.text}/>
    }

    onClick = (e) => {
        switch (e.currentTarget.getAttribute('name')) {
            case "allNotes":
                this.props[SET_STATE]({
                    [DEFINITION.ALL_NOTES]: true,
                    [DEFINITION.MY_NOTES]: false,
                    [DEFINITION.SETTINGS]: false
                })
                break;
            case "myNotes":
                this.props[SET_STATE]({
                    [DEFINITION.ALL_NOTES]: false,
                    [DEFINITION.MY_NOTES]: true,
                    [DEFINITION.SETTINGS]: false
                })
                break;
            case "settings":
                this.props[SET_STATE]({
                    [DEFINITION.ALL_NOTES]: false,
                    [DEFINITION.MY_NOTES]: false,
                    [DEFINITION.SETTINGS]: true
                })
                break;
        }
        console.log("e.currentTarget.getAttribute('name')", e.currentTarget.getAttribute('name'))
    }
}

const mapStateToProps = (state) => {
    return {
        [DEFINITION.ALL_NOTES]: state.appReducer[DEFINITION.ALL_NOTES],
        [DEFINITION.SETTINGS]: state.appReducer[DEFINITION.SETTINGS],
        [DEFINITION.MY_NOTES]: state.appReducer[DEFINITION.MY_NOTES],

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Navigation));

