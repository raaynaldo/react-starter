import React from 'react';

import styles from './Button.module.css';

const buttonVariant = Object.freeze({
  primary: 'primary',
  outline: 'outline',
  ghost: 'ghost',
});

export default function Button(props) {
  const { children, className = '', variant = 'primary', ...rest } = props;
  return (
    <button
      variant={variant}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
