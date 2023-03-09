import './App.css';
import * as React from "react";
import BookList from './components/list.component';
import CreateTask from './components/createtask.component';
import EditTask from './components/edittaskk.component';
import BookPage from './components/Landing';
import Admin from './components/Admin/Home';
 
//import Home from './components/Admin/Home';
import {  BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
      
        <Routes>
           <Route path="/" element={<BookPage/>} />
           <Route path="/books" element={<BookList/>} />
           <Route path="/admin" element={<Admin/>} />           
           <Route path="/create-task" element={<CreateTask/>} />
           <Route path="/book/edit/:id" element={<EditTask/>} />
         </Routes>;
      </div>
    </Router>
  );
}

export default App;
