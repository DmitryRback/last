import React from "react";
import t from './FormControl.module.css'
import pngError from './../../../assets/img/warning.png'
import errorDown from './../../../assets/img/warning_message_down.png'
import l from "../../Login/Login.module.css";
import {required} from "../../../Utils/Validator/Validators";
import {Field} from "redux-form";

class FormControl extends React.Component {
    state = {
        showErrorMessage: false,
    }
    showErrorMessage = () => {
        if (this.state.showErrorMessage) {
            this.setState({
                showErrorMessage: false
            })
        } else {
            this.setState({
                showErrorMessage: true
            })
        }
    }

    render() {
        let error = this.props.meta.error;
        let hasError = this.props.meta.touched && error
        return (
            <div className={t.formControl + ' ' + ((hasError) ? t.error : '')}>
                <div className={(this.props.classInput) ? this.props.classInput : t.textarea}>
                    {this.props.children}
                    {(hasError) && <div className={t.message}>
                        <img onClick={this.showErrorMessage} src={pngError}/>
                    </div>}
                    {
                        this.state.showErrorMessage && (hasError) &&
                        <div className={t.errorMessage}>
                            <div className={t.inErrorMessage}>
                                <p>{error}</p>
                                <img src={errorDown}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props} classInput={t.classInput}><input {...input} {...restProps}/></FormControl>
    )
}

export const createField = (className, component, name, placeholder , validate, props = {}, text ='') => {
    return <div>
        <Field className={className} component={component}
               name={name} placeholder={placeholder} validate={validate} {...props} />{ text }
    </div>

}