import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import style from './style.css';

class Main extends Component{

  componentDidMount() {
    this.props.getPostsAction();
  }

  render(){
    const { posts } = this.props;
    return(
      <div className={style.postList}>
        <div className={style.postContainer}>
          {posts.map(function (postItem) {
            return (
              <div className={style.postWrapper} key={postItem.id}>
                <div className={style.postTitle}>
                  <Link className={style.postLink} to={`post/${postItem.id}`}>{postItem.title}</Link>
                </div>
                <div className={style.postContent}>{postItem.content}</div>
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
    posts: state.main.posts
  }
};

export default connect(mapStateToProps, Actions)(Main);
