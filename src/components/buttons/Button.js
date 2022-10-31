import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

export default function Button(props) {
  const { children, className = '', variant = 'primary', ...rest } = props;

  return (
    <button
      variant={variant}
      className={clsx(styles.button, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
