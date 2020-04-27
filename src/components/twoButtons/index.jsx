import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from "./style.css";
import Button from "../button";


export default class TwoButtons extends Component {
  static propTypes = {
    success: PropTypes.string.isRequired,
    cancel: PropTypes.string.isRequired,
    onClickSuccess: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
    firstButtonType: PropTypes.string.isRequired,
    secondButtonType: PropTypes.string.isRequired
  };

  render() {
    const {onClickSuccess, onClickCancel, firstButtonType, secondButtonType, success, cancel } = this.props;

    return(

      <div className={style.buttonWrapper}>
        <div>
          <Button onClick={onClickSuccess} typeButton={firstButtonType}>{success}</Button>
        </div>
        <div>
          <Button onClick={onClickCancel} typeButton={secondButtonType}>{cancel}</Button>
        </div>
      </div>
    )
  }
};