import { useState } from "react";
import styled from "styled-components";
import "./index.css";


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
    ]);
    setInput("")
  };
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {}
      if (task.id == id) {
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
    <Container>
      <div>
          <h2>Todo List</h2>
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
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default App;