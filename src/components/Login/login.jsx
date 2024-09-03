import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input } from '../common/FormsControl/FormsControl';
import { required } from '../../utils/validators/validators';
import {connect} from "react-redux"
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControl/FormsControl.module.css'

const LoginForm=({handleSubmit, error})=>{//(props) props.handleSubmit быдо сократили код 

    return (
     <form onSubmit={handleSubmit}>
        {createField("Login", "login", [required], Input)}
        {createField("Password", "password", [required], Input, {type:"password"})}
        {createField(null, "rememberMe",[], Input, {type:"checkbox"}, "remember me")}
        {/* <div>
            <Field placeholder={"Password"} name={"password"} type={"password"}
            validate={[required]} 
            component={Input}/>
        </div> */}
    
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

const LoginReduxForm = reduxForm({
    form:'login'//просто имя так как form будет много, не связано redux-store 
})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return<Navigate to={"/profile"}/>
    }
    return <div>
     <h1> LOGIN</h1>
     <LoginReduxForm onSubmit={onSubmit}/>
     </div>
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);