/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { CountClass } from './Count';
import { TodoClass } from './Todo';
import { EditTodoClass } from './EdiTodo';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: crypto.randomUUID(),
          edit: false,
          name: "Just some demo tasks,"
        },
        {
          id: crypto.randomUUID(),
          edit: false,
          name: "As an example"
        }
      ],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({id: crypto.randomUUID(), edit: false, name: state.inputVal}),
      inputVal: '',
    }));
  }

  handleDelete(e) {
    console.log("i run")
    const id = e.currentTarget.dataset.id
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState((state) => ({
      ...state,
      todos: filteredTodos,
    }));
  }

  handleEdit(e) {
    const id = e.target.dataset.id;
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          edit: true,
          name: todo.name
        }
      }
      return todo;
    })

    this.setState((state) => ({
      ...state,
      todos: updatedTodos
    }))
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            !todo.edit ?
            <TodoClass todo={todo} onDelete={this.handleDelete} onEdit={this.handleEdit}/> :
            <EditTodoClass todo={todo} todos={this.state.todos} setTodos={this.setState}/>
          ))}
        </ul>
        <CountClass todos={this.state.todos}/>
      </section>
    );
  }
}

export default ClassInput;
