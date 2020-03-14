import React from "react";
import l from './Login.module.css'
import Button from './../Button/Button1'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginThunk} from "../../Redux/AuthReducer";
import {createField, Input} from "../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validator/Validators";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    render() {
        let con = (formData) => {
            this.props.LoginThunk(formData.email, formData.password, formData.rememberMe)
        }
        if (this.props.isAuth) {
            return <Redirect to='/profile'/>
        }
        return (
            <div className={l.box}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={con}/>
            </div>
        )
    }
}

const maxLength = maxLengthCreator(30)

const loginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(l.placeholder, Input, 'email', 'Email', [required, maxLength])}
            {createField(l.placeholder, Input, 'password', 'Password', [required, maxLength],
                {type: 'password'})}
            {
                error && <div className={l.fullError}>
                    {error}
                </div>
            }
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
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {LoginThunk})(Login);