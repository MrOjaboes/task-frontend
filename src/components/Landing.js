import Login from "./Login";
import NavLink from "./Navlink";
export default function Landing() {
  return (
    <div className="container pt-5">
        <NavLink/>
        <div className="row pt-5">
     <div className="col-md-3"></div>
     <div className="col-md-6">
     <div class="card">
  <div class="card-body">
    
     <Login/>
  </div>
</div>
     </div>
     <div className="col-md-3"></div>
        </div>
    </div>
  );
}
