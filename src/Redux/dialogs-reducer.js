const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ],
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
    ],
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: {
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

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});
export default dialogsReducer;