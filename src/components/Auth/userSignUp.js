import React from 'react';
// import { connect } from 'react-redux';
// import { userSignUpAction } from '../../store/actions/authActions';
// import { Redirect } from 'react-router-dom';

// export class userSignUp extends Component {
    
//     state = {
//         email: null,
//         password: null,
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }

//     hanleSubmit = (e) => {
//         e.preventDefault();
       
//         this.props.userSignUpFunc(this.state);
//     }

//     render() {
//         const { auth, authError} = this.props;
//         if(auth.uid) {
//             return <Redirect to="/user/dashboard" />
//         }
      function userSignUp(){
          return (
            <div className="container">
                <form onSubmit={this.hanleSubmit} className="form-group">
                  
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" onChange={this.handleChange} placeholder="We won't share your Email" required='true'></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password" onChange={this.handleChange} required='true'></input>
                    </div>
                    <div className="form-control">
                        <button type="submit" className="btn btn-outline-success" >Sign Up</button>
                        {/* <div className="text-danger help-text">
                            { authError ? <p>{authError}</p> : null }
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth,
//         authError: state.auth.authError
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userSignUpFunc: (userDetails) => dispatch(userSignUpAction(userDetails)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(userSignUp)

export default userSignUp