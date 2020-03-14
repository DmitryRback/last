import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import siteBarReducer from "./SiteBarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const  ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hello how are youre?', id: 1, likesCount: 15},
                {message: 'It\'s my first post', id: 2, likesCount: 20},
                {message: 'Hello ', id: 3, likesCount: 15},
                {message: 'post', id: 4, likesCount: 0},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {
                    name: 'Dmitry Poloviy',
                    id: 1,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
                {
                    name: 'Vasilisa Poloviy',
                    id: 2,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
                {
                    name: 'Sofia Poloviy',
                    id: 3,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
                {
                    name: 'Julia Poloviy',
                    id: 4,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
                {
                    name: 'Natalia Poloviy',
                    id: 5,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
            ],
            messages: [
                {message: 'Hi', id: 1},
                {message: 'How are you How are you How are you How are you', id: 2},
                {message: 'How youre Life?', id: 3},
                {message: 'EDBI', id: 4},
                {message: 'LBCDN', id: 5},
            ],
            newMessageText: '',
        },
        siteBar: {
            friends: [
                {
                    name: 'Dmitry Poloviy',
                    id: 1,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
                {
                    name: 'Vasilisa Poloviy',
                    id: 2,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
                {
                    name: 'Sofia Poloviy',
                    id: 3,
                    img: 'https://previews.123rf.com/images/puruan/puruan1702/puruan170208178/72742074-boy-avatar-icon-in-colors-.jpg'
                },
            ],
        },
    },
    _callsubscriber(){
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callsubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = siteBarReducer(this._state.siteBar, action);


        this._callsubscriber(this._state);
    }

};
export const addPostActionCreator = () => ({
    type: ADD_POST
});
export  const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT, postText: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});
export const updateMessageTextActionCreator = (message) => ({
    type: UPDATE_MESSAGE_TEXT, messageText: message
});

export default store;