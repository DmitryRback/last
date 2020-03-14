import React from "react";
import {connect} from "react-redux";
import {
    setPageNumber,
    setTotalUsersCount,
    requestUsers,
    toggleFollowingProgress,
    pageChange, unfollow, follow
} from "../../Redux/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getToggleFollowingProgress,
    getTotalUsersCount, getUsersSuperSelector
} from "../../Redux/UsersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props
        requestUsers(currentPage, pageSize)
    }

    onPageChange = (pageNumber) => {
        const {pageChange, pageSize} = this.props
        pageChange(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onPageChange={this.onPageChange} totalItemsCount={this.props.totalItemsCount}
                       pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                       users={this.props.users} Progress={this.props.Progress}
                       unfollow={this.props.unfollow} follow={this.props.follow}/>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        Progress: getToggleFollowingProgress(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setPageNumber, setTotalUsersCount,
        toggleFollowingProgress,
        requestUsers, pageChange, unfollow, follow
    })
)(UsersContainer)
