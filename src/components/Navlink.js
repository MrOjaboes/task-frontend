import { Link } from "react-router-dom";
export default function NavLink(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand text-white" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active text-white" to="#">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link text-white" to="#">Features</Link>
           
          </div>
        </div>
      </nav>
    );
}