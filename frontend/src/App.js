import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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


  


function App() {
  return (
    <div>
      <div className='sidebar'>

        <Navigation
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                  // maybe push to the route
                }}
                items={[
                  {
                    title: 'Todo app',
                    itemId: '/dashboard',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <label name="inbox" />,
                  },
                  {
                    title: 'ToDo',
                    itemId: '/todo',
                    elemBefore: () => <label name="users" />,
                    subNav: [
                      {
                        title: 'Tasks',
                        itemId: '/management/projects',
                      },
                      {
                        title: 'Members',
                        itemId: '/management/members',
                      },
                    ],
                  },
                  {
                    title: 'Chat',
                    itemId: '/another',
                    subNav: [
                      {
                        title: 'example',
                        itemId: '/management/example',
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
