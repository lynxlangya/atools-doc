import React from 'react';

export const Tag = ({ children, color }) => (
  <span
    style={{
      backgroundColor: '#1877F2',
      borderRadius: '20px',
      color: '#fff',
      padding: '2px 10px',
      cursor: 'pointer',
    }}
  >
    {children}
  </span>
);
