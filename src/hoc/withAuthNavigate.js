import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth,
  });
export const withAuthNavigate =(Component)=>{

    class NavigateComponent extends React.Component{
        render(){
            if (!this.props.isAuth) return <Navigate to='/Login'/>
            return <Component{...this.props}/>
        }
    }
    
    let  ConnectAuthNavigateComponent=connect(mapStateToPropsForNavigate)(NavigateComponent);
      
    return ConnectAuthNavigateComponent;


}  