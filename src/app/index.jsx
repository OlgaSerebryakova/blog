import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import Header from 'src/components/header';
import Main from "src/pages/main";
import SignIn from 'src/pages/sign-in';
import SignUp from "src/pages/sign-up";
import About from 'src/pages/about';
import NewPost from 'src/pages/new-post';
import Post from 'src/pages/post';
import User from 'src/pages/user';
import FavoritePosts from "src/pages/favorite-posts";
import Notify from 'src/components/notification';
import Components from 'src/components/Components'
import * as Actions from './actions';
import './style.css';

class App extends Component {

  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <>
        <Notify />
        <Header user={this.props.user} signOut={this.props.signOut}/>
        <Switch>
          <Route path='/' exact={true} component={Main}/>
          <Route path='/about' exact={true} component={About}/>
          {this.props.user && <Route path='/new-post' exact={true} component={NewPost}/>}
          {this.props.user && <Route path='/favorite-posts' exact={true} component={FavoritePosts}/>}
          {this.props.user && <Route path='/user-page/:id' exact={true} component={User}/>}
          <Route path='/post/:id' exact={true} component={Post}/>
          <Route path='/sign-in' exact={true} component={SignIn}/>
          <Route path='/sign-up' exact={true} component={SignUp}/>
          <Route path='/components' exact={true} component={Components}/>
        </Switch>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    user: state.applicationReducer.user
  });
};

export default connect(mapStateToProps, Actions)(App);

