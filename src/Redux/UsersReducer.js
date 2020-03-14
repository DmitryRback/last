import {UsersAPI} from "../API/API";
import {updateObjectInArray} from "../Utils/object-helper ";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 12,
    totalItemsCount: 27,
    currentPage: 1,
    isFetching: false,
    toggleFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,"id", action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case  SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.usersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                toggleFollowingProgress: action.isFetching
                    ? [...state.toggleFollowingProgress, action.userId]
                    : state.toggleFollowingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }


}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPageNumber = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let data = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const pageChange = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setPageNumber(pageNumber))
    let data = await UsersAPI.getUsers(pageNumber, pageSize)
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
}
const FollowUnfollow = async (dispatch, id, APIMethod, ActionCreator ) =>{
    dispatch(toggleFollowingProgress(true, id))
    let responce = await APIMethod(id)
    if (responce.data.resultCode === 0) {
        dispatch(ActionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}

export const unfollow = (id) => async (dispatch) => {
    FollowUnfollow(dispatch, id, UsersAPI.unfollow.bind(UsersAPI), unfollowSuccess)
}

export const follow = (id) => async (dispatch) => {
    FollowUnfollow(dispatch, id, UsersAPI.follow.bind(UsersAPI), followSuccess)
}

export default usersReducer;