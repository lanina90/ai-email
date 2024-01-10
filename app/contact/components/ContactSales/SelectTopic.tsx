import React from 'react';
import styles from "./ContactSales.module.scss";

const SelectTopic = () => {
  return (
    <div className={styles['form-field-wrapper']}>
      <label htmlFor="Contact-Select" >Choose a topic</label>
      <select id="Contact-Select" name="Contact-Select" required
              className={styles['form-input']}>
        <option value="">Select one...</option>
        <option value="First">First Choice</option>
        <option value="Second">Second Choice</option>
        <option value="Third">Third Choice</option>
      </select>
    </div>
  );
};

export default SelectTopic;