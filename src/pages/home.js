import axios from "axios";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { addTodo, createTodo, fetchTodo, getAllTodo }  from "../stores/todoSlice";

import TodoContainer from "../components/TodoContainer";
import TodoForm from "../components/TodoForm";
// import { getAllTodo } from "../stores/todoSlice";


function Home(){
  
  // const todos = useSelector(state => {
  //   console.log(todos)
  //   state.todo.todos
  // })

  // const todos = useSelector(state =>{
  //   console.log(state)
  //   state.todo.todos;
  // });

  const todos = useSelector(({ todo: { todos } }) => todos);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTodo())
  },[dispatch]);

  //dispatch is function that called function from store by redux libraly


  return (
        <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
          <div className="my-4">
            <TodoForm onSubmit={title =>{dispatch(addTodo(title)) }} />
          </div>
          <TodoContainer todos={todos} deleteTodo={()=>{}} />
        </div>
      );
};

export default Home;