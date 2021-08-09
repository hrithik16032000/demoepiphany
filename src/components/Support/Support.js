import React from 'react'
import '../../App.css'
import {Container, button, Row, Col } from 'react-bootstrap'

function Support() {
    (function(){
        var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
        if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
        s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
        rzp && rzp.init && rzp.init()}})();
    return(
     <div className="donate">
        <Container fluid>
                <Row>
                    <Col>
                     <img
                         className="d-block w-100 pt-3"
                        src="https://image.freepik.com/free-vector/people-donating-sanitary-material-quarantine-time-illustrated_23-2148513176.jpg"
                        alt="Third slide"
                        height="500px"
                        width="100%"
                        display= "inline-block"
                      />
                   </Col>

                   
                   <button className="btn btn-primary btn-block donationbt">
                     <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_FYCSpdhgEJckyN/view" data-text="Donate Now" data-color="#528FF0" data-size="large">
                     </div>
                    </button> 
                    
            </Row>
        </Container> 
     </div>
    
    )
}

export default Support
