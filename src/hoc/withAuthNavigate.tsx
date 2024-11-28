import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../Redux/redux-store";

const mapStateToPropsForNavigate = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
  } as MapPropsType);

type MapPropsType={
    isAuth:boolean
}
type DispatchPropsType={}
export function withAuthNavigate<WCP extends React.JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<WCP>){

    const NavigateComponent:React.FC< DispatchPropsType & MapPropsType > =(props)=>{
        let {isAuth, ...restProps}=props
        if (!isAuth) return <Navigate to='/Login'/>
        return <WrappedComponent {...restProps as WCP}/>
    }
    
    let  ConnectAuthNavigateComponent=connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForNavigate, {})(NavigateComponent);
      
    return ConnectAuthNavigateComponent;
}