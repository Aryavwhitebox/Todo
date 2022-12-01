import React,{useState} from 'react'

function App() {
  const[list,setList]=useState([])
  const[input,setInput]=useState("")
const addTodo=(todo)=>{
  const newTodo={
    id:Math.random(),
    todo:todo,
  };
  //add to the todo list
  setList([...list,newTodo])

  //clear the input field 
  setInput("")
}
const deleteTodo=(id)=>{
  //filter todo with the id

  const newList=list.filter((todo)=>todo.id !==id)
  setList(newList)
}
  return (
    <div>
      <h1>ToDo list</h1>
      <input type='text' value={input}
      onChange={(e)=>setInput(e.target.value)}
      ></input>
      <button onClick={()=>addTodo(input)}>Add item</button>
   <ul>
    {list.map(
      (todo)=>(
        <li key={todo.id}>
          {todo.todo}
          <button onClick={()=>deleteTodo(todo.id)}>&times;</button>
        </li>
      )
    )}
   </ul>
    </div>
  )
}

export default App
