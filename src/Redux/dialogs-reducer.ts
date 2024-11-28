import { InferActionsTypes } from "./redux-store";



type DialogType={
    id:number
    name:string
}
type MessageType={
    id: number
    text:string
}
let initialState = {
    dialogsData: [{
            id: 1,
            name: 'lesha'
        },
        {
            id: 2,
            name: 'andrey'
        },
        {
            id: 3,
            name: 'yura'
        },
        {
            id: 4,
            name: 'nadya'
        },
        {
            id: 5,
            name: 'alexsandr'
        },
        {
            id: 6,
            name: 'victor'
        },
        {
            id: 6,
            name: 'victor'
        },
        {
            id: 6,
            name: 'victor'
        },
        {
            id: 6,
            name: 'victor'
        },
        {
            id: 6,
            name: 'victor'
        },
    ] as Array<DialogType>,
    MessagesData: [{
            id: 1,
            text: 'Hi'
        },
        {
            id: 2,
            text: 'How are you?'
        },
        {
            id: 3,
            text: 'yo'
        },
        {
            id: 4,
            text: 'yo'
        },
        {
            id: 5,
            text: 'yo'
        },
    ] as Array<MessageType>,
}

const dialogsReducer = (state = initialState, action:ActionsType):initialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE': {
            let body = action.newMessageBody;
            return {
                ...state,
                MessagesData: [...state.MessagesData, {
                    id: 6,
                    text: body
                }]
            };
        }
        default:
            return state;
    }
}

export const actions={
    sendMessage :(newMessageBody:string) => ({
        type: 'SN/DIALOGS/SEND_MESSAGE',
        newMessageBody
    }as const)
}

export default dialogsReducer;
export type initialStateType=typeof initialState
type ActionsType=InferActionsTypes<typeof actions>