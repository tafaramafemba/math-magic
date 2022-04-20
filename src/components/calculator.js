import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="input-div">
          <input className="input" />
        </div>

        <div className="row">
          <button className="grey-btn" type="button">AC</button>
          <button className="grey-btn" type="button">+/-</button>
          <button className="grey-btn" type="button">%</button>
          <button className="orange-btn" type="button">÷</button>
        </div>
        <div className="row">
          <button className="grey-btn" type="button">7</button>
          <button className="grey-btn" type="button">8</button>
          <button className="grey-btn" type="button">9</button>
          <button className="orange-btn" type="button">X</button>
        </div>
        <div className="row">
          <button className="grey-btn" type="button">4</button>
          <button className="grey-btn" type="button">5</button>
          <button className="grey-btn" type="button">6</button>
          <button className="orange-btn" type="button">-</button>
        </div>
        <div className="row">
          <button className="grey-btn" type="button">1</button>
          <button className="grey-btn" type="button">2</button>
          <button className="grey-btn" type="button">3</button>
          <button className="orange-btn" type="button">+</button>
        </div>
        <div className="row">
          <button className="grey-btn plus" type="button">0</button>
          <button className="grey-btn" type="button">.</button>
          <button className="orange-btn" type="button">=</button>
        </div>

      </div>

    );
  }
}

export default Calculator;
