import React from "react";
import { createField, GetStringKeys, Input, Textarea } from "../../common/FormsControl/FormsControl.tsx";
import { InjectedFormProps, reduxForm } from "redux-form";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControl/FormsControl.module.css";
import { ProfileType } from "../../../types/types.ts";

type PropsType={
  profile: ProfileType
}
type ProfileTypeKeys=GetStringKeys<ProfileType>;

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType>& PropsType> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button>Сохранить</button></div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Полное имя</b>: {createField<ProfileTypeKeys>("Полное имя", "fullName", [], Input)}
      </div>
      <div>
        <b>Ищет работу</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>Мои профессиональные навыки</b>: {createField<ProfileTypeKeys>("Мои профессиональные навыки", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div>
        <b>Обо мне</b>: {createField<ProfileTypeKeys>("Обо мне", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Контакты</b>: {Object.keys(profile.contacts).map(key => (
          <div key={key} className={s.contact}>
            <b>{key}: {createField(key, `contacts.${key}`, [], Input)}</b>
          </div>
        ))}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ 
  form: 'edit-profile', 
  enableReinitialize: true
})(ProfileDataForm);

export default ProfileDataFormReduxForm;

