import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(ringContext);

    return (
      <div>
        <h1>Brother</h1>
        <p>{ring}</p>
      </div>
    );
};

export default Brother;