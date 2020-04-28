
const initState = {
  dataForm: {
    email: '',
  },
  errors: {
    email: '',
  }
};


export default function componentsReducer(state = initState, action) {
  switch (action.type) {
    case 'COMPONENTS_CHANGE_DATA_FORM' :
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