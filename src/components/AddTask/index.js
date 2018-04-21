import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

class AddTask extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title       : '',
      description : '',
    };
  }

  render () {
    return (
      <div className="container">
        <form className="row form">
          <div className="col-md-6">
            <label>Task</label>
            <input className="col-md-12 form-control" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="col-md-6">
            <label>Description</label>
            <input className="col-md-12 form-control" name="description" type="text" value={this.state.description} onChange={this.handleChange} />
          </div>
          <button type="button" className="col-md-12 btn btn-primary btn-lg btn-block" onClick={this.createTask}>Add Task</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    });
  }

  createTask = () => {
    if (this.state.title === '' || this.state.description === '') {
      /* eslint-disable */
      alert('You need to write in both fields!');
      /* eslint-enable */
    } else {
      const tempObjTask = {
        title       : this.state.title,
        description : this.state.description,
      };

      this.props.createTask(tempObjTask);

      this.setState({
        title       : '',
        description : '',
      });

      swal('Good job!', 'You clicked the button!', 'success', {
        button : 'Okay',
      });
    }
  }
}

AddTask.propTypes = {
  createTask : PropTypes.func,
};

export default AddTask;
