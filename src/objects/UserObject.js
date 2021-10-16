

export default class{
    constructor(props) {

        return{
            name:props.name,
            totalNoteOpen: props.totalNoteOpen,
            rating:props.rating,
            watchedNote: props.watchedNote,
            currentState: props.currentState,
            pickedCategory: props.pickedCategory,
            totalStarRanked: props.totalStarRanked,
            fav: props.fav,
            uid: props.uid,
            isSubscribed: props.isSubscribed,
            initLogin: props.initLogin
        }

    }
}
