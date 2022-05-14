import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './Button.module.scss';


export const Button = props => {
  const { children, className, size, color, iconType, type = 'button', ...rest } = props;
  const render = (
    <span className={styles.contentWrapper}>
      {iconType && <Icon type={iconType} className={clsx(styles.icon, !children && styles.resetMarginRight)} />}
      {children || null}
    </span>
  );

  return(
    <button 
      type={type}
      className={
        clsx(
          [
            styles.container,
            {
              [styles[size]]: size,
              [styles[`container_${color}`]]: color
            },
            className
          ]
        ) 
      }
      {...rest}
    >
      {render}
    </button>
  );
}