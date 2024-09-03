import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator} from "../../Redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,
       
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        sendMessageCreator:(newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs);