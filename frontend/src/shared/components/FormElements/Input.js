import React, {useReducer, useEffect} from 'react';

import './Input.css';
import {validate} from '../../util/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true
      }
    default:
      return state
  }
}

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouched: false
  })

  const changeHandler = (event) => {
    dispatch({type: 'CHANGE', val: event.target.value, validators: props.validators})
  }

  const blurHandler = () => {
    dispatch({type: 'TOUCH'})
  }

  const {id, onInput} = props;
  const {value, isValid} = inputState;

  // the value and isValid has been updated before running onInput function, since useEffect is invoked so late.
  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]); // we also put onInput here because we get it from outside(props)

  const element = props.element === 'input'?
  <input
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    value={inputState.value}
    onChange={changeHandler}
    //onBlur is to NOT show error before losing focus
    onBlur={blurHandler}
    ></input> :
  <textarea
    id={props.id}
    rows={props.rows || 3}
    value={inputState.value}
    onChange={changeHandler}
    onBlur={blurHandler}
    ></textarea>

  return (
  <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
    <label htmlFor={props.title}>{props.label}</label>
    {element}
    {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
  </div>)
};

export default Input;