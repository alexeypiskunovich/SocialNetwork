import dialogsReducer from "./dialogs-reducer";
import profilReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [{
                    id: 1,
                    text: 'Hi, how are you',
                    likesCount: 12
                },
                {
                    id: 2,
                    text: 'It is my first post',
                    likesCount: 11
                },
            ],
            newPostText: 'samurai'
        },

        dialogsPage: {
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
            newMessageBody:""
        },
        sidebar:[]
    },
    _callSubscriber() {
        console.log('hi')
    },

    getState(){
        return this._state;
    },
    subscribe (observer){
        this._callSubscriber = observer;
    
    },

    dispatch(action){//{type: 'ADD-POST'}
        this._state.usersPage=usersPage(this.__state.usersPage, action);
        this._state.profilePage=profilReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar=sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        
    }
    
}



  


export default store;
