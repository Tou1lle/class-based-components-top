function TodoFunctional({todo, onDelete, onEdit, onSubmit}) {
  return (
    <li key={todo.id}>
      {console.log(todo)}
      {todo.name}
      <button className='delete-todo-btn' data-id={todo.id} onClick={onDelete}>Delete</button>
      <button className='edit-todo-btn' data-id={todo.id}>Edit</button>
    </li>
  )
}

export { TodoFunctional }