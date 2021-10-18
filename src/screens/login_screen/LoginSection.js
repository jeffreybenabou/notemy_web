import React from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../utils/Utils";
import './login.css'
import InputComponent from "../../components/input_component/InputComponent";
import {strings} from "../../utils/localization";
import ButtonComponent from "../../components/button_component/ButtonComponent";
import {TYPE_OF_ICON} from "../../utils/GetIcon";
import {
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";
import {getFirestore, getDoc, setDoc, collection, doc} from "firebase/firestore";
import {DEFINITION} from "../../utils/DEFINITIONS";
import {withCookies} from "react-cookie";
import {SET_STATE} from "../../redux/setState";


class LoginSection extends React.Component {

    db = getFirestore();

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

    signInWithTwitter = () => {


    }
    signInWithGmail = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        auth.useDeviceLanguage();
        await signInWithPopup(auth, provider)
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
    signInWithFacebook = () => {

    }

    authListeners = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const { cookies } = this.props;
                cookies.set(DEFINITION.USER_UID, user.uid, { path: '/' });
                const userData = await this.userExist(user);

                if (userData.exist) {
                    this.loadUserData(user)
                } else {
                 await   this.registerNewUser(user);
                }


            } else {
                // User is signed out
                // ...
            }
        });
    }

    userExist = async (user) => {

        const userRef = doc(this.db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const exist = await userSnap.exists();
        return {
            exist,
            userData: userSnap
        };


    }

    loadUserData = (user) => {
        this.navToNextScreen(user);
    }

    registerNewUser = async (user) => {
        const allCategoriesRef = doc(this.db, "category","category")
        const allCategories = await getDoc(allCategoriesRef);

        const categories=allCategories.data().categorys.map((item)=>{
            return item.title
        })


        const userData = {
            name: "",
            totalNoteOpen: [],
            rating: 0,
            watchedNote: [],
            currentState: [],
            pickedCategory: categories,
            totalStarRanked: 0,
            fav: [],
            uid: user.uid,
            isSubscribed: false,
            initLogin: true
        };

        await setDoc(doc(this.db, "users", user.uid), userData);
        this.navToNextScreen(userData);


    }

    navToNextScreen=(user)=>{
        this.props[SET_STATE]({
            [DEFINITION.CURRENT_USER]:user,
            [DEFINITION.LOGGED_IN]:true,
        })
    }


}

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(withCookies(LoginSection));
