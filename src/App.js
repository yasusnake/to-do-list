import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
//import Inputtask from './components/Inputtask';
//import Sendtask from './components/Sendtask';

  class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      tasks: [
        {title: "Task 1", description: "Description 1", done: false},
        {title: "Task 2", description: "Description 2", done: false},
      ]
    }
  }

  handleSubmit = (newTask) => {
    console.log(newTask);
    const tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({tasks});
  }

  handleUpdateTask = (updateTask) => {
    console.log(updateTask);
    const tasks = this.state.tasks;
    const indexToReplace = _.findIndex(tasks, {title : updateTask});
    console.log('indexToReplace', indexToReplace);
    tasks[indexToReplace].done = !tasks[indexToReplace].done;
    console.log('task found', tasks[indexToReplace].done);
    this.setState({tasks});
  }

  handleDeleteTask = (removeTask) => {
    console.log(removeTask);
    this.setState((prevState) => (
      {
        tasks : prevState.tasks.filter((tasks) => removeTask  !== tasks.title)
      }
    ));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>

        <AddTask createTask={this.handleSubmit} />
        <div className="container">
          <Tasks 
            data={this.state.tasks} 
            handleDeleteTask={this.handleDeleteTask}
            handleUpdateTask={this.handleUpdateTask}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
