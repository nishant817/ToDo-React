import React from 'react';
import ToDos from './components/ToDos'

import './App.css';

class App extends React.Component {
  state = {
    todoList: [{
      id: 1,
      title: 'Take out the trash',
      completed: false
    }, {
      id: 2,
      title: 'Submit assignment',
      completed: false
    }, {
      id: 3,
      title: 'Do something fun',
      completed: false
    }]
  }

  render () {
    //console.log(this.state.todos);
    return (
      <div className="container">
        <div className="App">
          <h1>Hello</h1>
          <ToDos todos={this.state.todoList} />
        </div>
      </div>
    );
  }
  
}

export default App;
