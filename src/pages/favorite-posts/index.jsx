import React, { Component } from 'react';
import PostsFormation from "../../components/postsFormation";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import style from './style.css';
import LikeDislikeView from "src/components/likeDislikeView";
import DeleteIcon from "src/components/icon/deleteIcon";
import PropTypes from "prop-types";
import Confirm from "../../components/confirm";

class FavoritePosts extends Component{

  static propTypes ={
    increaseLikeCountAction: PropTypes.func.isRequired,
    increaseDislikeCountAction: PropTypes.func.isRequired,
    posts: PropTypes.array,
    getFavoritsPostsAction: PropTypes.func.isRequired,
    unmountAction: PropTypes.func.isRequired,
    getScrollPostsAction: PropTypes.func.isRequired,
    isLoadingPosts: PropTypes.bool,
    deletePostAction: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.getFavoritsPostsAction();
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
    const { posts, deletingPostId, user } = this.props;

    return(
      <PostsFormation posts={posts} user={user}
                      deletingPostId={deletingPostId}
                      onClickDislikeIncrease={this.onClickDislikeIncrease}
                      onClickLikeIncrease={this.onClickLikeIncrease}
                      onClickOpenModal={this.onClickOpenModal}
                      onClickCloseModal={this.onClickCloseModal}
                      onDeletePost={this.onDeletePost}/>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.favorite.posts,
    isLoadingPosts: state.favorite.isLoadingPosts,
    user: state.applicationReducer.user,
    showModal: state.favorite.showModal,
    deletingPostId: state.favorite.deletingPostId
  }
};

export default connect(mapStateToProps, Actions)(FavoritePosts)
