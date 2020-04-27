import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Input from 'src/components/input';
import Button from "src/components/button";
import style from './style.css';
import * as Actions from './actions';


class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    clearSignUpUnmount: PropTypes.func.isRequired,
    signUpAction: PropTypes.func.isRequired,
    checkLoginAction: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.clearSignUpUnmount();
  }

  onSubmit = () => {
    const { dataForm } = this.props;
    this.props.signUpAction(dataForm);
  };

  checkLogin = () => {
    const { checkLoginAction, dataForm } = this.props;

    checkLoginAction(dataForm.login);
  };

  render() {
    const { errors } = this.props;

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
              onBlur={this.checkLogin}
              error={errors.login}
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
                error={errors.email}
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
                error={errors.firstName}
              />
            </div>
          </div>
          <div>
            <div>Фамилия</div>
            <div>
              <Input
                id="lastName"
                value={this.props.dataForm.lastName}
                onChange={this.props.changeFieldAction}
                error={errors.lastName}
              />
            </div>
          </div>
          <div>
            <div>Password</div>
            <div>
              <Input
                id="password"
                value={this.props.dataForm.password}
                onChange={this.props.changeFieldAction}
                error={errors.password}
              />
            </div>
          </div>
          <div>
            <Button onClick={this.onSubmit} typeButton={'primary'}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm,
  errors: state.signUp.errors
});

export default connect(mapStateToProps, Actions)(SignUp);