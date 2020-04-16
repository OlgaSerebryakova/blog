import moment from "moment";

const dictionary = {
  firstName: 'Имя:',
  lastName: 'Фамилия:',
  patronymic: 'Отчество:',
  birthday: 'Дата рождения',
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
    const momentDateObject = moment(new Date(value));
    let preparedValue = value;

    if (key === 'registrationDate' || key === 'birthday') {
      preparedValue = momentDateObject.isValid()
        ? momentDateObject.format('DD.MM.YYYY')
        : value;
    }

    return [key, preparedValue];
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
  errors: state.user.errors,
  infoForm: state.user.infoForm,
  userInfoId: state.user.userInfoId,

  posts: state.user.posts,
  isLoadingPosts: state.user.isLoadingPosts,
  deletingPostId: state.user.deletingPostId
});

export default mapStateToProps;