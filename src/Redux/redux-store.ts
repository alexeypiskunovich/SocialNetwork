import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import profileReducer from './profile-reducer.ts';
import dialogsReducer from './dialogs-reducer.ts';
import sidebarReducer from './sidebar-reducer.ts';
import usersReducer from './users-reducer.ts';
import authReducer from './auth-reducer.ts';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer.ts';
import chatReducer from './chat-reducer.ts';

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});


export type InferActionsTypes<T>=T extends {[key:string]: (...args:any[])=>infer U}? U:never

type StoreType = typeof store;
export type AppStateType = ReturnType<StoreType['getState']>;

export type BaseThunkType<A extends Action, R=Promise<void>>=ThunkAction<R, AppStateType, unknown, A>

export default store;
