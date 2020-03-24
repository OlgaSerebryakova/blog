const initState = {
  dataForm: {
    title: '',
    content: ''
  }
};

export default function newPostReducer(state = initState, action) {
  switch (action.type) {
    case 'NEW_POST_CHANGE_DATA_FORM':
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      };
    case 'NEW_POST_CREATE_SUCCESS':
      return {
        ...initState
      };
    default:
      return state;
  }
};
