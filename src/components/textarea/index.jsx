import React, { Component } from 'react';
import style from "src/components/textarea/style.css";

export default class Textarea extends Component {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };

  render() {
    const { value } = this.props;

    return (
      <textarea
        className={style.textareaForm}
        type="text"
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
