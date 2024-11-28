import React from 'react';
import Profile from './Profile.tsx';
import { connect } from 'react-redux';
import { getStatus, getUsersProfile, savePhoto, saveProfile, updateStatus } from '../../Redux/profile-reducer.ts';
import { useParams } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate.tsx';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store.ts';
import { ProfileType } from '../../types/types.ts';

type MapPropsType=ReturnType<typeof mapStateToProps> 
type DispatchPropsType={
  getUsersProfile:(userId:number)=>void
  getStatus:(userId:number)=>void
  updateStatus:(status:string)=>void
  savePhoto:(file: File)=>void 
  saveProfile:(profile:ProfileType)=>Promise<any>
}

type PathParamsType = {
  userId: string;
};

type PropsType = MapPropsType & DispatchPropsType & {
  userId?: string; // Теперь userId может быть не определен
  history?: any; // Добавляем history, если нужно
};
class ProfileContainer extends React.Component<PropsType> {
 
  refreshProfile(){
    let userId:any  = this.props.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId){
        this.props.history.push("/login")
      }
    }
    if(!userId){
      throw new Error("ID should exists in URI params or in state('authorizedUserId')")
    }else{
    this.props.getUsersProfile(userId );
    this.props.getStatus(userId);
    }}
  componentDidMount() {
    
   this.refreshProfile();
  }
  componentDidUpdate(prevProps:PropsType, prevState:PropsType) {
    
    if(this.props.userId!= prevProps.userId)  
    this.refreshProfile();
}

  render() {
   return (
      <Profile {...this.props} 
        isOwner={!this.props.userId}
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus} 
        savePhoto={this.props.savePhoto}/>
    );
  }
}

//let AuthNavigateComponent=withAuthNavigate(ProfileContainer)

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId:state.auth.userId,
  isAuth:state.auth.isAuth,
  //error: state.form['edit-profile']?.syncErrors
});

const ProfileContainerWithParams = (props:PropsType) => {
  const { userId } = useParams<PathParamsType>();
  return <ProfileContainer {...props} userId={userId} />;
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile}), // Подключаем Redux
  withAuthNavigate // Добавляем HOC для проверки авторизации
)(ProfileContainerWithParams); // Экспортируем итоговый компонент