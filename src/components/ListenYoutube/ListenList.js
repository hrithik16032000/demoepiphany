import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playlistFetch } from '../../store/actions/youtubeActions';
import config from '../../config/config.json';
import "../../App.css";
import {Col, Container, Row } from "react-bootstrap";

export class ListenList extends Component {
    componentDidMount() {
        this.props.podcastFetch();
    }

    render() {
        const { playlist, playlistError } = this.props;
        var htmlDiv = "Loading podcast";
        var resultvid = playlist ? playlist : null;
        if(resultvid && resultvid !== []) {
            htmlDiv =  resultvid.map((videoId, i) => {
                var frame 
                
                return frame =
                <Col xs={12} sm={12} md={6} lg={6} className="ytboxy">
                <div key = {i} className = "embed-responsive embed-responsive-16by9" style={{height:'360px', width:'auto'}}>
                    <iframe className="embed-responsive-item rounded mx-auto my-2 d-block pt-3" title="Youtube/EpiphanyIndia" height="360px" src={`${config.youtube.embedURL}/${videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
                </Col> 
            })
        }
        return (
             <div className="justify-content-center"> 
                  <Container>
                    <Row>
                     {htmlDiv}
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Container> 
              </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playlist: state.youtube.playlistData,
        playlistError: state.youtube.playlistError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        podcastFetch: () => dispatch(playlistFetch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListenList)
