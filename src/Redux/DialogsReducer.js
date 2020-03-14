const  ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (newMessage) => ({
    type: ADD_MESSAGE, newMessage
});

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages:  [...state.messages, {message: action.newMessage, id: 6 }]
            };
        default:
            return state;
    }
}

export default dialogsReducer;