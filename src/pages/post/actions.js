import API from 'src/api';
import { push } from 'connected-react-router';
import {getPostsAction} from "../main/actions";

export const getPostDataAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_GET_DATA_REQUEST'});
      const response = await API.posts.getPostById(id);
      dispatch({ type: 'POST_PAGE_GET_DATA_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'POST_PAGE_GET_DATA_FAIL'});
    }
  }
};

export const increaseLikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_INCREASE_LIKE_REQUEST'});
      const response = await API.posts.increasePostLike(id);
      dispatch({ type: 'POST_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'POST_PAGE_INCREASE_LIKE_FAIL'});
    }
  }
};

export const increaseDislikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_INCREASE_DISLIKE_REQUEST'});
      const response = await API.posts.increasePostDislike(id);
      dispatch({ type: 'POST_PAGE_INCREASE_DISLIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'POST_PAGE_INCREASE_DISLIKE_FAIL'});
    }
  }
};

export const isShowModalOpenAction = (postId) => {
  return ({
    type: 'POST_PAGE_MODAL_OPEN_SUCCESS',
    payload: postId
  });
};

export const isShowModalCloseAction = () => {
  return ({
    type: 'POST_PAGE_MODAL_CLOSE_SUCCESS',
  });
};

export const deletePostAction = (postId) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_DELETE_POST_REQUEST' });
      const response = await API.posts.deletePost(postId);
      dispatch({ type: 'POST_PAGE_DELETE_POST_SUCCESS', payload: response.data });
      dispatch(push('/'))
    } catch (error) {
      dispatch({ type: 'POST_PAGE_DELETE_POST_FAIL' });
    }
  }
};

export const openRedactPostAction = (redactPost, postId) => {
  return ({
    type: 'POST_PAGE_OPEN_REDACT_POST_MODAL_SUCCESS',
    payload: { redactPost, postId },
  });
};

export const closeRedactPostAction = (r) => {
  return ({
    type: 'POST_PAGE_CLOSE_REDACT_POST_MODAL_SUCCESS',
  });
};

export const redactPostAction = (postId, redactPost) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_REDACT_POST_REQUEST' });
      const response = await API.posts.redactPost(postId, redactPost);
      dispatch({ type: 'POST_PAGE_REDACT_POST__SUCCESS', payload: response.data });
      dispatch({ type: 'POST_PAGE_CLOSE_REDACT_POST_MODAL_SUCCESS' });
      dispatch(getPostDataAction(postId));
    } catch (error) {
      dispatch({ type: 'POST_PAGE_REDACT_POST_FAIL' });
    }
  }
};

export const changeFieldAction = ({ fieldId, value }) => ({
  type:'POST_PAGE_REDACT_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});










