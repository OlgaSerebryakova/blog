import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as Actions from './actions';
import style from './style.css';
import LikeDislikeView from 'src/components/likeDislikeView';
import Loading from 'src/components/icon/loading';
import {Link} from "react-router-dom";
import DeleteIcon from "../../components/icon/deleteIcon";
import Confirm from "../../components/confirm";
import Redact from 'src/components/icon/redPencil';
import Modal from "../../components/modal";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Button from "../../components/button";
import TwoButtons from "../../components/twoButtons";

class PostPage extends Component {

  static propTypes ={
    getPostDataAction: PropTypes.func.isRequired,
    increaseLikeCountAction: PropTypes.func.isRequired,
    increaseDislikeCountAction: PropTypes.func.isRequired,
    openRedactPostAction: PropTypes.func,
    closeRedactPostAction:  PropTypes.func,
    redactPostAction: PropTypes.func,
    data: PropTypes.object,
    redactPost: PropTypes.object,
    deletingPostId: PropTypes.string,
    redactPostId: PropTypes.string
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

  onClickOpenModalDeletePost = (postId) => () => {
    this.props.isShowModalOpenAction(postId);
  };

  onClickCloseModal = () => {
    this.props.isShowModalCloseAction();
  };

  onDeletePost = () => {
    this.props.deletePostAction(this.props.deletingPostId);
  };

  onClickOpenRedactPost = (post) => () => {
    const redactPost = {
      title: post.title,
      content: post.content
    };
    const postId = post.id;
    this.props.openRedactPostAction(redactPost, postId);
  };

  onSubmit = () => {
    this.props.redactPostAction(this.props.redactPostId, this.props.redactPost);
  };

  onClickCloseRedactPost = () => {
    this.props.closeRedactPostAction();
  };

  render() {
    const { data, deletingPostId, redactPostId, redactPost } = this.props;

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
                      isLiked={data.relatedLikes.includes(this.props.user.id)}
                      isDisliked={data.relatedDislikes.includes(this.props.user.id)}
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

                {(!this.props.user || this.props.user.id !== data.author.id) ? '' :
                  <div className={style.footer}>
                    <div className={style.deletePost} onClick={this.onClickOpenModalDeletePost(data.id)}>
                      <DeleteIcon size={20} />
                    </div>
                    <div onClick={this.onClickOpenRedactPost(data)}>
                      <Redact size={20} />
                    </div>
                  </div>
                }
                {deletingPostId && <Confirm message={'Удалить пост?'}
                    success={'Да'}
                    cancel={'Нет'}
                    onClickSuccess={this.onDeletePost}
                    onClickCancel={this.onClickCloseModal} />
                }
                {redactPostId && <Modal >
                  <div>
                    <div>
                      <div>Тема</div>
                      <div>
                        <Input
                          id='title'
                          value={redactPost.title}
                          onChange={this.props.changeFieldAction}
                        />
                      </div>
                    </div>
                  <div>
                    <div>Текс поста</div>
                      <div>
                        <Textarea
                          id='content'
                          value={redactPost.content}
                          onChange={this.props.changeFieldAction}
                        />
                      </div>
                    </div>
                  </div>
                  <TwoButtons onClickSuccess={this.onSubmit}
                              onClickCancel={this.onClickCloseRedactPost}
                              success={'Опубликовать изменения'}
                              cancel={'Отмена'}/>
                </Modal>
                }
          </div>
            : <div><Loading size={50}/></div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.post.data,
    user: state.applicationReducer.user,
    deletingPostId: state.post.deletingPostId,
    redactPost: state.post.redactPost,
    redactPostId: state.post.redactPostId
  }
};

export default connect(mapStateToProps, Actions)(PostPage)