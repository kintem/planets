import React from 'react';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({icon, clickFunction}) => {
  let correctIcon;

  if (icon === 'minus') {
    correctIcon = faMinusCircle;
  } if (icon === 'plus') {
    correctIcon = faPlusCircle;
  }
  return (
    <button onClick={clickFunction} className={icon}>
      <FontAwesomeIcon icon={correctIcon} />
    </button>
  );
}

export default Button;