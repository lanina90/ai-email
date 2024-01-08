import React from 'react';
import styles from './Ellipse.module.scss'
import classNames from "classnames";

const Ellipse = ({color}: {color:string}) => {
  return (
    <div className={classNames(styles.ellipse, styles[color])}/>
  );
};

export default Ellipse;