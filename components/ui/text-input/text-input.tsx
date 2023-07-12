import styles from "./text-input.module.css";
import React from "react";


// **** IProps **** //

interface IProps {
  id?: string;
  className?: string;
  type?: "text" | "password";
  label?: string;
  placeholder?: string;
  multiline?: boolean;
  value?: string;
  required?: boolean;
  endAdornment?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


// **** Component **** //

export const TextInput = ({ id, label, className, endAdornment, type = "text", multiline = false, ...props }: IProps) => {
  const elementName = multiline ? "textarea" : "input";

  const element = React.createElement(elementName, {
    id: id,
    className: `${styles.input} ${multiline ? styles.multiline : ""} ${className}`,
    type: type,
    ...props
  });

  return (
    <div className={styles.formControl}>
      {
        label
          ? (<label className={styles.label} htmlFor={id}>{label}</label>)
          : null
      }
      <div className={styles.inputWrapper}>
        {element}
        {endAdornment ? (<span className={styles.endAdornmentContainer}>{endAdornment}</span>) : null}
      </div>
    </div>
  );
};

// **** Default export **** //

export default TextInput;
