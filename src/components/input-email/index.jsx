import React, { Component } from 'react';
import style from "./style.css";

export default class InputEmail extends Component {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };

  onBlur = (e) => {
    const { showNotificationAction } =this.props;
    const reg = /@/;
    console.log('reg.test(e.target.value)', reg.test(e.target.value));

    if (!reg.test(e.target.value)) {
      showNotificationAction('Введен некорректный email', 'error');
    }
  };

  render() {
    const { value, error } = this.props;

    return (
      <div>
        <input
          type="email"
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          className={`${style.inputForm} ${ error ? style.inputError : ''}`}
        />
        <div className={style.error}>{error}</div>
      </div>
    );
  }
}
