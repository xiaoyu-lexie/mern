import React, {useReducer} from 'react';

import './Input.css';
import {validate} from '../../util/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }
    default:
      return state
  }
}

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid: false})

  const changeHandler = (event) => {
    dispatch({type: 'CHANGE', val: event.target.value, validators: props.validators})
    console.log('props.validators', props.validators)
  }

  const element = props.element === 'input'?
  <input
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    value={inputState.value}
    onChange={changeHandler}
    ></input> :
  <textarea
    id={props.id}
    rows={props.rows || 3}
    value={inputState.value}
    onChange={changeHandler}
    ></textarea>

  return (
  <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
    <label htmlFor={props.title}>{props.label}</label>
    {element}
    {!inputState.isValid && <p>{props.errorText}</p>}
  </div>)
};

export default Input;