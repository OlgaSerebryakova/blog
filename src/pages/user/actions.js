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

export const isOpenChangeInfoModalAction = () => {
  return ({
    type: 'USER_PAGE_CHANGE_INFO_OPEN_SUCCESS',
  });
};

export const isCloseChangeInfoModalAction = () => {
  return ({
    type: 'USER_PAGE_CHANGE_INFO_CLOSE_SUCCESS',
  });
};

export const changeFieldInfoAction = ({ fieldId, value }) => ({
  type: 'USER_PAGE_CHANGE_INFO_FORM',
  payload: { fieldId, value }
});

export const submitChangeInfoAction = (id, infoForm) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'USER_PAGE_CHANGE_INFO_REQUEST'});
      const response = await API.user.changeInfoUser(id, infoForm);
      dispatch({ type: 'USER_PAGE_CHANGE_INFO_SUCCESS', payload: response.data });
      dispatch(isCloseChangeInfoModalAction());
      dispatch(getUserDataAction(id));
    } catch (error) {
      dispatch({ type: 'USER_PAGE_CHANGE_INFO_FAIL'});
    }
  }
};


// Получение постов

export const getUserPostsAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({type: 'USER_PAGE_INIT_GET_POSTS_REQUEST'});
      const response = await API.posts.getList({offsetStep: 10, authorId: id});
      dispatch({type: 'USER_PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({type: 'USER_PAGE_INIT_GET_POSTS_FAIL'});
    }
  }
};

export const getScrollPostsAction = (NPosts, id) => {
  return async function(dispatch) {
    try {
      dispatch({type: 'USER_PAGE_SCROLL_GET_POSTS_REQUEST', payload: NPosts });
      const response = await API.posts.getList({ offset: NPosts, offsetStep: 5, authorId: id});
      dispatch({type: 'USER_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({type: 'USER_PAGE_SCROLL_GET_POSTS_FAIL'});
    }
  }
};

export function unmountAction() {
  return {
    type: 'USER_PAGE_UNMOUNT'
  }
}

export const increaseLikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'USER_PAGE_INCREASE_LIKE_REQUEST'});
      const response = await API.posts.increasePostLike(id);
      dispatch({ type: 'USER_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'USER_PAGE_INCREASE_LIKE_FAIL'});
    }
  }
};

export const increaseDislikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'USER_PAGE_INCREASE_DISLIKE_REQUEST'});
      const response = await API.posts.increasePostDislike(id);
      dispatch({ type: 'USER_PAGE_INCREASE_DISLIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({ type: 'USER_PAGE_INCREASE_DISLIKE_FAIL'});
    }
  }
};

export const isShowModalOpenDeletePostAction = (postId) => {
  return ({
    type: 'USER_PAGE_MODAL_OPEN_DELETE_POST_SUCCESS',
    payload: postId
  });
};

export const isShowModalCloseDeletePostAction = () => {
  return ({
    type: 'USER_PAGE_MODAL_CLOSE_DELETE_POST_SUCCESS',
  });
};

export const deletePostAction =(postId) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'USER_PAGE_DELETE_POST_REQUEST' });
      const response = await API.posts.deletePost(postId);
      dispatch({ type: 'USER_PAGE_DELETE_POST_SUCCESS', payload: response.data });
      dispatch(getUserPostsAction());
    } catch (error) {
      dispatch({ type: 'USER_PAGE_DELETE_POST_FAIL' });
    }
  }
};