import React from 'react';
//import { connect } from 'react-redux';
//import { fetchInstagram } from '../../store/actions/galleryActions';
import { Row, Col, Card, CardGroup} from 'react-bootstrap';
//import "../../App.css";



// class Gallery extends Component {

//     componentDidMount() {
//         this.props.fetchInstagram();
//     }

//     render() {
//         const { instagramImages } = this.props;
//         var htmlDiv = <h5>Loading...</h5>
//         if(instagramImages){
//              htmlDiv = instagramImages.map(post => {
//                 return     <Col key={post.id} className="pt-5 boxy" xs={12} sm={6} md={4} lg={3}>
//               <a href={post.permalink}> 
//               <Image className="img-fluid img-thumbnail" width="100%" height="180px" src={post.media_url} rounded /> 
//               </a>
//               </Col>
//                  });
//         }
//         return (
//             <div> 
                
//           <Container>
//                  <Row>
//                  {htmlDiv}
//                 </Row>
//         </Container >     
//             {/* {htmlDiv} */}
//             </div>  
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         fetchError: state.gallery.fetchError,
//         instagramImages: state.gallery.instagramImages,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchInstagram: () => dispatch(fetchInstagram()),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Gallery);


function Gallery(){
    return(
     <div>
     <div className="container-fluid">

        
            
 <Row xs={1} md={2} className="g-4">

    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/6257472/pexels-photo-6257472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/8819423/pexels-photo-8819423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
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
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/750895/pexels-photo-750895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
</CardGroup>


</div>

     </div>
    )
}

export default Gallery;