import React, { Component } from "react";
import { HashRouter, Route } from 'react-router-dom';

import TimeLine from "./TimeLine";
import Login from "./Login";
import Register from "./Register";
import Footer from "../common-component/Footer";
import Message from "../common-component/Message";
import Header from "../common-component/Header";



class Top extends Component {
render () {
    return (
      <HashRouter>
        <div>
          <Header />
          <center>
          <Message msg="β版なんやで"/>
          <Route exact path="/" component={TimeLine} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/auth" component={Register} />
          <Footer />
          </center>
        </div>
      </HashRouter>
    );
  }
}

export default Top;
