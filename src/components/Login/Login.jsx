
import React from 'react';
import LoginForm from "./LoginForm";

class Login extends React.Component {

    onSendLogin = value => {
            console.log(value);
    }

    render() {
        return (
            <div>
                <div>Login page</div>
                <LoginForm onSubmit={this.onSendLogin}/>
            </div>
        )
    }
}

export default Login;