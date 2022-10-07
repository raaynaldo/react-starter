import React from 'react';

import styles from './Button.module.css';

export default function Button(props) {
  const {
    children,
    className = '',
    disabled: buttonDisabled,
    isLoading,
    variant = 'primary',
    ...rest
  } = props;
  const disabled = buttonDisabled;
  return (
    <button
      variant={variant}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
