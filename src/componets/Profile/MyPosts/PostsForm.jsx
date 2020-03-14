import React from "react";
import {Field, reduxForm} from "redux-form";
import Button from './../../Button/Button1'
import pr from './MyPosts.module.css';
import {maxLengthCreator, minLengthCreator, required} from "../../../Utils/Validator/Validators";
import {Textarea} from "../../Common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)
const minLength2 = minLengthCreator(2)

const addPostsForm = (props) => {
    return(
        <form className={pr.form} onSubmit={props.handleSubmit}>
            <div>
                <Field  name='postText' component={Textarea} placeholder={'Add new post.'}
                        validate={[required, maxLength10, minLength2]}/>
            </div>
            <div>
                <Button  text={'Add post'}/>
            </div>

        </form>
    )
}

export const AddPostsFormRedux = reduxForm({
    form: 'userPost'
})(addPostsForm)