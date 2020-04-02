import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as Actions from './actions';
import style from './style.css';
import LikeDislikeView from 'src/components/likeDislikeView';
import {Link} from "react-router-dom";

class PostPage extends Component {

  static propTypes ={
    getPostDataAction: PropTypes.func.isRequired,
    increaseLikeCountAction: PropTypes.func.isRequired,
    increaseDislikeCountAction: PropTypes.func.isRequired,
    data: PropTypes.object
  };

  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  };

  onClickLikeIncrease = () => {
    const { match } = this.props;
    this.props.increaseLikeCountAction(match.params.id);
  };

  onClickDislikeIncrease = () => {
    const { match } = this.props;
    this.props.increaseDislikeCountAction(match.params.id);
  };

  render() {
    const { data } = this.props;

    return(
      <div className={style.postPage}>
        <div className={style.postContainer}>
          { data
            ? <div className={style.postWrapper}>
                <div className={style.postHeader}>
                  <div className={style.author}>
                    <div>
                      <img className={style.avatar}
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN7USRtFiSwwrfqNMPm_kTcGJ4NkIX7xRy4ztZq4Acm298JkWd" alt="avatar"/>
                    </div>
                    <div>
                      <Link className={style.authorLink} to={`/user-page/${data.author.id}`}>
                        {data.author.login}</Link>
                      </div>
                  </div>
                  <div>
                    <LikeDislikeView
                      viewsCount={data.viewsCount}
                      likesCount={data.likesCount}
                      dislikesCount={data.dislikesCount}
                      onClickLike={this.onClickLikeIncrease}
                      onClickDislike={this.onClickDislikeIncrease}
                    />
                  </div>
                </div>
                  <div className={style.postTitle}>{data.title}</div>
                  <div className={style.postContent}>{data.content}</div>
              </div>

            : <div>Загрузка...</div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.post.data
  }
};

export default connect(mapStateToProps, Actions)(PostPage)