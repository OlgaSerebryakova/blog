import React, { Component } from 'react';
import style from './style.css';
import Button from "../button";
import Modal from "src/components/modal/modal";

export default class Confirm extends Component {
  render() {
    return(
      <div>
        <Modal>
          <div className={style.wrapper}>
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