import { use, useState } from "react";

function EditTodoFunctional({todo, onSaveChanges}) {
  const [inputVal, setInputVal] = useState(todo.name)

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  }

  return(
    <li>
      <input 
        type="text" 
        value={inputVal} 
        onChange={handleInputChange}
      />
      <button className="save-todo-btn" onClick={onSaveChanges}>Save Changes</button>
    </li>
  )
}

export { EditTodoFunctional };