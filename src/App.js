import React from 'react';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/reducers/thunks/app-thunks";
import {compose} from "redux";
import Preloader from "./components/anotherComponents/Preloader/Preloader";
import store from "./redux/store-redux";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <NavbarContainer/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route exact path='/profile'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/profile/:userId'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' component={Login}/>

                        </div>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
