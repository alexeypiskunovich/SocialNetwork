import React from 'react';
import MyPostsContainer from './My posts/MypostsContainer.tsx';
import Profileinfo from './ProfileInfo/ProfileInfo.tsx';
import { ProfileType } from '../../types/types.ts';

type PropsType = {
  isOwner: boolean
  profile: ProfileType |null
  status: string
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <Profileinfo savePhoto={props.savePhoto} 
                   isOwner={props.isOwner} 
                   profile={props.profile} 
                   status={props.status}
                   saveProfile={props.saveProfile} 
                   updateStatus={props.updateStatus}
                   />
                   {/* error={props.error} */}
      <MyPostsContainer />
    </div>
  );
}

export default Profile;