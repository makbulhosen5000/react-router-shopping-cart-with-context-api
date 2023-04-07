import React from 'react';

const Cousin = ({ children }) => {
  return (
    <div>
      <h1>Cousin</h1>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
};

export default Cousin;