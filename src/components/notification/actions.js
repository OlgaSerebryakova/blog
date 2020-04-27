
export const showNotificationAction = (message, type) => ({
  type: 'ADD_NOTIFY',
  payload: { message, type }
});

export const removeNotifyAction = (id) => ({
  type: 'REMOVE_NOTIFY', payload: id
});
