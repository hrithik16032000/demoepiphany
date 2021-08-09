import React from "react";
import '../../App.css';
import { Carousel, Card, CardDeck, Container, Button,ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import ReactPlayer from "react-player";

function Home() {
    return(
        <div>

       <Carousel className="carousel-custom"style={{overflow:"hidden", backgroundPosition:"center"}}>
  <Carousel.Item>
    <img
      height="560"
      className="d-block w-100"
      src="https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
      //height="500px"
      width="100%"
      display= "inline-block"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item text-align="center">
    <img
      height="560"
      className="d-block w-100"
      src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
     // height="500px"
      width="100%"
      display= "inline-block"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item text-align="center">
    <img
      height="560"
      className="d-block w-100"
      src="https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
      //height="500px"
      width="100%"
      display= "inline-block"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
   </Carousel.Item>
  </Carousel>

<br />
<br />
     <Container>
<CardDeck>
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/2262628/pexels-photo-2262628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/1105353/pexels-photo-1105353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</Container>
<br />
<br />

  <Container className="player-wrapper">
       <ReactPlayer 
         className="react-player pl-5 pr-5 justify-content-center"
         url="https://youtu.be/IDe8xMH9rv4"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
<br />
<br />
<Container>
 <CardDeck className="pl-5 pr-5">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/162396/lost-places-pforphoto-leave-factory-162396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/1038043/pexels-photo-1038043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</Container>

<br />
<br />

<Container>
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
         url="https://youtu.be/BnjvPDddyUs"
         width= "100%"
         height="100%"
         controls={true}
         />
 </Container>  
    </Card.Body>
  </Card> 
  <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</Container>


<br />
<br />
<Container>
<ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
</Container>
        </div> 
    );
}


export default Home; 