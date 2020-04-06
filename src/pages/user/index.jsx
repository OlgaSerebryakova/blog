import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import style from "./style.css";
import PropTypes from "prop-types";
import mapStateToProps from './selectors';
import Button from "../../components/button";
import Modal from "src/components/modal/";
import Input from "../../components/input";
import Loading from "../../components/icon/loading";


class User extends Component {

  static propTypes ={
    data: PropTypes.object,
    dataForm: PropTypes.object.isRequired,
    errors: PropTypes.object,
    getUserDataAction: PropTypes.func.isRequired,
    isShowModalOpenAction: PropTypes.func.isRequired,
    isShowModalCloseAction: PropTypes.func.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    submitNewPasswordAction: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { match } =this.props;
    this.props.getUserDataAction(match.params.id)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getUserDataAction(this.props.match.params.id)
    }
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

  render() {
    const { data, errors, userInformation, showModal } = this.props;
    return (
      <div className={style.wrapperUser}>
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
                  <Button onClick={this.onClickOpenModal}>Изменить пароль</Button>
                  {
                    showModal && <Modal closeModal={this.onClickSubmitNewPassword}>
                        <div>
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
                        </div>
                    </Modal>
                  }
                </div>
              }
            </>
            : <div><Loading size={50}/></div>
          }

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, Actions)(User)
