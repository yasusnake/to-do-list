// import _ from 'lodash';
import { observable, action } from 'mobx';

class TasksStore {
  @observable tasks = [
    {title : 'Task 1', description : 'Description 1', done : false},
    {title : 'Task 2', description : 'Description 2', done : false},
  ]

  @action
  addTask = task => {
    this.tasks.push(task);
  }

  @action
  updateTask = (updateTask) => {
    const tasks = this.tasks;
    const indexToReplace = _.findIndex(tasks, {title : updateTask});
    tasks[indexToReplace].done = !tasks[indexToReplace].done;
  }

  @action
  deleteTask = (removeTask) => {
    const tasks = this.tasks;
    const indexToRemove = _.findIndex(tasks, {title : removeTask});
    this.tasks.splice(indexToRemove, 1);
  }
}

const tasksStore = new TasksStore();
export default tasksStore;
