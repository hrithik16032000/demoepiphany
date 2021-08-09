import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import '../../App.css';
// import { userSignOut } from '../../store/actions/authActions';
// import { connect } from "react-redux";

function Navbar() {
  // const { auth, signOut } = props;

  // const signOutNavLinkHTML = <ReactBootStrap.Nav.Link onClick={signOut} className="nav-link mx-3"> Sign Out </ReactBootStrap.Nav.Link>
  
  // const signOutLink = auth.uid ? signOutNavLinkHTML : null ;

  return (   
    <ReactBootStrap.Navbar collapseOnSelect='justify-content-center' sticky="top" fixed="top" expand="md" bg="light" color="#FFFFFF" className="navbar">

    <ReactBootStrap.Navbar.Brand className="pl-5 navbar" href="#home">
      <h3>Epiphany-India</h3>
     </ReactBootStrap.Navbar.Brand>
    
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
     <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    
      <ReactBootStrap.Nav>
           <ReactBootStrap.Nav.Link href="/home" className="nav-link mx-3"> Home </ReactBootStrap.Nav.Link>
    
           <ReactBootStrap.Nav.Link href="/watch" className="nav-link mx-3"> Watch </ReactBootStrap.Nav.Link>
         
           <ReactBootStrap.Nav.Link href="/read" className="nav-link mx-3"> Read </ReactBootStrap.Nav.Link>
         
           <ReactBootStrap.Nav.Link href="/listen" className="nav-link mx-3"> Listen </ReactBootStrap.Nav.Link>
         
           <ReactBootStrap.Nav.Link href="/gallery" className="nav-link mx-3"> Gallery </ReactBootStrap.Nav.Link>
    
           <ReactBootStrap.Nav.Link href="/publish" className="nav-link mx-3"> Login/SignUp </ReactBootStrap.Nav.Link>

           {/* {signOutLink} */}
           
     </ReactBootStrap.Nav>
    
     </ReactBootStrap.Navbar.Collapse>
     </ReactBootStrap.Navbar>
    );
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       signOut: () => dispatch(userSignOut())
//   }
// }

export default Navbar;