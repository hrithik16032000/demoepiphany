import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAllArticlesFetch } from '../../store/actions/textEditorAction';



class userPublishedList extends Component {
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount() {
        const { uid } = this.props.signedInUserDetails;
        this.props.userAllArticlesFetch(uid);
    }

    render() {
        console.log( this.props.articles, " ", this.props.articlesError)

        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.textEditor.userArticles,
        articlesError: state.textEditor.userArticlesError, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAllArticlesFetch: (userId) => dispatch(userAllArticlesFetch(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userPublishedList)
