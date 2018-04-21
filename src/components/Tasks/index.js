import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';

// Componente
import Task from '../Task';

type Props = {
  data             : Object,
  handleUpdateTask : () => void,
  handleDeleteTask : () => void,
}

const Tasks = observer(({data, handleDeleteTask, handleUpdateTask} : Props) => (
  <ul className="Tasks">
    {
      _.map(data, (task) => {
        return (
          <Task { ...{
            key              : task.title,
            dataPrint        : task,
            handleDeleteTask : handleDeleteTask,
            handleUpdateTask : handleUpdateTask,
          }}/>
        );
      })}
  </ul>
));

export default Tasks;
