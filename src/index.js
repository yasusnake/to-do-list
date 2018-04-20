import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

// Store
import TasksStore from './stores/TasksStore';

ReactDOM.render(
  <Provider TasksStore={TasksStore}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
