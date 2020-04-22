import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import * as Actions from './actions';
import PropTypes from "prop-types";
import ItemNotify from 'src/components/itemNotify';

class Notify extends Component {

  static propTypes = {
    removeNotifyAction: PropTypes.func,
    showNotify: PropTypes.bool.isRequired,
    list: PropTypes.array
  };

  removeNotify = (id) => {
    this.props.removeNotifyAction(id)
  };

  render() {
    const { showNotify, list } = this.props;
    console.log('list', list);
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
  showNotify: state.notify.showNotify,
  list: state.notify.list
});

export default connect(mapStateToProps, Actions)(Notify)