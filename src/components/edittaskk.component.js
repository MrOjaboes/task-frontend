
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 

 
const EditTask = () => {
  let navigate = useNavigate();
  const {id} = useParams();
  const [task,setTask] = useState([]);

  useEffect(()=>{
        getBook();
      },[]
  );
const handleChange = (event) =>{
setTask({...task,[event.target.name] : event.target.value});
}
  const getBook =()=> {
    fetch(`http://127.0.0.1:8000/api/task/edit/`+id)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
        setTask(data);
    });
}
const handleSubmit =(event)=> {
  console.log(task)
  fetch(`http://127.0.0.1:8000/api/task/update/`+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: task.title,
      
    }),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        setTask({
          isLoaded: true,
        });
        console.log(result);
      },
      (error) => {
        setTask({
          isLoaded: true,
          error
        });
      }
    );
    event.preventDefault();
    navigate('/'); 
}
return (
  <div className="container pt-3">    
      <div className="row pt-5">
           <div className="col-md-3"></div>
           <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <label for="fname">Task Title</label>
                                <input value={task.title} name="title" type="text" onChange={handleChange} className="form-control form-control-lg"></input>
                            </div>
                          
                        </div>
                        
                      

                        <div className="row">
                            <div className="col-12">
                                <input type="submit" value="Update" className="btn btn-success btn-lg px-5"></input>
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
};

export default EditTask;
