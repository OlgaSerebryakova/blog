import moment from "moment";

const dictionary = {
  firstName: 'Имя:',
  lastName: 'Фамилия:',
  patronymic: 'Отчество:',
  registrationDate: 'Дата регистрации:',
  email: 'E-mail:',
  postsCount: 'Количество постов:',
  likesCount: 'Количество поставленных лайков:',
  dislikesCount: 'Количество поставленных дизлайков:'
};

function userInfoSelector(userData) {
  // преобразовываем в массив
  const userDataList = userData ? Object.entries(userData) : [];

  // фильтруем элементы
  const userDataListFilter = userDataList.filter(function ([key]) {
    const translate = dictionary[key];
    return translate;
  });

  // форматируем дату
  const userInfoDatePrepared = userDataListFilter.map(([key, value]) => {
    const registrationDateValue = (key === 'registrationDate')
      ? moment(value).format('DD.MM.YYYY')
      : value;
    return [key, registrationDateValue];
  });

  // переводим ключи
  const translatedUserDataList = userInfoDatePrepared.map((userInfo) => {
    const userInfoKey = userInfo[0];
    userInfo[0] = dictionary[userInfoKey];

    return userInfo;
  });

  return translatedUserDataList;
}

const mapStateToProps = (state) => ({
  data: state.user.data,
  userInformation: userInfoSelector(state.user.data),
  user: state.applicationReducer.user,
  showModal: state.user.showModal,
  dataForm: state.user.dataForm,
  errors: state.user.errors
});

export default mapStateToProps;