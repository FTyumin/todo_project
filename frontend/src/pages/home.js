import { useState } from "react"
// ? https://www.npmjs.com/package/react-pro-sidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import SideBar from "../components/sideBar"
import "../css/home.css"
import Table from 'react-bootstrap/Table'
import useAxios from "../utils/useAxios"

const Home = () => {
  const [inputTitle, setInputTitle] = useState("")
  const [inputDate, setInputDate] = useState("")
  
  const [todoList, setTodoList] = useState([])

  const handleClick = () => {
    const id = todoList.length + 1
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: inputTitle,
        dueDate:inputDate,
        complete: false,
      }
    ])
    setInputTitle("")
    setInputDate("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleClick()
  }

  // const refreshList = () => {
  //   axios.get("/api/todos/")
  //   .then((res) => this.useState({todoList:res.data}))
  //   .catch((err) => console.log(err))
  // }

  const createItem = () => {
    const item = {title: "", description:"", completed:false}

    this.useState({activeItem:item})
  }

  // const handleDelete =(item) => {
  //   axios
  //     .delete("/api/todos/",item)
  //     .then((res) => this.refreshList())
  // }
  

 

  return (
    <ProSidebarProvider>
      <div className="pageWrapper">
        <div>
          <SideBar/>
          
          <div className="container">
            <h1>ToDo app</h1>
            <div className="main">
                
                <form className="p-4 border border-3 rounded js-add-form" onSubmit={handleSubmit}>
                  <h2 className="mb-4">Add a task</h2>

                  <div className="form-group">
                    <label htmlFor="title">Task Title</label>
                    <input
                      type="text"
                      id="title"
                      required
                      onChange={(event) => setInputTitle(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="due_date">Due Date</label>
                    <input
                      type="date"
                      id="due_date"
                      required
                      min={new Date().toISOString().split('T')[0]} 
                      value={inputDate}
                      onChange={(event) => setInputDate(event.target.value)}
                    />
                  </div>

                      <button 
                      type="submit"
                      className="btn btn-success"
                      
                      
                        >
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
                  {todoList.map((task) => (
                      <tr key={task.id}>
                        <td>{task.task}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.complete ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                 
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