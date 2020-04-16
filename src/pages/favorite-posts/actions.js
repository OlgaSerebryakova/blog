import API from 'src/api';

export const getFavoritsPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({type: 'FAVORITE_POSTS_INIT_GET_POSTS_REQUEST'});
      const response = await API.posts.getFavoriteList({offsetStep: 10, sort: 'best'});
      dispatch({type: 'FAVORITE_POSTS_INIT_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({type: 'FAVORITE_POSTS_INIT_GET_POSTS_FAIL'});
    }
  }
};

export const getScrollPostsAction = (NPosts) => {
  return async function(dispatch) {
    try {
      dispatch({type: 'FAVORITE_POSTS_SCROLL_GET_POSTS_REQUEST', payload: NPosts });
      const response = await API.posts.getFavoriteList({ offset: NPosts, offsetStep: 5, sort: 'best'});
      dispatch({type: 'FAVORITE_POSTS_SCROLL_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({type: 'FAVORITE_POSTS_SCROLL_GET_POSTS_FAIL'});
    }
  }
};

export function unmountAction() {
  return {
    type: 'FAVORITE_POSTS_UNMOUNT'
  }
}

export const increaseLikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'FAVORITE_POSTS_INCREASE_LIKE_REQUEST'});
      const response = await API.posts.increasePostLike(id);
      dispatch({ type: 'FAVORITE_POSTS_INCREASE_LIKE_SUCCESS', payload: response.data})
      dispatch(getFavoritsPostsAction());
    } catch (error) {
      dispatch({ type: 'FAVORITE_POSTS_INCREASE_LIKE_FAIL'});
    }
  }
};

export const increaseDislikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'FAVORITE_POSTS_INCREASE_DISLIKE_REQUEST'});
      const response = await API.posts.increasePostDislike(id);
      dispatch({ type: 'FAVORITE_POSTS_INCREASE_DISLIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'FAVORITE_POSTS_INCREASE_DISLIKE_FAIL'});
    }
  }
};

export const isShowModalOpenAction = (postId) => {
  return ({
    type: 'FAVORITE_POSTS_MODAL_OPEN_SUCCESS',
    payload: postId
  });
};

export const isShowModalCloseAction = () => {
  return ({
    type: 'FAVORITE_POSTS_MODAL_CLOSE_SUCCESS',
  });
};

export const deletePostAction =(postId) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'FAVORITE_POSTS_DELETE_POST_REQUEST' });
      const response = await API.posts.deletePost(postId);
      dispatch({ type: 'FAVORITE_POSTS_DELETE_POST_SUCCESS', payload: response.data });
      dispatch(getFavoritsPostsAction());
    } catch (error) {
      dispatch({ type: 'FAVORITE_POSTS_DELETE_POST_FAIL' });
    }
  }
};