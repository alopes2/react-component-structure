import React from 'react';

const anotherWithClass = (WrappedContainer, className) => {
    return (props) => (
        <div className={className}>
            <WrappedContainer {...props}/>
        </div>
    )
};

export default anotherWithClass;