import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { push } from 'connected-react-router';
import Input from 'src/components/input';
import Button from "src/components/button";
import style from './style.css';
import * as Actions from './actions';


class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.push('/')
  };

  render() {
    return (
      <div className={style.wrapperSignUp}>
        <div className={style.container}>
          <h3>Регистрация</h3>
          <div>
            <div>Login</div>
            <div>
              <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <div>Email</div>
            <div>
              <Input
                id="email"
                value={this.props.dataForm.email}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <div>Имя</div>
            <div>
              <Input
                id="firstName"
                value={this.props.dataForm.firstName}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <div>Login</div>
            <div>
              <Input
                id="password"
                value={this.props.dataForm.password}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <Button onClick={this.onClick}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm
});

export default connect(mapStateToProps, {
  push,
  ...Actions
})(SignUp);