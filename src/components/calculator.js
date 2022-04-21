import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

  }

  onClickEvent = (event) => {
    const { value } = event.target;
    const { total, next, operation } = calculate(this.state, value);
    this.setState({ total, next, operation });
    const output = document.querySelector('.input');
    if (next !== null) {
      output.innerHTML = next;
    } else if (total !== null) {
      output.innerHTML = total;
    } else {
      output.innerHTML = '';
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="input-div">
        <h2 className="input">0</h2>
        </div>

        <div className="row">
          <button onClick={this.onClickEvent} className="grey-btn" type="button">AC</button>
          <button onClick={this.onClickEvent} value="AC" className="grey-btn" type="button">+/-</button>
          <button onClick={this.onClickEvent} value="+/-" className="grey-btn" type="button">%</button>
          <button onClick={this.onClickEvent} value="÷" className="orange-btn" type="button">÷</button>
        </div>
        <div className="row">
          <button onClick={this.onClickEvent} value="7" className="grey-btn" type="button">7</button>
          <button onClick={this.onClickEvent} value="8" className="grey-btn" type="button">8</button>
          <button onClick={this.onClickEvent} value="9" className="grey-btn" type="button">9</button>
          <button onClick={this.onClickEvent} value="x" className="orange-btn" type="button">x</button>
        </div>
        <div className="row">
          <button onClick={this.onClickEvent} value="4" className="grey-btn" type="button">4</button>
          <button onClick={this.onClickEvent} value="5" className="grey-btn" type="button">5</button>
          <button onClick={this.onClickEvent} value="6" className="grey-btn" type="button">6</button>
          <button onClick={this.onClickEvent} value="-" className="orange-btn" type="button">-</button>
        </div>
        <div className="row">
          <button onClick={this.onClickEvent} value="1" className="grey-btn" type="button">1</button>
          <button onClick={this.onClickEvent} value="2" className="grey-btn" type="button">2</button>
          <button onClick={this.onClickEvent} value="3" className="grey-btn" type="button">3</button>
          <button onClick={this.onClickEvent} value="+" className="orange-btn" type="button">+</button>
        </div>
        <div className="row">
          <button onClick={this.onClickEvent} value="0" className="grey-btn plus" type="button">0</button>
          <button onClick={this.onClickEvent} value="." className="grey-btn" type="button">.</button>
          <button onClick={this.onClickEvent} value="=" className="orange-btn" type="button">=</button>
        </div>

      </div>

    );
  }
}

export default Calculator;
