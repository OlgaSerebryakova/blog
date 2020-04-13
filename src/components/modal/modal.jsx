import React, { Component } from 'react';
import style from './style.css';

export default class Modal extends Component {
  render() {
    return(
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  };
}