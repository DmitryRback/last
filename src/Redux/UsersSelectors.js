import {createSelector} from "reselect";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        Progress: state.usersPage.toggleFollowingProgress,
        isFetching: state.usersPage.isFetching
    }
}


export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return  users.filter(u => u)
    
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalItemsCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getToggleFollowingProgress = (state) => {
    return state.usersPage.toggleFollowingProgress
}
export const getIsFetching= (state) => {
    return state.usersPage.isFetching
}
