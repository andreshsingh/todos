import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Button } from 'react-bootstrap';

import { fetchTodos } from './../actions/todosAction';

import './index.css';

class Todos extends Component {
  componentDidMount() {
    console.log(this.props.todos);
    this.props.fetchTodos();
  }

  updateTodo = (todo) => {
    let updateTodo = todo
    if (updateTodo.isComplete === true) {
      updateTodo.isComplete = false;
    } else {
      updateTodo.isComplete = true;
    }
    this.props.updateTodo(updateTodo)
      .then(resp => console.log('Updated Todo successfully'))
      .catch(err => console.log(err))
  }

  deleteTodo = (todo) => {
    this.props.deleteTodo(todo)
      .then(resp => console.log("Succesfully deleted todo."))
      .catch(err => console.log(err));
  }

  listItem = (todo) => {
    if (todo.isComplete === true) {
      return (
        <div className="completed">
          {todo.task}
          <Button className="pull-right" bsStyle="danger" bsSize="small" onClick={() => this.deleteTodo(todo)}>X</Button>
          <Button className="pull-right" bsStyle="primary" bsSize="small" onClick={() => this.updateTodo(todo)}>&#10007;</Button>
        </div>
      );
    }
    return (
      <div>
        {todo.task}
        <Button className="pull-right" bsStyle="danger" bsSize="small" onClick={() => this.deleteTodo(todo)}>X</Button>
        <Button className="pull-right" bsStyle="success" bsSize="small" onClick={() => this.updateTodo(todo)}>&#10003;</Button>
      </div>
    );
  }

  render() {
    return (
      <Grid>
        <ListGroup>
          {this.props.todos.map((todo) =>
            <ListGroupItem key={todo.id}>
              {this.listItem(todo)}
            </ListGroupItem>
          )}
        </ListGroup>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps, { fetchTodos })(Todos);
