import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import Header from 'src/components/header';
import SignIn from 'src/pages/sign-in';
import SignUp from "src/pages/sign-up";
import About from 'src/pages/about';
import Post from 'src/pages/new-post'
import * as Actions from './actions';
import './style.css';


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/' exact={true}>
            <h1>Main page</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aspernatur expedita
              facere hic iure magni necessitatibus rem velit voluptates. Autem dolore illo ipsa laboriosam molestiae
              nesciunt quos sequi velit.
            </div>
          </Route>
          <Route path='/about' exact={true} component={About}/>
          <Route path='/new-post' exact={true} component={Post}/>
          <Route path='/sign-in' exact={true} component={SignIn}/>
          <Route path='/sign-up' exact={true} component={SignUp}/>
        </Switch>
        {/*<FooterCounter counter={this.props.counter} increaseAction={this.props.increaseAction} decreaseAction={this.props.decreaseAction} />*/}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return ({

  });
};
// const mapDispatchToProps = (dispatch) => {
//   return ({
//     dispatch: dispatch,
//     increaseAction: (payload) => {
//       dispatch(Actions.increaseAction(payload));
//     },
//     decreaseAction: (payload) => {
//       dispatch(Actions.decreaseAction(payload));
//     }
//   });
// };
export default connect(mapStateToProps, Actions)(App);

