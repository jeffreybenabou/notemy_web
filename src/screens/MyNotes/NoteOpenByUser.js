import React from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../utils/Utils";
import './my_notes.css'
import {DEFINITION} from "../../utils/DEFINITIONS";
import SliderComponent from "../../components/slider_component/SliderComponent";
import { query,getFirestore,getDocs, where,collection } from "firebase/firestore";



class NoteOpenByUser extends React.Component{

    state={
        notes:[],
        currentIndex:0,
        currentNoteToDisplay:{
            array:[]
        }
    }
    db= getFirestore();
    componentDidMount() {
        this.loadNotes();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return this.state.currentIndex!=nextProps.currentIndex||JSON.stringify(this.state.currentNoteToDisplay)!=JSON.stringify(nextProps.currentNoteToDisplay);
    }

    render() {
        return(
            <div className={"grid-container"} >
                {
                    this.state.notes.length>0&&
                    <SliderComponent
                        lengthOfNotes={this.state.notes.length}
                        images={this.state.currentNoteToDisplay.array}/>
                }

            </div>
        )
    }

    loadNotes=async ()=>{
        const notes=[];
        const allNotes = collection(this.db, "allNotes");
        const q = query(allNotes, where("openBy", "==", this.props[DEFINITION.CURRENT_USER].uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            notes.push(doc.data())
        });
        this.setState({
            notes,
            currentNoteToDisplay:notes[3]
        })
    }


}
const mapStateToProps=(state)=>{
    return{
        [DEFINITION.CURRENT_USER]:state.appReducer[DEFINITION.CURRENT_USER]
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteOpenByUser);
