import { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import SideBar from "../components/sideBar"
import "../css/home.css"

const Home = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([])

  const handleClick = () => {
    const id = todoList.length + 1
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ])
    setInput("")
  }

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {}
      if (task.id === id) {
        if (!task.complete){
            setCompletedTaskCount(completedTaskCount + 1)
        } 
        else {
            setCompletedTaskCount(completedTaskCount - 1)
        }
        item = { ...task, complete: !task.complete }
      } else item = { ...task }
      return item
    })
    setTodoList(list)
  }

  return (
    <ProSidebarProvider>
      <div className="pageWrapper">
        <div>
          <SideBar/>
          
          <div className="container">
            <div className="main">
                <h1>Todo List</h1>
                <input className="txt" value={input} onInput={(e) =>setInput(e.target.value)} />
                <button className="btn taskCount" onClick={() => handleClick()}>Add</button>

                <div>
                  <span className="taskCount">
                    <b>Pending Tasks</b> {todoList.length - completedTaskCount}
                  </span>

                  <span className="taskCount">
                    <b>Completed Tasks</b> {completedTaskCount}
                  </span>
                </div>

                <div>
                <ul>
                  {todoList.map((todo) => {
                  return (
                    <li
                    className="list"
                    complete = {todo.complete}
                    id={todo.id}
                    onClick={() => handleComplete(todo.id)}
                    style={{
                        listStyle: "none",
                        textDecoration: todo.complete && "line-through",
                    }}
                    >
                      {todo.task}
                    </li>
                  )
                  })}
                </ul>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </ProSidebarProvider>    
  )
}

export default Home