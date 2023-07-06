import styles from './text-input.module.css';
import React from 'react';


// **** IProps **** //

interface IProps {
  id: string;
  className?: string;
  type?: 'text' | 'password';
  label: string;
  placeholder?: string;
  multiline?: boolean;
}


// **** Component **** //

export const TextInput = ({ id, label, className, type = 'text', multiline = false, ...props }: IProps) => {
  const elementName = multiline ? 'textarea' : 'input';

  const element = React.createElement(elementName, {
    id: id,
    className: `${styles.input} ${multiline ? styles.multiline : ''} ${className}`,
    type: type,
    ...props
  });

  return (
    <div className={styles.formControl}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {element}
    </div>
  );
};

// **** Default export **** //

export default TextInput;
