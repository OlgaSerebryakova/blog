import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from "./style.css";
import Button from "../button";


export default class TwoButtons extends Component {
  static propTypes = {
    success: PropTypes.string,
    cancel: PropTypes.string,
    onClickSuccess: PropTypes.func,
    onClickCancel: PropTypes.func,
  };

  render() {
    return(

      <div className={style.buttonWrapper}>
        <div>
          <Button onClick={this.props.onClickSuccess}>{this.props.success}</Button>
        </div>
        <div>
          <Button onClick={this.props.onClickCancel}>{this.props.cancel}</Button>
        </div>
      </div>
    )
  }
};