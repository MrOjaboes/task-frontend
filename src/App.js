import './App.css';
import * as React from "react";
import CreateTask from './components/createtask.component';
import EditTask from './components/edittaskk.component';
import Admin from './components/Admin/Home';
import MenuLink from './components/Admin/MenuLink';
 
//import Home from './components/Admin/Home';
import {  BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
      <MenuLink/>
        <Routes>    
            
           <Route path="/" element={<Admin/>} />           
           <Route exact path="/create-task" element={<CreateTask/>} />
           <Route path="/task/edit/:id" element={<EditTask/>} />
         </Routes>;
      </div>
    </Router>
  );
}

export default App;
