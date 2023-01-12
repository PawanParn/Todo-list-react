import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TodoForm({onSubmit}) {

  const [title , setTitle] = useState('');
  const navigate = useNavigate();


  const handleSubmitForm =  async e =>{

    try{
      e.preventDefault();

      onSubmit(title);

      alert('Adding success');
      navigate('/')
      setTitle('')
      
    }catch(err){
      console.log('Error to adding todo list')
    }
  };

  return (

    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button className="btn btn-outline-secondary">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </form>
  );
}

export default TodoForm;
