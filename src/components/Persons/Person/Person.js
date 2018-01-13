import React, { Component} from 'react';
import classes from './Person.css';
// import Radium from 'radium';

class Person extends Component {
    // When using class-based components, it`s this.props
    // like <p>My name is {this.props.name}</p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    render() {
        return (
            /* <div className="Person" style={style}> */
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;
// export default Radium(Person);