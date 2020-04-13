const initState = {
  data: null,
  dataForm: {
    currentPassword: '',
    newPassword: ''
  },
  showModal: false,
  errors: {
    currentPassword: '',
    newPassword: ''
  }
};


function mapErrorFromServer(errorFromServer) {
  const errorCode = Object.keys(errorFromServer)[0];

  switch (errorCode) {
    case 'minLength':
      return 'Минимальная длина пароля - 3 символа';
    case 'isRequired':
      return 'Поле обязательно для заполнения!';
    default:
      return errorCode;
  }
}

function getFormErrors(payload) {
  const errorKeys = Object.keys(payload);
  const errors = errorKeys.reduce(function (result, errorKeys) {
    const errorFormServer = payload[errorKeys];
    result[errorKeys] = mapErrorFromServer(errorFormServer);
    return result
  }, {});
  return errors;
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case 'USER_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'USER_PAGE_MODAL_OPEN_SUCCESS':
      return {
        ...state,
        showModal: true
      };
    case 'USER_PAGE_MODAL_CHANGE_PASSWORD_CLOSE_SUCCESS':
      return {
        ...state,
        showModal: false,
        dataForm: { ...initState.dataForm },
        errors: { ...initState.errors }
      };
    case 'USER_PAGE_MODAL_CLOSE_SUCCESS':
      return {
        ...state,
        showModal: false,
        dataForm: { ...initState.dataForm },
        errors: { ...initState.errors }
      };
    case 'USER_PAGE_MODAL_CHANGE_DATA_FORM':
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      };
    case 'USER_PAGE_MODAL_CHANGE_PASSWORD_SUCCESS':
      return {
        ...state
      };
    case 'USER_PAGE_MODAL_CHANGE_WRONG_PATH_FAIL':
      return {
        ...state,
        errors: {
          ...state.errors,
          currentPassword: action.payload.error ? 'Невeрно введен пароль' : ''
        }
      };
    case 'USER_PAGE_MODAL_CHANGE_PASSWORD_FAIL':
      return {
        ...state,
        errors: getFormErrors(action.payload)
      };
    default:
      return state;
  }
}