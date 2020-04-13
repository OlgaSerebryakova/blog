import API from 'src/api';

export const getUserDataAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'USER_PAGE_GET_DATA_REQUEST'});
      const response = await API.user.getUserById(id);
      dispatch({ type: 'USER_PAGE_GET_DATA_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'USER_PAGE_GET_DATA_FAIL'});
    }
  }
};

export const isShowModalOpenAction = () => {
  return ({
    type: 'USER_PAGE_MODAL_OPEN_SUCCESS',
  });
};

export const isShowModalCloseAction = () => {
  return ({
    type: 'USER_PAGE_MODAL_CLOSE_SUCCESS',
  });
};

export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'USER_PAGE_MODAL_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const submitNewPasswordAction = (dataForm) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'USER_PAGE_MODAL_CHANGE_PASSWORD_REQUEST'});
      const response = await API.user.changePassword(dataForm);
      if (response.data.error) {
        dispatch({ type:'USER_PAGE_MODAL_CHANGE_WRONG_PATH_FAIL', payload: response.data});
      } else {
        dispatch({ type:'USER_PAGE_MODAL_CHANGE_PASSWORD_SUCCESS', payload: response.data});
        dispatch({ type:'USER_PAGE_MODAL_CHANGE_PASSWORD_CLOSE_SUCCESS'})
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        dispatch({ type:'USER_PAGE_MODAL_CHANGE_PASSWORD_FAIL', payload: error.response.data});
      }
    }
  }
};

