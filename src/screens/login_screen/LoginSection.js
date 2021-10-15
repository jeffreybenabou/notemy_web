import React from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../utils/Utils";
import './login.css'
import InputComponent from "../../components/input_component/InputComponent";
import {strings} from "../../utils/localization";
import ButtonComponent from "../../components/button_component/ButtonComponent";
import {TYPE_OF_ICON} from "../../utils/GetIcon";
import {signInWithPopup,onAuthStateChanged, GoogleAuthProvider,getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore,addDoc,collection } from "firebase/firestore";






class LoginSection extends React.Component {

    componentDidMount() {
        this.authListeners();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        return (
            <div id={"loginSection"}>
                {
                    this.leftSide()
                }
                {
                    this.rightSide()
                }

            </div>
        )
    }

    leftSide = () => {
        return (
            <div id={"leftSide"}>

            </div>
        )
    }

    rightSide = () => {
        return (
            <div id={"rightSide"}>
                <div id={'top'}>
                    <InputComponent
                        placeholder={strings.phone}
                    />
                    <InputComponent
                        placeholder={strings.code}
                    />
                    <ButtonComponent/>
                </div>
                <div id={"bottom"}>
                    <ButtonComponent
                        onClick={this.signInWithFacebook}
                        iconColor={"blue"}
                        iconSize={10}
                        iconType={TYPE_OF_ICON.FACEBOOK}
                    />
                    <ButtonComponent
                        onClick={this.signInWithGmail}
                        iconColor={"blue"}
                        iconSize={10}
                        iconType={TYPE_OF_ICON.GMAIL}
                    />
                    <ButtonComponent
                        onClick={this.signInWithTwitter}
                        iconColor={"blue"}
                        iconSize={10}
                        iconType={TYPE_OF_ICON.TWITTER}
                    />
                </div>

            </div>
        )
    }

    signInWithTwitter=()=>{


    }
    signInWithGmail=async ()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
       auth.useDeviceLanguage();
    await    signInWithPopup(auth, provider)
            .then((result) => {

                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(error)
            // ...
        });
    }
    signInWithFacebook=()=>{

    }

    authListeners=  ()=>{
        const auth = getAuth();
       onAuthStateChanged(auth,async(user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                alert(JSON.stringify(user))


                const db = getFirestore();
                try {
                    const userObject={
                        currentState:[],
                        fav:[],
                        initLogin:true,
                        isSubscribed:false,
                        name:'',
                        pickedCategory:[]


                    }
                    const docRef = await addDoc(collection(db, "test"), {
                        first: "Ada",
                        last: "Lovelace",
                        born: 1815
                    });

                } catch (e) {
                    console.error("Error adding document: ", e);
                }


            } else {
                // User is signed out
                // ...
            }
        });
    }


}

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);
