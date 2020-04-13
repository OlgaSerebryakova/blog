const initState = {
  dataForm: {
    login: '',
    password: ''
  }
};

export default function signInReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_CHANGE_DATA_FORM':
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      };
    case 'CLEAR_SIGN-IN_SUCCESS':
      return {
        ...initState
      };
    default:
      return state;
  }
};