import { use, useState } from "react";

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
      <input 
        type="text" 
        value={inputVal} 
        onChange={handleInputChange}
      />
      <button className="save-todo-btn" data-id={todo.id} onClick={handleSaveChanges}>Save Changes</button>
    </li>
  )
}

export { EditTodoFunctional };