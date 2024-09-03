import { getAuthUserData } from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized:false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true,
                }
                
        default:
            return state;
    }
}



export const initialisedSuccess = () => ({type:INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData()); // Получаем данные авторизации
  Promise.all([promise])
    .then(() => {
      setTimeout(() => { 
        dispatch(initialisedSuccess()); 
      }, 1000); 
    });
};




export default appReducer;