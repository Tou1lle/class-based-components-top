import React, { useState } from 'react';
import { CountFunctional } from './Count';
import { TodoFunctional } from './Todo';
import { EditTodoFunctional } from './EdiTodo';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState([
    {name: 'Just some demo tasks', id: crypto.randomUUID(), edit: false}, 
    {name: 'As an example', id: crypto.randomUUID(), edit: false}
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, {name: inputVal, id: crypto.randomUUID(), edit: false}]);
    setInputVal('');
  };

  const handleDelete = (e) => {
    const id = e.currentTarget.dataset.id;
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const handleEdit = (e) => {
    const id = e.currentTarget.dataset.id;
    const updateEditTodos = todos.map(todo => {
      if (todo.id === id) {
        return { name: todo.name, id: todo.id, edit: true };
      };

      return todo;
    })
    console.log(updateEditTodos);
    setTodos(updateEditTodos);
  }

  return (
    <section>
      <h3>{name}</h3>
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo) => (
          todo.edit ? <EditTodoFunctional /> : <TodoFunctional todo={todo} onDelete={handleDelete} onEdit={handleEdit}/>
        ))}
      </ul>
      <CountFunctional todos={todos}/>
    </section>
  );
};

export default FunctionalInput;
