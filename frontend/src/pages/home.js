import { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import SideBar from "../components/sideBar"
import "../css/home.css"
import Table from 'react-bootstrap/Table';

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
            <h1>ToDo app</h1>
            <div className="main">
                
                <form className="p-4 border border-3 rounded js-add-form">
                  <h2 className="mb-4">Add a task</h2>

                  <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input
                      type="text"
                      id="title"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="due_date">Due Date</label>
                    <input
                      type="date"
                      id="due_date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                      <button type="submit" className="btn btn-success">
                        Add 
                      </button>
                    
                </form>
              </div>
              <div>

              <Table striped bordered hover style={{width: '500px', height: '300px', marginTop:'32%'}}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Due date</th>
                    <th>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Example</td>
                    <td>27.02</td>
                    <td>No</td>
                  </tr>
                 
                </tbody>
              </Table>

              </div>
            </div>            
          </div>
        </div>
      
    </ProSidebarProvider>    
  )
}

export default Home