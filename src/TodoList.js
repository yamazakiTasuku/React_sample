import React from 'react'
import Todo from './Todo'
//map関数は要素を一つ一つ入れていく関数
export const TodoList = ({todos , toggleTodo}) => { //コンポーネント  propsという引数を用意してコンポーネントを呼び出す部分で指定　　{}にするとプロップス名で指定することができる
  return todos.map((todo) => <Todo taodo = {todo} key={todo.id} toggleTodo={toggleTodo}/>); 
};
// コンポーネントの呼び出しの際=のまえにある変数の形はもとのコンポーネントと同じでなくてはならない
export default TodoList;