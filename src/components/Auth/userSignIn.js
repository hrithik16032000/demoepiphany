import React from 'react';
// import { connect } from 'react-redux';
// import { userSignInAction } from '../../store/actions/authActions';
// import { Redirect } from 'react-router-dom';
import "../../App.css";

//export class userSignIn extends Component {
        // state = {
        //     email: null,
        //     password: null,
        // }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    // hanleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.userSignInFunc(this.state);
    // }

    // render() {
    //     // const { auth, authError} = this.props;
    //     // console.log(auth, " ", authError)
    //     // if(auth.uid) {
    //     //     return <Redirect to="/publish" />
    //     }

    function userSignIn(){
        return (
           <div>
            <div className="container rounded border" id="logreg-forms">
                <form onSubmit={this.hanleSubmit}>

                <h1 className="signin h3 mb-3 font-weight-normal pt-3"> Sign in</h1>
              
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input name="email" id="email" type="email" className="form-control" onChange={this.handleChange} placeholder="We won't share your Email"></input>
                        </div>
                    </div> 
                   
                    <div className="form-group row">
                      <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                      <div className="col-sm-10">
                      <input name="password" id="password" type="password" className="form-control" onChange={this.handleChange}></input>
                      </div>

                    <div className= "col-md-12 text-center pt-2">
                    <button className="btn btn-success btn-block" type="submit">
                        <i className="fa fa-sign-in"></i> Sign in</button>
                    </div>    
                      <a href="/" id="forgot_pswd">Forgot password?</a>
 
                
                    <hr style={{
                               color: '#000000'
                               }}/>
      
                        {/* <div>
                            { authError ? <p>{authError}</p> : null }
                        </div> */}

                    <div className= "col-md-12 text-center pb-3">
                        <button className="btn btn-primary btn-block" type="button" id="btn-signup">
                            <i className="fa fa-user-plus"></i> Sign up New Account</button>   
                    </div>

                    </div>
                 </form>
            </div>

            
            <br />
            <br />

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
//         userSignInFunc: (credentials) => dispatch(userSignInAction(credentials)),
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(userSignIn)

export default userSignIn