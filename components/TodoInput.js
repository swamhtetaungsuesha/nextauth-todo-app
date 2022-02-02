import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {  toast } from 'react-toastify';
const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  h2{
    color: #fff;
    text-align: center;
  }
  form{
    width : 100%;
    display: flex;
    justify-content: center;
    align-items : center;
    input{
      width: 90%;
      height: 30px;
      border-radius: 3px;
      border:none;
      text-decoration: none;
      outline:none;
      padding: 10px;
    };
    input:focus,button:focus{
      outline: 5px solid #fc4e03;
    }
    button{
      color: #fff;
      cursor: pointer;
      border-radius: 3px;
      height: 30px;
      background-color:#fc4e03;
      border : none;

    }
    
  }
`
const TodoInput = ({isFetchedSession,fetchedSession}) => {
    const [todo,setTodo]=useState('')
    const submitHandler=async(e)=>{
        e.preventDefault();
         await axios.post('./api/todos',{todo})
         .then(res=>{
           toast.success(res.data.msg)
           setTodo('')

         })
         .catch(err=>{
    
           toast.error(err.response.data.msg)
         })
         isFetchedSession(prev=>prev+1)
          
    }
  return (
    <Wrapper>
        <h2>Todo List</h2>
        <form onSubmit={e=>submitHandler(e)}>
            <input type='text' value={todo} onChange={e=>setTodo(e.target.value)}/>
            <button type='submit'>Create Todo</button>
        </form>
    </Wrapper>
  );
};

export default TodoInput;
