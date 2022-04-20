import React from 'react';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';
import Version from '/img/version.png';

export const Tag = ({ children, color }) => (
  <div className={styles.tagBox}>
    <Image img={Version} style={{ width: '16px', marginRight: '5px' }} />
    <span>{children}</span>
  </div>
);
