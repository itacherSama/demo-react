import React from 'react';
import { setAddMessage, setUpdateMessage } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    let dialogsPage = state.dialogsPage;
    return {
        dialogs: dialogsPage.dialogs,
        messages: dialogsPage.messages,
        newTextForMessage: dialogsPage.newTextForMessage
    }
}

let mapDispatchToProps = {
    setAddMessage,
    setUpdateMessage
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);