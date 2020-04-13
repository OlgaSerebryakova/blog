import React, { Component } from 'react';
import style from './style.css';
import Button from "../button/index";
import Modal from "src/components/modal/modal";
import Input from "../input/index";

export default class ChangeInfoUser extends Component {
  render() {
    return(
      <div>
        <Modal>
          <div className={style.wrapper}>

            <div>
              <div>Имя</div>
              <div>
                <Input
                  id="firstName"
                  value={this.props.dataForm.firstName}
                  onChange={this.props.changeFieldAction}
                  error={errors.firstName}
                />
              </div>
            </div>
            <div>
              <div>Фамилия</div>
              <div>
                <Input
                  id="lastName"
                  value={this.props.dataForm.lastName}
                  onChange={this.props.changeFieldAction}
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
                    value={this.props.dataForm.patronymic}
                    onChange={this.props.changeFieldAction}
                    error={errors.patronymic}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>Дата рождения</div>
                <div>
                  <Input
                    id="birthday"
                    value={this.props.dataForm.birthday}
                    onChange={this.props.changeFieldAction}
                    error={errors.birthday}
                  />
                </div>
              </div>
            </div>

            <div className={style.confirmMessage}>{this.props.message}</div>
            <div className={style.button}>
              <div className={style.firstButton}>
                <Button onClick={this.props.onClickSuccess}>{this.props.success}</Button>
              </div>
              <div className={style.secondButton}>
                <Button onClick={this.props.onClickCancel}>{this.props.cancel}</Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  };
}