import React from 'react';
import styles from './styles.module.css';

const Version = require('@site/static/svg/version.svg').default;

export const Tag = ({ children }) => (
  <div className={styles.tagBox}>
    <Version className={styles.svg} />
    <span>{children}</span>
  </div>
);
