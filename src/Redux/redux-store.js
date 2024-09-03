
import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import profilReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import {thunk as thunkMiddleware} from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from './app-reducer';

const store = configureStore({
  reducer: {
    profilePage: profilReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
  }
}, 
applyMiddleware(thunkMiddleware));



window.store=store;
export default store;