 
import React from "react";
import { Link } from "react-router-dom";
 
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        tasks: [],
      };
    }
  
    deleteBook(id) {
      console.log(id);
      fetch(`http://127.0.0.1:8000/api/task/delete/`+ id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/task")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              tasks: result,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  
    render() {
      const { error, isLoaded, tasks } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
    return (
<div className="container pt-5">
    
        <div className='row pt-2'>
<div className='col-md-12'>
<div className='card p-0'>
<div className='card-body'>    
<table className="table">
          <thead>
            <tr>
               
              <th>Title</th>               
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>                 
                <td>{task.title}</td>                 
                <td>
                  <button className="btn btn-success">
                    <Link to={{pathname:"/task/edit/"+task.id }} className="text-white">Edit</Link>
                  </button>
                 &nbsp;
                  <button className="btn btn-danger text-white" onClick={() => this.deleteBook(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
</div>
</div>
        </div>
 </div>
    ); }
}
}

export default Home;