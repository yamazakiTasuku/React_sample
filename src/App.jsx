import {useState,useRef} from "react"; //変数を監視管理するフックス
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

function App() {
  //const [todos,setTodos] = useState(["Todo1","Todo2"]); //todosは変数、そこに値が追加していくごとにサイトが更新する
  const [todos,setTodos] = useState([  //setTodosはtodosの中の値の削除や更新に使える
    {id:1,name:'Todo1',completed:false}]
    );
  //()の中に初期値を追加することができる
    
  const todoNameRef = useRef(); //入力された文字列を取得していくことが可能
  const handleAddTodo = () =>{
    //タスクの追加
    //console.log(todoNameRef.current.value) //コンソールに階層上である
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) =>{ //スプレッド構文
      return [...prevTodos,{id:uuidv4(),name: name, completed:false}];
    });
    todoNameRef.current.value = null;
  };

  
  const toggleTodo = (id) =>{
    const newTodos =[...todos]; //todosをコピーしてnewTodosに入れている
    const todo = newTodos.find((todo) => todo.id === id);
    console.log(newTodos)
    console.log(todo)
    todo.completed =!todo.completed;
    setTodos(newTodos);
  }


  const handlClear = () =>{
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos)

  }
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>  {/*useStateで取得したデータをtodosという変数にして引数にしている*/}
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handlClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
