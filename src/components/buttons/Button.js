import React from 'react';
import clsx from 'clsx';
import { FaSpinner } from 'react-icons/fa';

import styles from './Button.module.css';
const ButtonVariant = Object.freeze({
  Primary: 'primary',
  Secondary: 'secondary',
  Outline: 'outline',
  Ghost: 'ghost',
});

export default function Button(props) {
  const {
    children,
    className = '',
    disabled: buttonDisabled,
    isLoading,
    variant = 'primary',
    ...rest
  } = props;

  const disabled = buttonDisabled || isLoading;

  return (
    <button
      variant={variant}
      className={clsx(
        styles.button,
        styles[variant],
        isLoading && styles.loading,
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {isLoading && (
        <div className={styles.spinner}>
          <FaSpinner
            className={clsx(styles.animateSpin, [
              [ButtonVariant.Primary].includes(variant) && styles.textWhite,
              [ButtonVariant.Secondary, ButtonVariant.Ghost].includes(
                variant
              ) && styles.textBlue,
              [ButtonVariant.Outline].includes(variant) && styles.textGray,
            ])}
          />
        </div>
      )}
      {children}
    </button>
  );
}
