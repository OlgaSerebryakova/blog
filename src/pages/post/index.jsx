import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as Actions from './actions';
import style from './style.css';


class PostPage extends Component {

  static propTypes ={
    getPostDataAction: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }

  render() {
    const { data } = this.props;

    return(
      <div className={style.postPage}>
        <div className={style.postContainer}>
          { data
            ? <div className={style.postWrapper}>
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