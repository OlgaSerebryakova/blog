import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import style from "./style.css";
import PropTypes from "prop-types";
import mapStateToProps from './selectors';
import Button from "../../components/button";
import Modal from "src/components/modal/";
import Input from "../../components/input";
import InputDate from "../../components/input-date";
import Loading from "../../components/icon/loading";
import TwoButtons from "../../components/twoButtons";
import PostsFormation from "../../components/postsFormation";

class User extends Component {

  static propTypes ={
    data: PropTypes.object,
    dataForm: PropTypes.object.isRequired,
    errors: PropTypes.object,
    infoForm: PropTypes.object,
    showModal: PropTypes.bool,
    userInfoId: PropTypes.string,
    getUserDataAction: PropTypes.func.isRequired,
    getUserPostsAction: PropTypes.func.isRequired,
    isShowModalOpenAction: PropTypes.func.isRequired,
    isShowModalCloseAction: PropTypes.func.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    submitNewPasswordAction: PropTypes.func.isRequired,
    isOpenChangeInfoModalAction: PropTypes.func.isRequired,
    isCloseChangeInfoModalAction: PropTypes.func.isRequired,
    changeFieldInfoAction: PropTypes.func.isRequired,
    submitChangeInfoAction: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { match } = this.props;
    this.props.getUserDataAction(match.params.id);
    this.props.getUserPostsAction(match.params.id);
    window.scrollTo({

      top: 0,
      behavior: "smooth"
    });
    window.addEventListener('scroll', this.onScroll);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getUserDataAction(match.params.id);
      this.props.getUserPostsAction(match.params.id);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.props.unmountAction();
  }

  onClickOpenModal = () => {
    this.props.isShowModalOpenAction();
  };

  onClickCloseModal = () => {
    this.props.isShowModalCloseAction();
  };

  onClickSubmitNewPassword = () => {
    const { dataForm } = this.props;
    this.props.submitNewPasswordAction(dataForm);
  };

  onClickOpenChangeInfoModal = () => {
    this.props.isOpenChangeInfoModalAction();
  };

  onClickCloseChangeInfoModal = () => {
    this.props.isCloseChangeInfoModalAction();
  };

  onSubmitChangeInfo = () => {
    const { userInfoId, infoForm } = this.props;
    this.props.submitChangeInfoAction(userInfoId, infoForm);
  };




  onScroll = () => {
    const { isLoadingPosts, posts, match } = this.props;
    const NPosts = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
      this.props.getScrollPostsAction(NPosts, match.params.id);
    }
  };

  onClickLikeIncrease = (id) => {
    this.props.increaseLikeCountAction(id);
  };

  onClickDislikeIncrease = (id) => {
    this.props.increaseDislikeCountAction(id);
  };

  onClickOpenDeletePostModal = (postId) => () => {
    this.props.isShowModalOpenDeletePostAction(postId);
  };

  onClickCloseDeletePostModal = () => {
    this.props.isShowModalCloseDeletePostAction();
  };

  onDeletePost = () => {
    this.props.deletePostAction(this.props.deletingPostId);
  };

  render() {
    const { data, errors, userInformation, showModal, userInfoId, posts, user, deletingPostId } = this.props;
    return (
      <div className={style.wrapperPage}>
        <div className={style.containerPage}>
          <div className={style.containerUser}>
            {data
              ? <>
                <div className={style.titleUser}>
                  <div className={style.avatarUser}>
                    <img src={`http://school-blog.ru/images/${data.avatar}`} alt=""/>
                  </div>
                  <div className={style.userName}><h1>{data.login}</h1></div>
                </div>
                  <div className={style.infoUser}>
                    {userInformation.map(([key, value]) => {
                      return (
                        <div key={key} className={style.userRow}>
                          <div className={style.userKey}>{key}</div>
                          <div className={style.userValue}>{value}</div>
                        </div>
                      )})
                    }
                  </div>
                {this.props.user.id !== data.id ? '' :
                  <div className={style.userButton}>
                    <div className={style.buttonsWrapper}>
                      <div>
                        <Button onClick={this.onClickOpenModal}>Изменить пароль</Button>
                      </div>
                      <div>
                        <Button onClick={this.onClickOpenChangeInfoModal}>Изменить данные</Button>
                      </div>
                    </div>
                    {
                      showModal && <Modal>
                          <div className={style.wrapperModal}>
                            <div className={style.closeButton} onClick={this.onClickCloseModal}>x</div>
                            <div>
                              <div>
                                Текущий пароль
                              </div>
                              <div>
                                <Input
                                  id="currentPassword"
                                  value={this.props.dataForm.currentPassword}
                                  onChange={this.props.changeFieldAction}
                                  error={errors.currentPassword}
                                />
                              </div>
                            </div>
                            <div>
                              <div>
                                Новый пароль
                              </div>
                              <div>
                                <Input
                                  id="newPassword"
                                  value={this.props.dataForm.newPassword}
                                  onChange={this.props.changeFieldAction}
                                  error={errors.newPassword}
                                />
                              </div>
                            </div>
                            <Button onClick={this.onClickSubmitNewPassword}>Изменить</Button>
                          </div>
                      </Modal>
                    }
                    { userInfoId &&
                      <div>
                        <Modal>
                          <div className={style.wrapper}>
                            <div>
                              <div>Имя</div>
                              <div>
                                <Input
                                  id="firstName"
                                  value={this.props.infoForm.firstName}
                                  onChange={this.props.changeFieldInfoAction}
                                  error={errors.firstName}
                                />
                              </div>
                            </div>
                            <div>
                              <div>Фамилия</div>
                              <div>
                                <Input
                                  id="lastName"
                                  value={this.props.infoForm.lastName}
                                  onChange={this.props.changeFieldInfoAction}
                                  error={errors.lastName}
                                />
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>Отчество</div>
                                <div>
                                  <Input
                                    id="patronymic"
                                    value={this.props.infoForm.patronymic}
                                    onChange={this.props.changeFieldInfoAction}
                                    error={errors.patronymic}
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>Дата рождения</div>
                                <div>
                                  <InputDate
                                    id="birthday"
                                    value={this.props.infoForm.birthday}
                                    onChange={this.props.changeFieldInfoAction}
                                    error={errors.birthday}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={style.twoButtonsWrapper}>
                              <TwoButtons onClickSuccess={this.onSubmitChangeInfo}
                              onClickCancel={this.onClickCloseChangeInfoModal}
                              success={'Изменить'}
                              cancel={'Отмена'}/>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    }
                  </div>
                }
              </>
              : <div><Loading size={50}/></div>
            }
          </div>
          { posts.length !== 0 &&
            <div className={style.containerPosts}>
              <PostsFormation posts={posts} user={user}
                                       deletingPostId={deletingPostId}
                                       onClickDislikeIncrease={this.onClickDislikeIncrease}
                                       onClickLikeIncrease={this.onClickLikeIncrease}
                                       onClickOpenModal={this.onClickOpenDeletePostModal}
                                       onClickCloseModal={this.onClickCloseDeletePostModal}
                                       onDeletePost={this.onDeletePost}/>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(User)
