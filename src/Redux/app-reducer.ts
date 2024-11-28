import { getAuthUserData } from "./auth-reducer.ts";
import { InferActionsTypes } from "./redux-store.ts";





let initialState = {
    initialized:false
}
export type InitialStateType =typeof initialState
type ActionType= InferActionsTypes<typeof actions>


const appReducer = (state = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized:true,
                }
                
        default:
            return state;
    }
}


export const actions={
  initialisedSuccess:()=>({type:'SN/APP/INITIALIZED_SUCCESS'}as const)
}


export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(getAuthUserData()); // Получаем данные авторизации
  Promise.all([promise])
    .then(() => {
      setTimeout(() => { 
        dispatch(actions.initialisedSuccess()); 
      }, 1000); 
    });
};




export default appReducer;