import React from 'react';
import "./splash_screen.css";
import "../../res/global_style.css";
import {mapDispatchToProps} from "../../utils/Utils";
import {connect} from "react-redux";
import  animationData from '../../res/lottie/splash.json'
import Logo from '../../res/images/logo.png'


class SplashScreen extends React.Component{
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,

        };


        return (
            <div id={"splash_screen"}>

                <div>
                    NoteMy
                </div>

                <img id={"logo_image"} src={Logo}/>
                <div className={"loader"}/>
                {/*<Lottie options={defaultOptions}

                        title={"dsaadsasdsaddsa"}

                        width={"25%"}

                        isStopped={false}
                        isPaused={false}/>*/}
            </div>
        )
    }
}

const mapStateToProps=()=>{
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
