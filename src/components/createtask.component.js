import { useNavigate } from "react-router-dom";
import React from "react";
class CreateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value });
  }

  handleSubmit(event) {
    const { title } = this.state
    fetch("http://127.0.0.1:8000/api/task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title        
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
      event.preventDefault();
      this.props.navigate('/'); 
  }

  render() {
    return (
<div className="container pt-5">
<div className="row">
  <div className="col-md-3"></div>
  <div className="col-md-6">
    <div className="card">
<div className="card-body">
<form onSubmit={this.handleSubmit}>
      <div className="site-section">
      <div className="container">
          <div className="row">
              <div className="col-md-12 form-group">
                  <label for="fname">Task Title</label>
                  <input value={this.state.title} name="title" type="text" onChange={this.handleChange} className="form-control form-control-lg"></input>
              </div>
              
          </div>
           
         

          <div className="row">
              <div className="col-12">
                  <input type="submit" value="Add Task" className="btn btn-success btn-lg px-5"></input>
              </div>
          </div>
      </div>
  </div>
  </form> 
</div>
    </div>
  </div>
  <div className="col-md-3"></div>
</div>
</div>


      
            
    );
  }
}

function WithNavigate(props){
   let navigate = useNavigate();
   return <CreateBook {...props} navigate={navigate} /> 
  }
export default WithNavigate;
