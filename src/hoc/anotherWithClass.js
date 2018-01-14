import React, { Component } from 'react';

// const anotherWithClass = (WrappedContainer, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedContainer {...props}/>
//         </div>
//     )
// };

const anotherWithClass = (WrappedContainer, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedContainer {...this.props}/>
                </div>
            );
        }
    }
};

export default anotherWithClass;