import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  dataPrint        : Object,
  handleDeleteTask : () => void,
  handleUpdateTask : () => void,
}

const Task = observer(({dataPrint, handleDeleteTask, handleUpdateTask} : Props) => (
  <li className={`Task row ${dataPrint.done ? 'check ' : ''}`}>
    <div className="form-check col-md-2">
      <input className="form-check-input" type="checkbox" onClick={handleUpdateTask.bind(null, dataPrint)}/>
      <label className="form-check-label">
        Done
      </label>
    </div>
    <h3 className="col-md-2">{dataPrint.title}</h3>
    <p className="col-md-6">{dataPrint.description}</p>
    <button type="button" className="col-md-2 btn btn-danger" onClick={handleDeleteTask.bind(null, dataPrint._id)}>Delete Task</button>
  </li>
));

export default Task;
