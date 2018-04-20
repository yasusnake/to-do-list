import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// Components
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

@inject('TasksStore')
@observer
class App extends Component {
  render () {
    console.log(this.props.TasksStore);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <AddTask createTask={this.handleSubmit} />
        <div className="container">
          <Tasks { ...{
            data             : this.props.TasksStore.tasks,
            handleDeleteTask : this.handleDeleteTask,
            handleUpdateTask : this.handleUpdateTask,
          }}/>
        </div>
      </div>
    );
  }

  handleSubmit = (newTask) => {
    this.props.TasksStore.addTask(newTask);
  }

  handleUpdateTask = (updateTask) => {
    this.props.TasksStore.updateTask(updateTask);
  }

  handleDeleteTask = (removeTask) => {
    this.props.TasksStore.deleteTask(removeTask);
  }
}

App.propTypes = {
  TasksStore : PropTypes.object,
};

export default App;
