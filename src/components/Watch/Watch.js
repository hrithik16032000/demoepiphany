import React from "react";
import '../../App.css';
import { Card, CardDeck, Container} from 'react-bootstrap';
import ReactPlayer from "react-player";

function Watch(){
    return(
    <div>
        <Container>
  <CardDeck>
  <Card style={{ width: '18rem' }}>
    <Card.Body>
  <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/pIWoOmhON4Q"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
 </Card.Body>
    <Card.Body>
    <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/BnjvPDddyUs"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
    </Card.Body>
  </Card> 

  <Card style={{ width: '18rem' }}>
    <Card.Body>
  <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/41okp7i1-G0"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
 </Card.Body>
    <Card.Body>
    <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/IDe8xMH9rv4"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
    </Card.Body>
  </Card> 

</CardDeck>

<CardDeck>
  <Card style={{ width: '18rem' }}>
    <Card.Body>
  <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/E3zlZR16Ghc"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
 </Card.Body>
    <Card.Body>
    <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/PoSIhO-hYC8"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
    </Card.Body>
  </Card> 

  <Card style={{ width: '18rem' }}>
    <Card.Body>
  <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/9-WicllfYRE"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
 </Card.Body>
    <Card.Body>
    <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player"
         url="https://youtu.be/jbUHzLNkOiM"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
    </Card.Body>
  </Card> 

</CardDeck>


</Container>
    </div>
    )
}

export default Watch;