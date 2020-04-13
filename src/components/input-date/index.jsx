import React, { Component } from 'react';
import moment from "moment";
import DeleteIcon from "../icon/deleteIcon";
import style from "../input/style.css";

export default class InputDate extends Component {

  static getDerivedStateFromProps(props, state) {
    const momentDateProps = moment(new Date(props.value));

    if (state.value === null) {
      return {
        value: momentDateProps.isValid() ? momentDateProps.format('DD.MM.YYYY') : null
      }
    }

    return null;
  }

  constructor(props) {
    super(props);

    const momentDate = moment(new Date(props.value));

    this.state = {
      value: momentDate.isValid() ? momentDate.format('DD.MM.YYYY') : null
    };
  }

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      value
    });
  };

  onBlur = () => {
    const { id } = this.props;
    const momentDateState = moment(this.state.value, 'DD.MM.YYYY');
    const normalizeDate = momentDateState.isValid() ? momentDateState.toISOString() : '';

    this.props.onChange({ fieldId: id, value: normalizeDate });
  };

  render() {
    const { value, error } = this.state;

    return (
      <div>
        <input
          type="text"
          value={value || ''}
          onChange={this.onChange}
          onBlur={this.onBlur}
          className={style.inputForm}
        />
      </div>

    );
  }
}