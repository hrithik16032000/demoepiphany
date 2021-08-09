// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchAllArticles } from '../../store/actions/articlesActions';
// import firebase from '../../config/firebase';

// class ArticlesList extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             articlesList: null,
//         }
//     }

//     //fetch all articles function
//     componentDidMount() {
//         // fetchAllArticles();
//         firebase.firestore().collection('articles').get()
//         .then(querySnapshot => {
//             console.log(querySnapshot.docs);
//             })
//     }
    

//     render() {
//         const { articlesList } = this.props;
//         console.log(articlesList);
//         return (
//             <div>
//                <h1>Helloo</h1>
//             </div>
//         )
//     }

// }

// const mapStateToProps = (state) => {
//     return {
//         articlesList: state.articles.articlesContent,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         //passing the create project as props to component
//         fetchAllArticles: () => dispatch(fetchAllArticles()),
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps) (ArticlesList);
