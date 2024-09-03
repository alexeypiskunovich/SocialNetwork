import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../utils/validators/validators";



const Dialogs = (props) => {


    let state=props.dialogsPage;
    let dialogsElements =state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let MessagesElemnt=state.MessagesData.map(m => <Message text={m.text} key={m.id}/>);
  

    let addNewMessage=(values)=>{
        props.sendMessageCreator(values.newMessageBody);
    }
    if(!props.isAuth) return <Navigate to="/Login"/> ;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitem}>
                <div className={s.dialo}>
                {dialogsElements}
                </div>
                <div className={s.messages}>
                <div>
                {MessagesElemnt}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>

    );
}

const maxLength50= maxLengthCreator(50)
const AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <div><Field  component ={Textarea} validate={[required, maxLength50]} name ="newMessageBody" 
                placeholder='Enter your message' /></div>
                <div><button >Send</button></div>
            </div>
        </form>
    )
}
const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;