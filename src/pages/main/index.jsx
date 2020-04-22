import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import PropTypes from "prop-types";
import PostsFormation from 'src/components/postsFormation';

class Main extends Component {

  static propTypes = {
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
    posts: state.main.posts,
    isLoadingPosts: state.main.isLoadingPosts,
    user: state.applicationReducer.user,
    showModal: state.main.showModal,
    deletingPostId: state.main.deletingPostId
  }
};

export default connect(mapStateToProps, Actions)(Main)

