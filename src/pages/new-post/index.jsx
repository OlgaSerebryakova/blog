import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as Actions from './actions';
import Input from "src/components/input";
import Button from "src/components/button";
import Textarea from "src/components/textarea";
import style from './style.css';


class Post extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    createPostAction: PropTypes.func.isRequired
  };

  onSubmit = () => {
    this.props.createPostAction(this.props.dataForm);
  };

  render() {
    return(
      <div className={style.wrapperNewPost}>
        <div className={style.containerNewPost}>
          <h3>Создать новый пост</h3>
          <div>
            <div>Тема</div>
            <div>
              <Input
                id='title'
                value={this.props.dataForm.title}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <div>Текс поста</div>
            <div>
              <Textarea
                id='content'
                value={this.props.dataForm.content}
                onChange={this.props.changeFieldAction}
              />
            </div>
          </div>
          <div>
            <Button onClick={this.onSubmit}>Опубликовать</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.newPost.dataForm
});

export default connect(mapStateToProps, Actions)(Post);

