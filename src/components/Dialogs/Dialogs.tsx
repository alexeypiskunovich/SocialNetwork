import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.tsx";
import Message from "./Message/Message.tsx";
import { Navigate } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { createField, Textarea } from "../common/FormsControl/FormsControl.tsx";
import { maxLengthCreator, required } from "../../utils/validators/validators.ts";
import { initialStateType } from "../../Redux/dialogs-reducer.ts";


type PropsType={
    dialogsPage: initialStateType
    sendMessage:(messageText:string)=>void
}
export type NewMessageFormValuesType={
    newMessageBody:string
    
}

const Dialogs:React.FC<PropsType> = (props) => {

    let state=props.dialogsPage;

    let dialogsElements =state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let MessagesElemnt=state.MessagesData.map(m => <Message text={m.text} key={m.id}/>);
  

    let addNewMessage=(values:NewMessageFormValuesType)=>{
        props.sendMessage(values.newMessageBody);
    }
    
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


export type NewMessageFormValuesKeysType= Extract<keyof NewMessageFormValuesType, string>
type PropType={}

const maxLength50= maxLengthCreator(50)
const AddMessageForm:React.FC<InjectedFormProps<NewMessageFormValuesType, PropType>& PropType>=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                {createField<NewMessageFormValuesKeysType>("Enter your message", "newMessageBody", [required], Textarea)}
                   </div>
                <div><button >Send</button></div>
            </div>
        </form>
    )
}
const AddMessageFormRedux=reduxForm<NewMessageFormValuesType>({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;