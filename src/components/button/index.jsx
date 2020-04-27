import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from "./style.css";


export default class Button extends Component {
  static propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
    typeButton: PropTypes.string
  };

  onClick = () => {
    this.props.onClick && this.props.onClick(this.props.id)
  };

  render() {
    return(
      <div>
        <button className={`${style.button} ${style[this.props.typeButton]}`}
                onClick={this.onClick}>{this.props.children}</button>
      </div>
    )
  }
};