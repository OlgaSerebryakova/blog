import API from 'src/api';
import { push } from 'connected-react-router';
import {showNotificationAction} from "../../components/notification/actions";

export const changeFieldAction = ({ fieldId, value }) => ({
  type:'NEW_POST_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const createPostAction = (data) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'NEW_POST_CREATE_REQUEST', payload: data });
      const response = await API.posts.createNewPost(data);
      dispatch({ type: 'NEW_POST_CREATE_SUCCESS', payload: response.data });
      dispatch(push('/'));
      dispatch(showNotificationAction('Пост опубликован', 'success'));
    } catch (error) {
      dispatch({ type: 'NEW_POST_CREATE_FAIL', error});
    }
  }
};

