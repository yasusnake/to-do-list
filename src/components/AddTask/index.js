import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

class AddTask extends Component {
  constructor (props) {
    super(props);
    this.state = {
      titleValue       : '',
      descriptionValue : '',
      done             : false,
    };
  }

  render () {
    return (
      <div className="container">
        <form className="row form">
          <div className="col-md-6">
            <label>Task</label>
            <input className="col-md-12 form-control" name="titleValue" type="text" value={this.state.titleValue} onChange={this.handleChange} />
          </div>
          <div className="col-md-6">
            <label>Description</label>
            <input className="col-md-12 form-control" name="descriptionValue" type="text" value={this.state.descriptionValue} onChange={this.handleChange} />
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
    if (this.state.title === '' || this.state.descriptionValue === '') {
      alert('You need to write in both fields!');
    } else {
      const tempObjTask = {
        title       : this.state.titleValue,
        description : this.state.descriptionValue,
        done        : this.state.done,
      };

      this.props.createTask(tempObjTask);

      this.setState({
        titleValue       : '',
        descriptionValue : '',
      });

      swal('Good job!', 'You clicked the button!', 'success', {
        button : 'Aww yiss!',
      });
    }
  }
}

AddTask.propTypes = {
  createTask : PropTypes.func,
};

export default AddTask;
