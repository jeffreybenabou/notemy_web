import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {mapDispatchToProps} from "./utils/Utils";
import {DEFINITION} from "./utils/DEFINITIONS";


import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import LoginScreen from "./screens/login_screen/LoginScreen";

class App extends React.Component {

    constructor() {
        super();

        this.initFireBase();
    }



    render() {
        return (
            <div className="App">
                <LoginScreen/>
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
}

const mapStateToProps = (state) => {

    return {
        [DEFINITION.TEST]: state.appReducer[DEFINITION.TEST]
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

