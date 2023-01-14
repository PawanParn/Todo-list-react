import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';



const todoSlice = createSlice({
    name: 'todo',
    initialState: { todos: [] },
    reducers: {
      getAllTodo: (state, action) => {
        state.todos = action.payload;
      },
        createTodo : (state , action ) => {
          state.todos.unshift(action.payload);
        },
        updateTodo : (state , action ) => {},
        deleteTodo : (state , action ) => {}
    }
});

//reducer function . name ,. actio , creaters

export default todoSlice.reducer;

export const { getAllTodo, createTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
  
export const addTodo = (title )=> async dispatch =>{
   
  try{
    const res = await axios.post('http://localhost:8007/todos', 
    {title} , 
    { headers : { Authorization : `Bearer ${localStorage.getItem('token')}` }}
    );
    dispatch(createTodo(res.data.todo));
  }catch(err){
    console.log('error page todoslice addTdo')
  }
}

export const fetchTodo = () => async dispatch => {
  try{
    const res = await axios.get('http://localhost:8007/todos',{
      headers : { Authorization : `Bearer ${localStorage.getItem('token')}` }
    });
    dispatch(getAllTodo(res.data.todos));
  }catch(err){
      console.log(err);
      alert('Fetch error on Home page JS')
  }
};