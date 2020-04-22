

export const showNotificationAction = (message) => ({
  type: 'ADD_NOTIFY',
  payload: message
});

export const notShowNotificationAction = () => ({
  type: 'SHOW_NOTIFY_FALSE'
});

export const removeNotifyAction = (id) => ({
  type: 'REMOVE_NOTIFY', payload: id
});
