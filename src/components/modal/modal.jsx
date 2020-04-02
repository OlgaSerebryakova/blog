import React, { Component } from 'react';
import style from './style.css';
import Button from "../button";

export default class Modal extends Component {
  render() {
    return(
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div>
            {this.props.children}
          </div>
          <Button onClick={this.props.closeModal}>Изменить</Button>
        </div>
      </div>
    )
  };
}