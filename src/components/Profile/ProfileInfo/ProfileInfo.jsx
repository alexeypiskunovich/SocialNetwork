import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHocks';

const Profileinfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return<Preloader/>
  }

  return (

    <div>
      
      <div className={s.descriptionblock}>
        <img src={profile.photos.large}/>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>

  );
}

export default Profileinfo;