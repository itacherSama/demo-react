
import React from 'react';
import LoginForm from "./LoginForm";
import {login} from "../../redux/reducers/thunks/auth-thunks";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    onSendLogin = FormValue => {
            this.props.login(FormValue.email, FormValue.password, FormValue.rememberMe);
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return (
            <div>
                <div>Login page</div>
                <LoginForm onSubmit={this.onSendLogin}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);