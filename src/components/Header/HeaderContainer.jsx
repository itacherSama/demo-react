
import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/reducers/auth-reducer";
import {authApi} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authApi.getIAuthMe()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setAuthUser(id, login, email);
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let mapDispatchToProps = {
    setAuthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);