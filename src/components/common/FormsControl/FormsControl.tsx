import React from "react";
import styles from "./FormsControl.module.css";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { FieldValidatorType } from "../../../utils/validators/validators"; // Уберите .ts, если это не TypeScript модуль


type FormControlPropsType = {
    meta: WrappedFieldMetaProps;
    children: React.ReactNode;
};

const FormControl: React.FC<FormControlPropsType> = ({ meta, children }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}> {/* Исправлено */}
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl meta={meta}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl meta={meta}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};



export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name:FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.ComponentType<WrappedFieldProps>, // Изменено
    props = {},
    text = ""
) {return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            />
            {text}
        </div>
    );
};
export type GetStringKeys<T> = Extract<keyof T, string>