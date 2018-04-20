import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { observer } from 'mobx-react';

// Componente
import Task from '../Task';

@observer
class Tasks extends Component {
  render () {
    return (
      <ul className="Tasks">
        {
          _.map(this.props.data, (task) => {
            return (
              <Task { ...{
                key              : task.title,
                dataPrint        : task,
                handleDeleteTask : this.props.handleDeleteTask,
                handleUpdateTask : this.props.handleUpdateTask,
              }}/>
            );
          })}
      </ul>
    );
  }
}

Tasks.propTypes = {
  data             : PropTypes.array,
  handleUpdateTask : PropTypes.func,
  handleDeleteTask : PropTypes.func,
};

export default Tasks;
