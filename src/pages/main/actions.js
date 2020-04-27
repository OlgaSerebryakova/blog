import API from 'src/api';
import { showNotificationAction } from 'src/components/notification/actions';

export const getPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({type: 'MAIN_PAGE_INIT_GET_POSTS_REQUEST'});
      const response = await API.posts.getList({offsetStep: 10});
      dispatch({type: 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({type: 'MAIN_PAGE_INIT_GET_POSTS_FAIL'});
    }
  }
};

export const getScrollPostsAction = (NPosts) => {
  return async function(dispatch) {
    try {
      dispatch({type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST', payload: NPosts });
      const response = await API.posts.getList({ offset: NPosts, offsetStep: 5});
      dispatch({type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({type: 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL'});
    }
  }
};

export function unmountAction() {
  return {
    type: 'MAIN_PAGE_UNMOUNT'
  }
}

export const increaseLikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INCREASE_LIKE_REQUEST'});
      const response = await API.posts.increasePostLike(id);
      dispatch({ type: 'MAIN_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_INCREASE_LIKE_FAIL'});
    }
  }
};

export const increaseDislikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INCREASE_DISLIKE_REQUEST'});
      const response = await API.posts.increasePostDislike(id);
      dispatch({ type: 'MAIN_PAGE_INCREASE_DISLIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_INCREASE_DISLIKE_FAIL'});
    }
  }
};

export const isShowModalOpenAction = (postId) => {
  return ({
    type: 'MAIN_PAGE_MODAL_OPEN_SUCCESS',
    payload: postId
  });
};

export const isShowModalCloseAction = () => {
  return ({
    type: 'MAIN_PAGE_MODAL_CLOSE_SUCCESS',
  });
};

export const deletePostAction =(postId) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_DELETE_POST_REQUEST' });
      const response = await API.posts.deletePost(postId);
      dispatch({ type: 'MAIN_PAGE_DELETE_POST_SUCCESS', payload: response.data });
      dispatch(showNotificationAction('Пост удален!', 'success'));
      dispatch(getPostsAction());
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_DELETE_POST_FAIL' });
    }
  }
};