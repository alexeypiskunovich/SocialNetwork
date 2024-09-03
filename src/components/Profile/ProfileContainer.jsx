import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUsersProfile, updateStatus } from '../../Redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
 
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId){
        this.props.history.push("/login")
      }
    }
    
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
   return (
      <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus} />
    );
  }
}

//let AuthNavigateComponent=withAuthNavigate(ProfileContainer)

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId:state.auth.userId,
  isAuth:state.auth.isAuth
});

const ProfileContainerWithParams = (props) => {
  const { userId } = useParams();
  return <ProfileContainer {...props} userId={userId} />;
};

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus}), // Подключаем Redux
  withAuthNavigate // Добавляем HOC для проверки авторизации
)(ProfileContainerWithParams); // Экспортируем итоговый компонент