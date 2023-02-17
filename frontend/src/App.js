import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Program, Todo, FormTodo} from "./functions"

const todoItems = [
  {id:1,
  title:"Lorem ipsum",
  description:"Test 1",
  completed:false,
  due_date:"16.02"
},
{id:2,
  title:"Lorem ipsum smth random",
  description:"Test 2",
  completed:false,
  due_date:"16.02"
},
]



const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
}

const markTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos);
}

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}  


function App() {
  return (
    <div>
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className='sidebar'>

      <Navigation
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              
              activeItemId="/management/members"
              onSelect={({itemId}) => {
                
              }}
              items={[
                {
                  title: 'Todo app',
                  itemId: '/dashboard',
                
                  elemBefore: () => <label name="inbox" />,
                },
                {
                  title: 'ToDo',
                  itemId: '/todo',
                  elemBefore: () => <label name="users" />,
                  subNav: [
                    {
                      title: 'Tasks',
                      itemId: '',
                    },
                    {
                      title: 'Members',
                      itemId: '',
                    },
                  ],
                },
                {
                  title: 'Chat',
                  itemId: '',
                  subNav: [
                    {
                      title: 'example',
                      itemId: '',
                    },
                  ],
                },
              ]}
            />

          </div>
      
                  
                    
    </div>

    
      
  )
}

export default App;
