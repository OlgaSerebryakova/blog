import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import style from './style.css';
import LikeDislikeView from "src/components/likeDislikeView";
import DeleteIcon from "src/components/icon/deleteIcon";
import PropTypes from "prop-types";
import Confirm from "../../components/confirm";

class Main extends Component{

  static propTypes ={
    increaseLikeCountAction: PropTypes.func.isRequired,
    increaseDislikeCountAction: PropTypes.func.isRequired,
    posts: PropTypes.array,
    getPostsAction: PropTypes.func.isRequired,
    unmountAction: PropTypes.func.isRequired,
    getScrollPostsAction: PropTypes.func.isRequired,
    isLoadingPosts: PropTypes.bool,
    deletePostAction: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.getPostsAction();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.props.unmountAction();
  }

  onScroll = () => {
    const { isLoadingPosts, posts } = this.props;
    const NPosts = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
      this.props.getScrollPostsAction(NPosts);
    }
  };

  onClickLikeIncrease = (id) => {
    this.props.increaseLikeCountAction(id);
  };

  onClickDislikeIncrease = (id) => {
    this.props.increaseDislikeCountAction(id);
  };

  onClickOpenModal = (postId) => () => {
    this.props.isShowModalOpenAction(postId);
  };

  onClickCloseModal = () => {
    this.props.isShowModalCloseAction();
  };

  onDeletePost = () => {
    this.props.deletePostAction(this.props.deletingPostId);
  };


  render() {
    const { posts, deletingPostId } = this.props;

    return(
      <div className={style.postList}>
        <div className={style.postContainer}>
          {posts.map((postItem) => {
              return (
                <div className={style.postWrapper} key={postItem.id}>
                  <div className={style.postTitle}>
                    <Link className={style.postLink} to={`post/${postItem.id}`}>{postItem.title}</Link>
                  </div>
                  <div className={style.postContent}>{postItem.content}</div>
                  <div className={style.postFooter}>

                      <LikeDislikeView
                        id={postItem.id}
                        isLiked={this.props.user ? postItem.relatedLikes.includes(this.props.user.id) : false}
                        isDisliked={this.props.user ? postItem.relatedDislikes.includes(this.props.user.id) : false}
                        viewsCount={postItem.viewsCount}
                        likesCount={postItem.likesCount}
                        dislikesCount={postItem.dislikesCount}
                        onClickLike={this.onClickLikeIncrease}
                        onClickDislike={this.onClickDislikeIncrease}
                      />
                    <div className={style.author}>
                      <Link className={style.authorLink} to={`user-page/${postItem.author.id}`}>
                        Автор: { postItem.author.login }</Link>
                    </div>
                    {(!this.props.user || this.props.user.id !== postItem.author.id) ? '' :
                      <div className={style.deletePost} onClick={this.onClickOpenModal(postItem.id)}>
                        <DeleteIcon size={20} />
                      </div>
                    }
                    {deletingPostId && <Confirm message={'Удалить пост?'}
                                            success={'Да'}
                                            cancel={'Нет'}
                                            onClickSuccess={this.onDeletePost}
                                            onClickCancel={this.onClickCloseModal} />
                    }
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.main.posts,
    isLoadingPosts: state.main.isLoadingPosts,
    user: state.applicationReducer.user,
    showModal: state.main.showModal,
    deletingPostId: state.main.deletingPostId
  }
};

export default connect(mapStateToProps, Actions)(Main)
