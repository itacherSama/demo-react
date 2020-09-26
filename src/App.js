import React from 'react';
import {Route} from 'react-router-dom';
import {withSuspence} from "./hoc/withSuspence";
import Preloader from "./components/anotherComponents/Preloader/Preloader";

import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import './App.css';

// lazy Components
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspence(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspence(ProfileContainer)}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/news' render={withSuspence(News)}/>
                    <Route path='/music' render={withSuspence(Music)}/>
                    <Route path='/settings' render={withSuspence(Settings)}/>
                    <Route path='/login' component={Login}/>

                </div>
            </div>

        );
    }
}

export default App;
