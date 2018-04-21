import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

/* eslint-disable */
// Components
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

@inject('TasksStore')
@observer
class App extends Component {
  componentDidMount () {
    this.props.TasksStore.getRequest();
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <AddTask createTask={this.props.TasksStore.addTask} />
        <div className="container">
          <Tasks { ...{
            data             : this.props.TasksStore.tasks,
            handleDeleteTask : this.props.TasksStore.deleteTask,
            handleUpdateTask : this.props.TasksStore.updateTask,
          }}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data             : PropTypes.object,
  className        : PropTypes.func,
  handleDeleteTask : PropTypes.func,
  handleUpdateTask : PropTypes.func,
  TasksStore       : PropTypes.object,
};

export default App;
