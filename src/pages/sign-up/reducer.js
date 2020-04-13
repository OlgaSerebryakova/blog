
const initState = {
  dataForm: {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  errors: {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }
};

function mapErrorFromServer(errorFromServer) {
  const errorCode = Object.keys(errorFromServer)[0];

  switch (errorCode) {
    case 'unique':
      return 'Такой логин уже занят';
    case 'isRequired':
      return 'Поле обязательно для заполнения!';
    default:
        return errorCode;
  }
}

function getFormErrors(payload) {
  const errorKeys = Object.keys(payload);
  const errors = errorKeys.reduce(function (result, errorKeys) {
    const errorFromServer = payload[errorKeys];
    result[errorKeys] = mapErrorFromServer(errorFromServer);
    return result
  }, {});

  return errors;
}

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
    case 'SIGN_UP_CHECK_LOGIN_SUCCESS' :
      return {
        ...state,
        errors: {
          ...state.errors,
          login: action.payload.exists ? 'Такой логин уже занят' : ''
        }
      };
    case 'SIGN_UP_FAIL':
      return {
        ...state,
        errors: getFormErrors(action.payload)
      };
    case 'CLEAR_SIGN-IN_SUCCESS':
      return {
        ...initState
      };
    default:
      return state;
  }
};