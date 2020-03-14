let CHANGE_STATE = 'CHANGE_STATE';

let initialState = {
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
    navBar: true
};
const siteBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATE:
            if (state.navBar === true) {
                return {
                    ...state,
                    navBar: false
                }
            }
            return {
                ...state,
                navBar: true
            }
        default:
            return state;

    }
}
export const changeVisibleNavBar = () => ({type: CHANGE_STATE})
export default siteBarReducer;