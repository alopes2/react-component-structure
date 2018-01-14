import React from 'react';

import classes from './Cockpit.css';

import Aux from '../../hoc/AuxWrapper';

const cockpit = ( props ) => {
    const assignedClasses = [];

    let btnClass = classes.Button;
    if(props.showPersons)
        btnClass = [classes.Button, classes.red].join(' ');

    if(props.persons.length <= 2)
      assignedClasses.push(classes.red)
    if(props.persons.length <= 1)
      assignedClasses.push(classes.bold)

    return (
        /* <Aux> */
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                /* style={style} */
                className={btnClass}
                onClick={props.clicked}
            >Toggle Persons</button>
        </React.Fragment>
        /* </Aux> */
    );
};

export default cockpit;