import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {mapDispatchToProps} from "./utils/Utils";
import {DEFINITION} from "./utils/DEFINITIONS";
import {initializeApp} from "firebase/app";
import LoginScreen from "./screens/login_screen/LoginScreen";
import SplashScreen from "./screens/splash_screen/SplashScreen";
import { withCookies, Cookies } from 'react-cookie';
import {SET_STATE} from "./redux/setState";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import UserObject from "./objects/UserObject";
import MyNotes from "./screens/MyNotes/MyNotes";
import Navigation from "./screens/Navigation";


class App extends React.Component {

    db = null;
    constructor(props) {
        super(props);
        this.initFireBase();

    }

    componentDidMount() {
        this.db=getFirestore();
        this.checkIfUserConnected();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props[DEFINITION.SPLASH_SCREEN]!=nextProps[DEFINITION.SPLASH_SCREEN]
    }


    render() {
        return (
            <div className="App">

                {
                    this.props[DEFINITION.SPLASH_SCREEN]?
                        <SplashScreen/>:
                        this.props[DEFINITION.LOGGED_IN]?
                            <Navigation/>
                            :
                        <LoginScreen/>
                }

            </div>
        )
    }

     initFireBase =async () => {
        const firebaseConfig = {
            apiKey: "AIzaSyCNkISQpD9MHzH61IC8DWIoF0F1FCkdCB8",
            authDomain: "notemytest.firebaseapp.com",
            projectId: "notemytest",
            storageBucket: "notemytest.appspot.com",
            messagingSenderId: "837157730025",
            appId: "1:837157730025:web:85acb34c30ae2d0c662278",
            measurementId: "G-ZCZ3PT61YK"
        };

        await initializeApp(firebaseConfig);


    }

    loadUserData=async (uid)=>{
        const user = doc(this.db, "users",uid)
        const userSnap = await getDoc(user);
        const userObject=new UserObject(userSnap.data());
        this.props[SET_STATE]({
            [DEFINITION.SPLASH_SCREEN]:false,
            [DEFINITION.LOGGED_IN]:true,
            [DEFINITION.CURRENT_USER]:userObject
        })
    }

    checkIfUserConnected=async ()=>{

        const { cookies } = this.props;
        if(cookies.get(DEFINITION.USER_UID)!=undefined ){
            await this.loadUserData(cookies.get(DEFINITION.USER_UID));
        }else{
            this.props[SET_STATE]({
                [DEFINITION.SPLASH_SCREEN]:false
            })
        }
    }
}

const mapStateToProps = (state) => {

    return {
        [DEFINITION.SPLASH_SCREEN]: state.appReducer[DEFINITION.SPLASH_SCREEN],
        [DEFINITION.LOGGED_IN]:state.appReducer[DEFINITION.LOGGED_IN]
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App));

