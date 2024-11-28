import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField,  GetStringKeys,  Input} from '../common/FormsControl/FormsControl.tsx';
import { required } from '../../utils/validators/validators.ts';
import { useDispatch, useSelector} from "react-redux"
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControl/FormsControl.module.css'
import {AppStateType} from '../../Redux/redux-store.ts' 
import { login } from '../../Redux/auth-reducer.ts';

type LoginFormOwnProps={
    captchaUrl:string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps>& LoginFormOwnProps>=({handleSubmit, error, captchaUrl})=>{//(props) props.handleSubmit быдо сократили код 

    return (
     <form onSubmit={handleSubmit}>
        {createField<LoginFormValuesTypeKeys>("Login", "login", [required], Input)}
        {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type:"password"})}
        {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe",[], Input, {type:"checkbox"}, "remember me")}
        {/* <div>
            <Field placeholder={"Password"} name={"password"} type={"password"}
            validate={[required]} 
            component={Input}/>
        </div> */}
        
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}
        {error && <div className={style.formSammaryError}>
            {error}
        </div>
        }
        <div>
            <button>Login</button> 
        </div>
     </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form:'login'//просто имя так как form будет много, не связано redux-store 
})(LoginForm)


export type LoginFormValuesType={
    login:string
    password:string
    rememberMe:boolean
    captcha:string

}
export type LoginFormValuesTypeKeys= GetStringKeys<LoginFormValuesType>


export const Login: React.FC<MapDispatchPropsType>=(props)=>{
    const captchaUrl=useSelector((state: AppStateType)=> state.auth.captchaUrl)
    const isAuth=useSelector((state: AppStateType)=> state.auth.isAuth)
    
    const dispatch=useDispatch()

    const onSubmit=(formData:LoginFormValuesType)=>{
        dispatch(login(formData.login, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth){
        return<Navigate to={"/profile"}/>
    }
    return <div>
     <h1> LOGIN</h1>
     <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
     </div>
}
