import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import * as Actions from './actions';
import PropTypes from "prop-types";
import ItemNotify from 'src/components/notification/itemNotify';

class Notify extends Component {

  static propTypes = {
    removeNotifyAction: PropTypes.func,
    list: PropTypes.array
  };

  removeNotify = (id) => {
    this.props.removeNotifyAction(id)
  };

  render() {
    const { list } = this.props;
    return (
      <div className={style.wrapperNotify}>
        {list.map((item) => {
          return <ItemNotify key={item.id} item={item} removeNotify={this.removeNotify} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.notify.list
});

export default connect(mapStateToProps, Actions)(Notify)