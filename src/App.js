import React from 'react';
import './App.css';
//import * as configEnv from  './config/env-setup';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Layout/Navbar.js';
import Footer from './components/Layout/Footer.js';
//import TextEditor from './components/Publish/CreateArticles';
import About from './components/About/About';
import Home from './components/Home/Home';
import ArticleRead from './components/Articles/ArticleRead';
import Contact from './components/About/Contact';
import Watch from './components/Watch/Watch';
import Listen from './components/Listenspotify/ListenList2';
import Support from './components/Support/Support';
import userSignUp  from './components/Auth/userSignUp';
import userSignIn  from './components/Auth/userSignIn';
//import UserDashboard from './components/Users/userDashboard';

function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/watch' component={Watch}/>
          <Route path='/read' component={ArticleRead}/>
          <Route path='/listen' component={Listen}/>
          <Route path='/gallery' component={Gallery}/>
          {/* <Route path='/publish' component={TextEditor}/> */}
          <Route path='/aboutus' component={About}/>
          <Route path='/contactus' component={Contact}/>
          <Route path='/support' component={Support}/>
          <Route path='/user/signup' component={userSignUp} />
          <Route path='/user/signin' component={userSignIn} />
          {/* <Route path='/user/dashboard' component={UserDashboard} /> */}
        </Switch>
        <h1>{process.env.title}</h1>
      </div>
    </BrowserRouter>
    <Footer />
    </div>
    )
}

export default App;
