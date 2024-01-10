import React from 'react';
import styles from "./ContactSales.module.scss";


const Input = ({id, label, name}:{id:string, label:string, name:string}) => {
  return (
    <div className={styles["form-field-wrapper"]}>
      <label htmlFor={id}
             className={styles["field-label"]}>
        {label}</label>
      <input className={styles["form-input"]} maxLength={256} name={name}
             placeholder=""
             type="text"
             id={id}
             required
      />
    </div>
  );
};

export default Input;