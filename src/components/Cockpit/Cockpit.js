import React from 'react';

import classes from './Cockpit.css';

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
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                /* style={style} */
                className={btnClass}
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>
    );
};

export default cockpit;