import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import Button from "src/components/button";
import * as Actions from './actions';
import style from './style.css';

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    signInAction: PropTypes.func.isRequired
  };

  onSubmit = () => {
    const { dataForm } = this.props;
    this.props.signInAction(dataForm);
  };

  componentWillUnmount() {
    this.props.clearSignInUnmount();
  }

  render() {
    return (
      <div className={style.wrapperSignIn}>
        <div className={style.container}>
          <h3>Вход</h3>
          <div>
            <div>
              Login
            </div>
            <div>
              <Input
                id="login"
                value={this.props.dataForm.login}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <div>
              Password
            </div>
            <div>
              <Input
                id="password"
                value={this.props.dataForm.password}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <Button onClick={this.onSubmit} >
              Войти
            </Button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(mapStateToProps, Actions)(SignIn);
