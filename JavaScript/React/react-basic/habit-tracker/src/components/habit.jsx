import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 한다.
    //do not use this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-circle"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
