import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Grid, FormGroup, Button, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

import { addTodo } from './../actions/todosAction';

class New extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todoTask: '',
      isComplete: false
    };
  }

  handleChange = (e) => {
    this.setState({ todoTask: e.target.value });
  }

  changeComplete = (e) => {
    if (this.state.isComplete === false) {
      this.setState({ isComplete: true });
      return;
    }
    this.setState({ isComplete: false });
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.todoTask === false) {
      alert('Please enter the form details.');
      return
    }
    let todo = {
      task: this.state.todoTask,
      isComplete: this.state.isComplete
    }
    this.props.addTodo(todo)
      .then(resp => {
        if (resp === true) {
          this.props.history.push('/todos');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid>
        <form>
          <FormGroup controlId='todo-task'>
            <ControlLabel>TODO Task</ControlLabel>
            <FormControl
              type="text"
              value={this.state.todoTask}
              placeholder="Enter todo task..."
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Checkbox inline onChange={this.changeComplete}>Complete</Checkbox>
          </FormGroup>
          <Button type="submit" onClick={this.submitForm}>Submit</Button>
        </form>
      </Grid >
    );
  }
}

export default connect(null, { addTodo })(New);
