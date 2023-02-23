import { useState } from "react"
import styled from "styled-components"
import "../index.css"
import SideBar from "../components/sideBar"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`
const Text = styled.input`
  border: 2px solid #000;
`
const Tasks = styled.div`
`
const TaskCount = styled.span`
  margin: 10px;
`

const LIST = styled.li`
  listStyle:"none";
  text-decoration: "line-through";
`

const PageWrapper = styled.div`
  background-color: antiquewhite;
  height: 100vh;
`
const App = () => {
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
        <PageWrapper>
        <div>
            <SideBar/>
            
            <Container>
            <div className="main">
                <h1>Todo List</h1>
                <Text value={input} onInput={(e) =>setInput(e.target.value)} />
                <Button onClick={() => handleClick()}>Add</Button>

                <Tasks>
                <TaskCount>
                    <b>Pending Tasks</b> {todoList.length - completedTaskCount}
                </TaskCount>
                <TaskCount>
                    <b>Completed Tasks</b> {completedTaskCount}
                </TaskCount>
                </Tasks>

                <div>
                <ul>
                    {todoList.map((todo) => {
                    return (
                        <LIST
                        complete = {todo.complete}
                        id={todo.id}
                        onClick={() => handleComplete(todo.id)}
                        style={{
                            listStyle: "none",
                            textDecoration: todo.complete && "line-through",
                        }}
                        >
                        {todo.task}
                        </LIST>
                    )
                    })}
                </ul>
                </div>
            </div>            
            </Container>
        </div>
        </PageWrapper>
    </ProSidebarProvider>    
  )
}
export default App