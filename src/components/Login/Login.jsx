import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";
import {login} from "../../redux/reducers/thunks/auth-thunks";


class Login extends React.Component {

    onSendLogin = FormValue => {
        const dataAuth = {
            email: FormValue.email,
            password: FormValue.password,
            rememberMe: FormValue.rememberMe || false,
            captcha: FormValue.captcha || null};
        this.props.login(dataAuth);
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div>
                <div>Login page</div>
                <LoginForm onSubmit={this.onSendLogin} captchaUrl={this.props.captchaUrl}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);