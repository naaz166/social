import React, {useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from "./view";
 import Add from "./Add";
 import { HashRouter as Router,Switch, Route, Link} from "react-router-dom";
 import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function App(){
  const[todos, setTodos] = useState([]);
      
     const updateList = (task) =>{
  
       setTodos((prevTodoList) =>{
         return [...prevTodoList, task];
       });
       localStorage.setItem("list",JSON.stringify([...todos, task]));
     };
     useEffect(() =>{
       const listContents = localStorage.getItem("list");
       setTodos(JSON.parse(listContents) || []);
     }, []);

     
         return (
           <Router>
             <Navbar>
        <Navbar.Brand>Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav-nav"></Navbar.Toggle>
        <Navbar.Collapse className="nav-link">
          <Nav>
            <Link className="nav-link" to="/">
              View
            </Link>
            <Link className="nav-link" to="/add">
              Add
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Container>
          <Switch>
            <Route path ="/add">
          <Add
          submitHandler={(task)=>{
            updateList(task);
                }}
          />
          </Route>
          <Route exact path="/">
          <View activeTodoArray={todos} />
          </Route>
          <Route path ="/">Error 404</Route>
          </Switch>
        </Container>
        </Router>
    );

}
export default App;
