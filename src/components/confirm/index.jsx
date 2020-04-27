import React, { Component } from 'react';
import style from './style.css';
import Modal from "src/components/modal/modal";
import TwoButtons from "../twoButtons";

export default class Confirm extends Component {
  render() {

    return(
      <div>
        <Modal>
          <div>
            <div className={style.confirmMessage}>{this.props.message}</div>
            <div>
              <TwoButtons onClickSuccess={this.props.onClickSuccess}
                          onClickCancel={this.props.onClickCancel}
                          success={this.props.success}
                          cancel={this.props.cancel}
                          firstButtonType={'primary'}
                          secondButtonType={'secondary'}/>
            </div>
          </div>
        </Modal>
      </div>
    )
  };
}