import React from 'react';
import { connect } from "react-redux";
import Navbar from './Navbar';


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;