import React from 'react';
import {addMessageActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {addMessageActionCreator}),
    withAuthRedirect
)(Dialogs)

