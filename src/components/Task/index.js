import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

  render() {
    return (
    <li key={this.props.dataPrint} className={`Task row ${this.props.dataPrint.done ? 'check ' : ''}`}>
        
        <div className="form-check col-md-2">
          <input className="form-check-input" type="checkbox" onClick={this.handleUpdateTask.bind(null, this.props.dataPrint.title)}/>
          <label className="form-check-label">
            Done
          </label>
        </div>
        <h3 className="col-md-2">{this.props.dataPrint.title}</h3> 
        <p className="col-md-6">{this.props.dataPrint.description}</p>
        <button type="button" className="col-md-2 btn btn-danger" onClick={this.handleDeleteTask.bind(null, this.props.dataPrint.title)}>Delete Task</button>
    </li>
    );
  }

  
  handleUpdateTask = (updateTask) => {
    console.log(updateTask)
    this.props.handleUpdateTask(updateTask);
  }

  handleDeleteTask = (deleteTask) => {
    console.log(deleteTask);
    this.props.handleDeleteTask(deleteTask);
  }

}

Task.propTypes = {
    dataPrint: PropTypes.object,
    handleDeleteTask: PropTypes.func,
    handleUpdateTask: PropTypes.func
};

export default Task;