import { Component } from "react"

function TodoFunctional({ todo, onDelete, onEdit }) {
  return (
    <li key={todo.id}>
      {console.log(todo)}
      {todo.name}
      <button className='delete-todo-btn' data-id={todo.id} onClick={onDelete}>Delete</button>
      <button className='edit-todo-btn' data-id={todo.id} onClick={onEdit}>Edit</button>
    </li>
  )
}

class TodoClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.todo.id}>
        {this.props.todo.name}
        <button className='delete-todo-btn' data-id={this.props.todo.id} onClick={this.props.onDelete}>Delete</button>
        <button className="edit-todo-btn" data-id={this.props.todo.id} onClick={this.props.onEdit}>Edit</button>
      </li>
    )
  }
}

export { TodoFunctional, TodoClass }