import React, { Component } from 'react'
import { connect } from 'react-redux'
import PublishList from './userPublishedList'
import CreatePublish from './userCreatePublish'
import { Redirect } from 'react-router-dom';

export class UserDashboard extends Component {

    constructor(){
        super();
        this.state = {
            loadView: 'publish',
        }
        this.handleButtonClikViewChange = this.handleButtonClikViewChange.bind(this);
    }

    handleButtonClikViewChange(event) {
        event.preventDefault();
        this.setState({
            loadView: event.target.value,
        })
    }

    render() {
        const { auth } = this.props;
        if(!auth.uid) {
            return <Redirect to='/user/signin' />
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 p-1">
                            <div className="m-1 justify-content-center">
                                <nav className="nav p-2 flex-column bg-light">
                                    <button className="m-1 btn btn-outline-info" value="publish" onClick={this.handleButtonClikViewChange} >Create Post</button>
                                    <button className="m-1 btn btn-outline-info" value="published_posts" onClick={this.handleButtonClikViewChange}>Your Posts</button>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 p-1 mb-4">
                            <div className="m-1">
                                {(this.state.loadView === 'publish') ? <CreatePublish signedInUserDetails={auth} /> : <PublishList signedInUserDetails={auth} />}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
