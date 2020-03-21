import React from "react";
import l from './Login.module.css'
import Button from './../Button/Button1'
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginThunk} from "../../Redux/AuthReducer";
import {createField, Input} from "../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validator/Validators";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    render() {
        let con = (formData) => {
            this.props.LoginThunk(formData.email, formData.password, formData.rememberMe,  formData.captcha)
        }
        if (this.props.isAuth) {
            return <Redirect to='/profile'/>
        }
        return (
            <div className={l.box}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={con} captchaURL={this.props.captchaURL}/>
            </div>
        )
    }
}

const maxLength = maxLengthCreator(30)

const loginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={l.boxInput}>
                {createField(l.placeholder, Input, 'email', 'Email', [required, maxLength])}
                {createField(l.placeholder, Input, 'password', 'Password', [required, maxLength],
                    {type: 'password'})}
                        {captchaURL && <img className={l.captchaImg} src={captchaURL} alt="captcha"/>}
                        {captchaURL &&
                        createField(l.placeholder, Input, 'captcha', 'Enter captcha', [required])}
                {
                    error && <div className={l.fullError}>
                        {error}
                    </div>
                }
            </div>
            <div className={l.bottom}>
                {createField('', 'input', 'rememberMe', null,
                    null, {type: 'checkbox'},  'Remember me' )}
                    <Button text={'Login'}/>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(loginForm);

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, {LoginThunk})(Login);