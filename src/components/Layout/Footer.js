import React from "react";
import styled from 'styled-components';

function Footer() {
  return (
    <div style={{marginTop:'2rem'}}>
    <FooterContainer className="main-footer">
        <div className="footer-bottom ">
        <div className="container">  
        <div className="row justify-content-centre">

            <div className="col-4">
                <p><a href="/contactus">Contact Us </a></p>
            </div>


            <div className="col-4">
                <p><a href="/support">Support </a></p>
            </div>

            <div className="col-4">
                <p><a href="/aboutus">About Us</a></p>
            </div>
         </div> 
{/*
     <div className="footer-copyright">
         <p className="text-xs-center">
             &copy;{new Date().getFullYear()} Epiphany-India -All Rights Reserved
         </p>
     </div>
*/}
     </div>  
     </div>
   </FooterContainer> 
   </div>
  );
} 

export default Footer;

const  FooterContainer = styled.footer`
.footer-bottom {
    background: var(--mainDark);
    padding-top: 1rem;
}

p a {
    color: var(--mainGrey);
}
 
p a:hover {
    color: var(--mainWhite);
    text-decoration: none;
}

`;