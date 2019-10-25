import React from 'react';

const Who = ({name, job}) => {
    return (
        <div className="col=9">
            <h1>{name}</h1>
            <h2>{job}</h2>
        </div>
    );
};

export default Who;