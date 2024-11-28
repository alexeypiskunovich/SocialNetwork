import React, { useEffect, useRef, useState} from "react"
import {  sendMessage, startMessagesListening, stopMessagesListening } from "../../Redux/chat-reducer.ts"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../../Redux/redux-store.ts"


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}


const ChatPage: React.FC = () => {
    
    return <>
        <Chat />
    </>
}



const Chat: React.FC = () => {
    const dispatch =useDispatch()
   
    const status=useSelector((state:AppStateType)=>state.chat.status)

    useEffect(()=>{
        dispatch(startMessagesListening())
        return ()=>{
            dispatch(stopMessagesListening())
        }
    }, [])
    
    return <>
    {status === 'error' && <div>Some error occured.Please refresh the page</div>}
        <>
        <Messages />
        <AddMessageForm  />
        </>
    
    </>
}


const Messages: React.FC<{}> = ({}) => {
    const messagesAnchorRef= useRef<HTMLDivElement>(null);
    const messages=useSelector((state:AppStateType)=>state.chat.messages)
    const [isAutoScroll,setIsAutoScroll]=useState(true)
    const scrollHandler=(e:React.UIEvent<HTMLDivElement, UIEvent>)=>{
        const element =e.currentTarget;
        if(Math.abs((element.scrollHeight-element.scrollTop)-element.clientHeight)<300)
        {
            !isAutoScroll&& setIsAutoScroll(true)
        }else{
            isAutoScroll&& setIsAutoScroll(false)
        }
    }

    useEffect(()=>{
        if (isAutoScroll){
        messagesAnchorRef.current?.scrollIntoView({behavior:"smooth"})
        }
    },[messages])
    return <div style={{ height: '400px', overflowY: 'auto' }} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message key={m.id} message={m} />)}
        <div ref={messagesAnchorRef}></div>
    </div>
}



const Message:React.FC<{ message: ChatMessageType }> =  React.memo(({ message })=> {
   
    return <>
    
        <img src={message.photo} style={{ width: '30px' }} /><b>{message.userName}</b>
        <br />
        {message.message}
        <hr />
    </>
})



const AddMessageForm: React.FC<{ }> = () => {
    const [message, setMessage] = useState('');
    const dispatch=useDispatch()

    const status=useSelector((state:AppStateType)=>state.chat.status)

    const sendMessageHandler=()=>{
        if(!message){
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return <><div>
        <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
    </div>
        <div>
            <button disabled={status !=='ready'} onClick={sendMessageHandler}>Send</button>
        </div>
    </>
}
export default ChatPage