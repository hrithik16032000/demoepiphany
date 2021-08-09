import React, { Component } from 'react';
import "../../App.css"
import { connect } from 'react-redux';
import { videosFetch, playlistFetch } from '../../store/actions/youtubeActions';
import config from '../../config/config.json'
import {Container, Col, Row} from  'react-bootstrap'

class VideoWatch extends Component {

    componentDidMount() {
        this.props.videosFetch();
        this.props.podcastFetch();
    }

    render() {
        const {  videos, videoError, playlist, playlistError } = this.props;
        var htmlDiv = "Loading Videos";
        var resultvid = null;
        if(videos && playlist) resultvid = videos.filter(id => playlist.indexOf(id) === -1);
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
                <div className="justify-content-center" > 
              <Container>
                  <Row>
                  {htmlDiv}
                  </Row>
              </Container>
                </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        videos: state.youtube.videoData,
        videoError: state.youtube.videoError,
        playlist: state.youtube.playlistData,
        playlistError: state.youtube.playlistError,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        videosFetch: () => dispatch(videosFetch()),
        podcastFetch: () => dispatch(playlistFetch()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (VideoWatch);