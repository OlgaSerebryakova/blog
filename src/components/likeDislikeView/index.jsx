import React, { Component } from 'react';
import Like from 'src/components/icon/like';
import Dislike from 'src/components/icon/dislike';
import View from 'src/components/icon/vision';
import style from './style.css';
import PropTypes from "prop-types";

export default class LikeDislikeView extends Component {

  static propTypes = {
    viewsCount: PropTypes.number,
    likesCount: PropTypes.number,
    dislikesCount: PropTypes.number,
    onClick: PropTypes.func,
  };

  onClickLike = () => {
    this.props.onClickLike && this.props.onClickLike(this.props.id);
  };

  onClickDislike = () => {
    this.props.onClickDislike && this.props.onClickDislike(this.props.id);
  };

  render() {

    return(
      <div className={style.container}>
        <div className={style.iconWrapper}>
          <div >
            <View size={20} />
          </div>
          <div className={style.counter}>{this.props.viewsCount}</div>
        </div>
        <div className={style.iconWrapper}>
          <div onClick={this.onClickLike}>
            <Like size={20}/>
          </div>
          <div className={style.counter}>{this.props.likesCount}</div>
        </div>
        <div className={style.iconWrapper}>
          <div onClick={this.onClickDislike}>
            <Dislike size={20}/>
          </div>
          <div className={style.counter}>{this.props.dislikesCount}</div>
        </div>
      </div>
    )
  }
}

