import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
        <BrowserRouter>
        
            <div className="app-wrapper">
                <Header />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' 
                            render={() => <DialogsContainer />} />
                    <Route path='/profile'
                            render={() => <Profile />} />
                    <Route path='/users'
                            render={() => <UsersContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />

                </div>
            </div>
            </BrowserRouter>

    );
}


export default App;
