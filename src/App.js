import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="">BookList</Link>
            </li>
          </ul>
        </nav>
        <Routes>
           <Route path="/" element={}/>
         </Routes>;
      </div>
    </Router>
  );
}

export default App;
