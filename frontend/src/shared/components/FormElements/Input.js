import React from 'react';

import './Input.css';

const Input = (props) => {
  const element = props.element === 'input'?
  <input
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    ></input> :
  <textarea
    id={props.id}
    rows={props.rows || 3}
    ></textarea>

  return (<div>
    <label htmlFor={props.title}>{props.label}</label>
    {element}
  </div>)
};

export default Input;