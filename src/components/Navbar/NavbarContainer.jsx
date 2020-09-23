import { connect } from "react-redux";
import Navbar from './Navbar';


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}


let NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;