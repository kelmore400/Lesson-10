import React from 'react';
import clsx from 'clsx';
import styles from './Control.module.scss';

export const Control = props => {

  const { name, inputType, onChange, labelText, className, ...rest } = props;

  let input = null;
  if(inputType === 'textarea'){
    input = <textarea name={name} onChange={onChange} {...rest} />
  } else {
    input = <input name={name} onChange={onChange} {...rest} />
  }

  return(
    <div className={clsx(styles.control, className)}>
        {input}
      <label>{labelText}</label>
    </div>
  )
}