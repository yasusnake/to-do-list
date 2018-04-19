import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

// Components
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tasks : [
        {title : 'Task 1', description : 'Description 1', done : false},
        {title : 'Task 2', description : 'Description 2', done : false},
      ],
    };
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <AddTask createTask={this.handleSubmit} />
        <div className="container">
          <Tasks { ...{
            data             : this.state.tasks,
            handleDeleteTask : this.handleDeleteTask,
            handleUpdateTask : this.handleUpdateTask,
          }}/>
        </div>
      </div>
    );
  }

  handleSubmit = (newTask) => {
    const tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({tasks});
  }

  handleUpdateTask = (updateTask) => {
    const tasks = this.state.tasks;
    const indexToReplace = _.findIndex(tasks, {title : updateTask});
    tasks[indexToReplace].done = !tasks[indexToReplace].done;
    this.setState({tasks});
  }

  handleDeleteTask = (removeTask) => {
    this.setState((prevState) => (
      {
        tasks : prevState.tasks.filter((tasks) => removeTask  !== tasks.title),
      }
    ));
  }
}

export default App;
