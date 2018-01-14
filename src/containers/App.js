import React, { PureComponent } from 'react';
import classes from  './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js Inside Constructor: ', props);
    //doesn't make a difference where you initialize the state
    this.state = {
      persons: [
        { id: '987asd6dyf', name: 'Max', age: 28 },
        { id: '987asyhdj', name: 'Manu', age: 29 },
        { id: 'jk23g45iu32', name: 'Stephanie', age: 26 }
      ]
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {    
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //     console.log('[UDPATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate (nextProps, nextState) {
      console.log('[UDPATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate (e) {
      console.log('[UDPATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: '987asd6dyf', name: 'Max', age: 28 },
  //     { id: '987asyhdj', name: 'Manu', age: 29 },
  //     { id: 'jk23g45iu32', name: 'Stephanie', age: 26 }
  //   ]
  // };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
      });
  }

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find(person => person.id === id);
    const personIndex = this.state.persons.findIndex(p => p.id === id); //returns the index of the person

    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>;
    }

    return (
      /* <StyleRoot> */
        /* <div className={classes.App}> */
        <WithClass classes={classes.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </WithClass>
        // </div>
      // </StyleRoot>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
// export default Radium(App);
