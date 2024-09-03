import React from 'react';

import MyPostsContainer from './My posts/MypostsContainer';
import Profileinfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div>
      <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;