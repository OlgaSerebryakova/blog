const initState  = {
  posts: [],
  isLoadingPosts: false,
  deletingPostId: ''
};

export default function mainPageReducer(state = initState, action) {
  switch (action.type) {
    case 'MAIN_PAGE_INIT_GET_POSTS_REQUEST':
      return {
        ...state,
        isLoadingPosts: true
      };
    case 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        isLoadingPosts: false
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST':
      return {
        ...state,
        isLoadingPosts: true
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL':
      return {
        ...state,
        isLoadingPosts: false
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isLoadingPosts: false
      };
    case 'MAIN_PAGE_UNMOUNT':
      return {
        ...initState
      };
    case 'MAIN_PAGE_INCREASE_LIKE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'MAIN_PAGE_INCREASE_DISLIKE_SUCCESS':
      return{
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'MAIN_PAGE_MODAL_OPEN_SUCCESS':
      return {
        ...state,
        deletingPostId: action.payload,
      };
    case 'MAIN_PAGE_MODAL_CLOSE_SUCCESS':
      return {
        ...state,
        deletingPostId: ''
      };
    case 'MAIN_PAGE_DELETE_POST_SUCCESS':
      return {
        ...state,
        deletingPostId: ''
      };
    default:
      return state;
  }
};