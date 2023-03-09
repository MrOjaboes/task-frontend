import { useNavigate } from "react-router-dom";
import React from "react";
class CreateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", publisher: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value });
  }

  handleSubmit(event) {
    const { title, author, publisher } = this.state
    fetch("http://127.0.0.1:8000/api/books/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        publisher: publisher
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
      this.props.navigate('/books'); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="site-section">
      <div className="container">
          <div className="row">
              <div className="col-md-6 form-group">
                  <label for="fname">Book Title</label>
                  <input value={this.state.title} name="title" type="text" onChange={this.handleChange} className="form-control form-control-lg"></input>
              </div>
              <div className="col-md-6 form-group">
                  <label for="lname">Book Author</label>
                  <input value={this.state.author} name="author" type="text" onChange={this.handleChange} className="form-control form-control-lg"></input>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12 form-group">
                  <label for="eaddress">Book Publisher</label>
                  <input value={this.state.publisher} name="publisher" type="text" onChange={this.handleChange} className="form-control form-control-lg"></input>
              </div>
             
          </div>
         

          <div className="row">
              <div className="col-12">
                  <input type="submit" value="Add Book" className="btn btn-primary btn-lg px-5"></input>
              </div>
          </div>
      </div>
  </div>
  </form>       
    );
  }
}

function WithNavigate(props){
   let navigate = useNavigate();
   return <CreateBook {...props} navigate={navigate} /> 
  }
export default WithNavigate;
