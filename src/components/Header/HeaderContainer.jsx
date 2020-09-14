
import React from 'react';
import Header from "./Header";
import {getAuthUser, logout} from "../../redux/reducers/thunks/auth-thunks";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUser();
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
    getAuthUser,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);