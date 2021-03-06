import API from 'src/api';
import { push } from 'connected-react-router';
import {showNotificationAction} from "../../components/notification/actions";

export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGN-UP_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const signUpAction = (dataForm) => {
  return async function(dispatch) {
    try{
      dispatch({ type: 'SIGN-UP_REQUEST' });
      let response = await API.user.signUp(dataForm);
      dispatch({ type: 'SIGN-UP_SUCCESS', payload: response.data});
      dispatch(showNotificationAction('Вы успешно зарегистрированы!'));
      dispatch(push('/'));
    } catch (error) {
      if (error.response) {
        dispatch({type: 'SIGN_UP_FAIL', payload: error.response.data});
      }
    }
  }
};

export const checkLoginAction = (login) => {
  return async function(dispatch) {
    try {
      const response = await API.user.checkLogin(login);
      dispatch({ type: 'SIGN_UP_CHECK_LOGIN_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'SIGN_UP_FAIL'})
    }
  }
};


export const clearSignUpUnmount = () => ({type: 'CLEAR_SIGN-IN_SUCCESS'});