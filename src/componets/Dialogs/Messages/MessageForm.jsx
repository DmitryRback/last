import React from "react";
import d from './Message.module.css'
import Button from './../../Button/Button1'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../Utils/Validator/Validators";

const maxLength = maxLengthCreator(100)
const minLength=  minLengthCreator(1)

 const MessageForm = (props) => {
    return (
        <form className={d.form} onSubmit={props.handleSubmit}>
            <div>
                <div>
                <Field className={d.textarea} name={'addNewMessage'}  component={Textarea}
                       validate={[required, maxLength, minLength]} placeholder='Enter you message' />
                </div>
                <div>
                    <Button text={'Add message'}/>
                </div>
            </div>
        </form>
    )
}

export const ReduxMessageForm = reduxForm({
    form: 'message'
})(MessageForm)