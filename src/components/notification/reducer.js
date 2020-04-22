const initState = {
  showNotify: false,
  list: [],
};

class NotificationItem {
  constructor(message) {
    this.message = message;
    this.id = Math.random().toString();
  }
}

export default function notifyReducer(state = initState, action) {
  switch (action.type) {
    case 'SHOW_NOTIFY_TRUE':
      return {
        ...state,
        showNotify: true
      };
    case 'SHOW_NOTIFY_FALSE':
    return {
      ...state,
      showNotify: false
    };
    case 'ADD_NOTIFY':
      return {
        ...state,
        list: [...state.list, new NotificationItem(action.payload)],
      };
    case 'REMOVE_NOTIFY':
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}