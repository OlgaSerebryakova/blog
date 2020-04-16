const initState  = {
  posts: [],
  isLoadingPosts: false,
  deletingPostId: ''
};

export default function favoritePostReducer(state = initState, action) {
  switch (action.type) {
    case 'FAVORITE_POSTS_INIT_GET_POSTS_REQUEST':
      return {
        ...state,
        isLoadingPosts: true
      };
    case 'FAVORITE_POSTS_INIT_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        isLoadingPosts: false
      };
    case 'FAVORITE_POSTS_SCROLL_GET_POSTS_REQUEST':
      return {
        ...state,
        isLoadingPosts: true
      };
    case 'FAVORITE_POSTS_SCROLL_GET_POSTS_FAIL':
      return {
        ...state,
        isLoadingPosts: false
      };
    case 'FAVORITE_POSTS_SCROLL_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isLoadingPosts: false
      };
    case 'FAVORITE_POSTS_UNMOUNT':
      return {
        ...initState
      };
    case 'FAVORITE_POSTS_INCREASE_LIKE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'FAVORITE_POSTS_INCREASE_DISLIKE_SUCCESS':
      return{
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'FAVORITE_POSTS_MODAL_OPEN_SUCCESS':
      return {
        ...state,
        deletingPostId: action.payload,
      };
    case 'FAVORITE_POSTS_MODAL_CLOSE_SUCCESS':
      return {
        ...state,
        deletingPostId: ''
      };
    case 'FAVORITE_POSTS_DELETE_POST_SUCCESS':
      return {
        ...state,
        deletingPostId: ''
      };
    default:
      return state;
  }
};