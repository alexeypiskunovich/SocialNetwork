import React, {FC} from "react"
import { Field, Form, Formik } from "formik"
import { FilterType } from "../../Redux/users-reducer"
import { getUsersFilter } from "../../Redux/users-selectors.ts"
import { useSelector } from "react-redux"

const usersSearchFormValidate=(values:any)=>{
    const errors={}
    return errors
}
type FriendFormType="true" | "false" | "null" 
type FormType={
    term:string
    friend:FriendFormType
}

type PropsType ={
    onFilterChanged:(filter:FilterType)=>void
}

const UsersSearchForm: React.FC<PropsType>=React.memo((props)=>{
    const filter =useSelector(getUsersFilter)
    const submit = (values: { term: string; friend: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }
    return<>
       <div>
        <Formik 
            enableReinitialize={true}
            initialValues={{term: filter.term, friend:String(filter.friend) as FriendFormType}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        
        >
        {({isSubmitting})=>(
            <Form>
                <Field type="text" name="term"/>
                <Field name="friend" as="select">
                    <option value="null">All</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Find
                </button>
            </Form>
        )}
        </Formik>
       </div>
    </>  
})
export default UsersSearchForm;