import React from 'react';
import './App.css';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/reducers/thunks/app-thunks";
import {compose} from "redux";
import App from "./App";
import store from "./redux/store-redux";

class StartPointApp extends React.Component {

    render() {
        return <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <AppContainer/>
                    </Provider>
                </BrowserRouter>
        </React.StrictMode>
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export default StartPointApp;