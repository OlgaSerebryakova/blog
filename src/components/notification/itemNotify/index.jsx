import React, { Component } from 'react';
import style from './style';

export default class ItemNotify extends Component {

  componentDidMount() {
    setTimeout(this.deleteNotify, 3000)
  }

  deleteNotify = () => {
    this.props.removeNotify(this.props.item.id)
  };

  nowDeleteNotify = () => {
    clearTimeout(this.deleteNotify);
    this.deleteNotify();
  };


  render() {
    const { item } = this.props;
    const { id, message, type } = item;

    return(
      <div className={`${style.notify} ${style[type]}`}>
        <div>{message}</div>
        <div className={style.closeNotify} onClick={this.nowDeleteNotify}>x</div>
      </div>
    )
  }
}

