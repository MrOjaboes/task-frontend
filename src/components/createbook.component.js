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
      this.props.navigate('/'); 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input value={this.state.title} name="title" type="text" onChange={this.handleChange} />
        </label><br />
        <label>
          Author:
          <input value={this.state.author} name="author" type="text" onChange={this.handleChange} />
        </label><br />
        <label>
          Publisher:
          <input value={this.state.publisher} name="publisher" type="text" onChange={this.handleChange} />
        </label><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function WithNavigate(props){
   let navigate = useNavigate();
   return <CreateBook {...props} navigate={navigate} /> 
  }
export default WithNavigate;
