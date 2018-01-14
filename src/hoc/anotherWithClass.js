import React from 'react';

const anotherWithClass = (WrappedContainer, className) => {
    return (props) => (
        <div className={className}>
            <WrappedContainer />
        </div>
    )
};

export default anotherWithClass;