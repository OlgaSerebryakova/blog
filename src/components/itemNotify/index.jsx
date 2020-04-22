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
    console.log('clear settimout', this.props.item.id);
    this.deleteNotify();
  };


  render() {
    return(
      <div className={style.notify}>
        <div>{this.props.item.message}</div>
        <div className={style.closeNotify} onClick={this.nowDeleteNotify} >x</div>
      </div>
    )
  }
}

