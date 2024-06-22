import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[showbtn,setshowbtn] = useState(true)
  const [todos, setTodo] = useState([
    {
      title : "hey",
      desc : "Hey i am todo"
    },
    {
      title : "todo is a good todo",
      desc : "another todo"
    },
    {
      title : "grocery store",
      desc : "hey i am a todo and grocery store"
    },
    
  ])

  const Todo = ({todo}) =>{
    return (<>
    <div className="m-4 border border-1 border-red-500"> 

      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn && <button>button is true</button>} */}
      {showbtn? <button>button is true</button>:<button>button is false</button>}

      {todos.map(todo =>{
          return<Todo key={todo.title} todo={todo}/>
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          togggle 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
    }
export default App
