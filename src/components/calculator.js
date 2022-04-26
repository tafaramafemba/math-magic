import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [defaultState, changeState] = useState({ total: null, next: null, operation: null })

  const onClickEvent = (event) => {
    const { value } = event.target;
    const { total, next, operation } = calculate(defaultState, value);
    changeState({ total, next, operation });
    const output = document.querySelector('.input');
    if (next !== null) {
      output.innerHTML = next;
    } else if (total !== null) {
      output.innerHTML = total;
    } else {
      output.innerHTML = '0';
    }
  };

  return (
    <div className='container'>
      <h2 className='math'>Lets do some math!</h2>
<div className="calculator">
      <div className="input-div">
        <h2 className="input">0</h2>
      </div>

      <div className="row">
        <button onClick={onClickEvent} value="AC" className="grey-btn" type="button">AC</button>
        <button onClick={onClickEvent} value="+/-" className="grey-btn" type="button">+/-</button>
        <button onClick={onClickEvent} value="%" className="grey-btn" type="button">%</button>
        <button onClick={onClickEvent} value="÷" className="orange-btn" type="button">÷</button>
      </div>
      <div className="row">
        <button onClick={onClickEvent} value="7" className="grey-btn" type="button">7</button>
        <button onClick={onClickEvent} value="8" className="grey-btn" type="button">8</button>
        <button onClick={onClickEvent} value="9" className="grey-btn" type="button">9</button>
        <button onClick={onClickEvent} value="x" className="orange-btn" type="button">x</button>
      </div>
      <div className="row">
        <button onClick={onClickEvent} value="4" className="grey-btn" type="button">4</button>
        <button onClick={onClickEvent} value="5" className="grey-btn" type="button">5</button>
        <button onClick={onClickEvent} value="6" className="grey-btn" type="button">6</button>
        <button onClick={onClickEvent} value="-" className="orange-btn" type="button">-</button>
      </div>
      <div className="row">
        <button onClick={onClickEvent} value="1" className="grey-btn" type="button">1</button>
        <button onClick={onClickEvent} value="2" className="grey-btn" type="button">2</button>
        <button onClick={onClickEvent} value="3" className="grey-btn" type="button">3</button>
        <button onClick={onClickEvent} value="+" className="orange-btn" type="button">+</button>
      </div>
      <div className="row">
        <button onClick={onClickEvent} value="0" className="grey-btn plus" type="button">0</button>
        <button onClick={onClickEvent} value="." className="grey-btn" type="button">.</button>
        <button onClick={onClickEvent} value="=" className="orange-btn" type="button">=</button>
      </div>

    </div>  
    </div>

  );
}