import React from "react";
import Dialogs from "./Dialogs.tsx";
import { actions} from "../../Redux/dialogs-reducer.ts";
import { connect } from 'react-redux';
import { withAuthNavigate } from "../../hoc/withAuthNavigate.tsx";
import { compose } from "redux";
import { AppStateType } from "../../Redux/redux-store.ts";

let mapStateToProps =(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,
       
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthNavigate
)(Dialogs);