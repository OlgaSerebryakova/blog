
const initState = {
  dataForm: {
    login: '',
    email: '',
    firstName: '',
    password: ''
  }
};

export default function singUpReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-UP_CHANGE_DATA_FORM' :
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      };
    default:
      return state;
  }
};