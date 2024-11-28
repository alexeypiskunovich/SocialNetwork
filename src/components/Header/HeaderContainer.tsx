import React from 'react';
import Header, { MapPropsType, DispatchPropsType } from './Header.tsx';
import { connect } from 'react-redux';
import { logout } from '../../Redux/auth-reducer.ts';
import { AppStateType } from '../../Redux/redux-store.ts';


class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType>{
  
    render(){
      return<Header {...this.props}/>
    }
}
const mapStateToProps=(state:AppStateType)=>({
  isAuth:state.auth.isAuth,
  login:state.auth.login,
})
export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);