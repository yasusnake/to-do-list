import { observable, action } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

class TasksStore {
  @observable tasks = []

/* eslint-disable */
  @action
  getRequest = () => {
    axios.get('https://dnamic.lib.id/practiceserver/get/')
    .then(res => {
      const task = res.data;
      console.log(task);
      this.tasks = this.tasks.concat(task);
    })
  }

  @action
  addTask = (task) => {
    console.log(task);
    axios.post('https://dnamic.lib.id/practiceserver/create/', {
      title       : task.title,
      description : task.description
    })
    .then(res => {
      const task = res.data;
      console.log('task add', res);
      this.tasks = this.tasks.concat(task);
    })
  }

  @action
  updateTask = (updateTask) => {
    console.log(updateTask);
    updateTask.done = true;
    axios.post('https://dnamic.lib.id/practiceserver/update/', updateTask)
    .then(res => {
      console.log('Update', res);
      const tasks = this.tasks;
      const indexToReplace = _.findIndex(tasks, {_id : updateTask});
      console.log('indexToReplace', indexToReplace);
      tasks[indexToReplace].done = !tasks[indexToReplace].done;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  @action
  deleteTask = (removeTask) => {
    console.log('id', removeTask);
    axios.post('https://dnamic.lib.id/practiceserver/delete/', {_id : removeTask})
    .then(res => {
      console.log('delete', res);
      this.tasks = this.tasks.filter((task) => removeTask  !== task._id);
    })
  }
}

const tasksStore = new TasksStore();
export default tasksStore;
