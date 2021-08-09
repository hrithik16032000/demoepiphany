import React from "react";
import {Jumbotron, Image, Container, Row, Col} from 'react-bootstrap'
import '../../App.css'



function About() {
    return(
 <div>
           <div>
            <Jumbotron>
               <h1>About Us</h1>
           </Jumbotron>
           </div>
   <Container className="about">
       <Row>
        <Col sm={4}>
          <Image src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="testing" className="pull-left mr-2 float-left rounded-circle"/>
         </Col>
         <Col sm={8}>  
              <p className="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor tellus eu justo ultricies luctus.  Maecenas ac molestie turpis. Fusce porta ut ex feugiat tempor. Ut ullamcorper pellentesque congue. Fusce efficitur neque dapibus ante fringilla maximus. Inmaximus et felis ut vehicula. Nullam eu urna id sem sodales malesuada. Vivamus varius, risus ac lacinia placerat, turpis felis lobortis est, fringilla venenatis diam justo et metus. Quisque tincidunt nulla purus, pellentesque blandit nunc fermentum vitae. Maecenas dictum, magna nec pharetra suscipit, turpis magna sagittis sem, non pellentesque sem lectus eget est. Sed eu consequat dolor, sit amet auctor lorem. Quisque id lacus tellus. Duis mattis nisl vitae malesuada pulvinar. Vestibulum tempor justo sit amet orci venenatis, eu rutrum nibh varius. Nam faucibus, ipsum eu venenatis sagittis, sapien ex sagittis felis, sit amet consequat turpis purus in nunc. Phasellus est enim, sodales ac pretium id, ornare ut elit. 
              </p>
          </Col>
     </Row>     
   </Container> 

   <br />

   <Container className="about">
       <Row>
        <Col sm={4} >
          <Image src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="testing" className="pull-left float-left rounded-circle" />
         </Col>
         <Col sm={8} >  
              <p className="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor tellus eu justo ultricies luctus.  Maecenas ac molestie turpis. Fusce porta ut ex feugiat tempor. Ut ullamcorper pellentesque congue. Fusce efficitur neque dapibus ante fringilla maximus. Inmaximus et felis ut vehicula. Nullam eu urna id sem sodales malesuada. Vivamus varius, risus ac lacinia placerat, turpis felis lobortis est, fringilla venenatis diam justo et metus. Quisque tincidunt nulla purus, pellentesque blandit nunc fermentum vitae. Maecenas dictum, magna nec pharetra suscipit, turpis magna sagittis sem, non pellentesque sem lectus eget est. Sed eu consequat dolor, sit amet auctor lorem. Quisque id lacus tellus. Duis mattis nisl vitae malesuada pulvinar. Vestibulum tempor justo sit amet orci venenatis, eu rutrum nibh varius. Nam faucibus, ipsum eu venenatis sagittis, sapien ex sagittis felis, sit amet consequat turpis purus in nunc. Phasellus est enim, sodales ac pretium id, ornare ut elit. 
              </p>
          </Col>
     </Row>     
   </Container> 
</div>   
    );
}

export default About