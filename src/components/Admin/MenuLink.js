import { Link } from "react-router-dom";

export default function MenuLink(){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand text-white" to="/">Task Management</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active text-white" to="/">Tasks <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link text-white" to="create-task">Add Task</Link>
           
          </div>
        </div>
      </nav>
      
    );
}