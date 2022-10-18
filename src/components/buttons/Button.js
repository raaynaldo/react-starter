import React from 'react';
import clsx from 'clsx';
import { FaSpinner } from 'react-icons/fa';

import styles from './Button.module.css';
const ButtonVariant = Object.freeze({
  Primary: 'primary',
  Secondary: 'secondary',
  Outline: 'outline',
  Ghost: 'ghost',
  Dark: 'dark',
  Light: 'light',
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
      // className={`${styles.button} ${styles[variant]} ${className} ${
      //   isLoading ? styles.loading : ''
      // }`}

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
              [ButtonVariant.Primary, ButtonVariant.Dark].includes(variant) &&
                styles.textWhite,
              [ButtonVariant.Outline, ButtonVariant.Ghost].includes(variant) &&
                styles.textBlue,
              [ButtonVariant.Light].includes(variant) && styles.textBlack,
              [ButtonVariant.Secondary].includes(variant) && styles.textGray,
            ])}
          />
        </div>
      )}
      {children}
    </button>
  );
}
