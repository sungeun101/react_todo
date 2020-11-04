import React from 'react';

export default ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </div>
  );
};
