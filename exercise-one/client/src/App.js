import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Kim', age: 24 }, 
      { name: 'Josiah', age: 27 }, 
      { name: 'Jared', age: 25 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DONT DO THIS this.state.persons[0].name = 'Kimberly';

    this.setState( {
        persons: [
          { name: newName, age: 24 }, 
          { name: 'Josiah', age: 27 }, 
          { name: 'Jared', age: 28 }
        ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Kim', age: 24 }, 
        { name: event.target.value, age: 27 }, 
        { name: 'Jared', age: 28 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=> this.switchNameHandler('KIMMM!')}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'KIM!')}
          changed={this.nameChangedHandler} >My Hobbies: Gaming</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
