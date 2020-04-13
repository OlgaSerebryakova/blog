const initState = {
  data: null,
  deletingPostId: '',
  redactPostId: '',
  redactPost: null
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'POST_PAGE_INCREASE_LIKE_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'POST_PAGE_INCREASE_DISLIKE_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'POST_PAGE_MODAL_OPEN_SUCCESS':
      return {
        ...state,
        deletingPostId: action.payload,
      };
    case 'POST_PAGE_MODAL_CLOSE_SUCCESS':
      return {
        ...state,
        deletingPostId: ''
      };
    case 'POST_PAGE_DELETE_POST_SUCCESS':
      return {
        ...state,
        deletingPostId: ''
      };
    case 'POST_PAGE_REDACT_CHANGE_DATA_FORM':
      return {
        ...state,
        redactPost: {
          ...state.redactPost,
          [action.payload.fieldId]: action.payload.value
        }
      };
    case 'POST_PAGE_OPEN_REDACT_POST_MODAL_SUCCESS':
      return {
        ...state,
        redactPost: action.payload.redactPost,
        redactPostId: action.payload.postId,
      };
    case 'POST_PAGE_CLOSE_REDACT_POST_MODAL_SUCCESS':
      return {
        ...state,
        redactPostId: '',
        redactPost: null
      };

    default:
      return state;
  }
}
