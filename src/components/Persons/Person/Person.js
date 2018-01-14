import React, { Component} from 'react';
import classes from './Person.css';
// import Radium from 'radium';
import anotherWithClass from '../../../hoc/anotherWithClass';
import AuxWrapper from '../../../hoc/AuxWrapper';

class Person extends Component {
    
    constructor(props) {
      super(props);
      console.log('[Person.js] Inside Constructor: ', props);
    }

    componentWillMount() {
      console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {    
      console.log('[Person.js] Inside componentDidMount');
    }
    render() {
        console.log('[Person.js] Inside render');
        return (
            /* <div className={classes.Person}> */
            <AuxWrapper>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </AuxWrapper>
            // </div>
        );
    }
}

export default anotherWithClass(Person, classes.Person);
// export default Radium(Person);