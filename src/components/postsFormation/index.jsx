import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import LikeDislikeView from "src/components/likeDislikeView";
import DeleteIcon from "src/components/icon/deleteIcon";
import Confirm from "../../components/confirm";

export default function PostsFormation ({ posts, deletingPostId, user,
                                          onClickLikeIncrease, onClickDislikeIncrease,
                                          onClickOpenModal, onDeletePost, onClickCloseModal}) {

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
                      isLiked={user ? postItem.relatedLikes.includes(user.id) : false}
                      isDisliked={user ? postItem.relatedDislikes.includes(user.id) : false}
                      viewsCount={postItem.viewsCount}
                      likesCount={postItem.likesCount}
                      dislikesCount={postItem.dislikesCount}
                      onClickLike={onClickLikeIncrease}
                      onClickDislike={onClickDislikeIncrease}
                    />
                  <div className={style.author}>
                    <Link className={style.authorLink} to={`user-page/${postItem.author.id}`}>
                      Автор: { postItem.author.login }</Link>
                  </div>
                  {(!user || user.id !== postItem.author.id) ? '' :
                    <div className={style.deletePost} onClick={onClickOpenModal(postItem.id)}>
                      <DeleteIcon size={20} />
                    </div>
                  }
                  {deletingPostId && <Confirm message={'Удалить пост?'}
                                          success={'Да'}
                                          cancel={'Нет'}
                                          onClickSuccess={onDeletePost}
                                          onClickCancel={onClickCloseModal} />
                  }
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
