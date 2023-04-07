import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h1>Father</h1>
            <section>
                    <MySelf/>
                    <Brother/>
                    <Sister/>
            </section>
        </div>
    );
};

export default Father;