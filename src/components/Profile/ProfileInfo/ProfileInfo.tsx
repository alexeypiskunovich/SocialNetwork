import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader.tsx';
import ProfileStatusWithHooks from './ProfileStatusWithHocks.tsx';
import userPhoto from "../../../assed/imguser.webp"
import ProfileDataForm from './ProfileDataForm.tsx';
import { ContactType, ProfileType } from '../../../types/types.ts';

type PropsType = {
  isOwner: boolean
  profile: ProfileType |null
  status: string
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}


const Profileinfo: React.FC<PropsType> = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.type.startsWith('image')) {
        savePhoto(file);
      }
    }
  };
  
  

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={s.descriptionblock}>
      <img src={profile.photos?.large || userPhoto} className={s.mainPhoto} />

        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true); }} profile={profile} isOwner={isOwner} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode, }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>:{profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>:{profile.lookingForAJobDescription}
      </div>

    }
    <div>
      <b>About me</b>:{profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>:{Object
        .keys(profile.contacts)
        .map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactType]} />
        })}
    </div>
  </div>
}

type ContactsPropsType={
  contactTitle: string 
  contactValue: string
}
const Contact:React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default Profileinfo;