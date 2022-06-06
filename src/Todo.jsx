import React from 'react'

export const Todo = ({taodo,toggleTodo}) => {
  const handleTodoClick = () =>{
    toggleTodo(taodo.id);
  }
  return (
    <div>
        <label>
          <input type="checkbox" 
          checked = {taodo.completed} 
          readOnly
          onChange={handleTodoClick}/>
        </label>
        {taodo.name}
    </div>
  )
}

export default Todo
