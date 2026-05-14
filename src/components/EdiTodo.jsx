import { Component, use, useState } from "react";

function EditTodoFunctional({todo, todoList, setTodos}) {
  const [inputVal, setInputVal] = useState(todo.name)

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  }

  const handleSaveChanges = (e) => {
    const newName = inputVal;
    const id = e.target.dataset.id;
    const newTodoList = todoList.map(todo => {
      // set edit to false to rendet Todo component
      if (todo.id === id) {
        return {
          id: todo.id,
          edit: false,
          name: newName,
        }
      }

      return todo;
    })

    setTodos(newTodoList);
  }

  return(
    <li>
      <form>
        <input
          type="text"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button className="save-todo-btn" data-id={todo.id} type="submit" onClick={handleSaveChanges}>Save Changes</button>
      </form>
    </li>
  )
}

class EditTodoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: this.props.todo.name,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((state) => ({
      inputVal: e.target.value}))
  }

  render() {
    return (
      <li>
        <form>
          <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
          <button>Save Changes</button>
        </form>
      </li>
    )
  }
}

export { EditTodoFunctional, EditTodoClass };