import React from 'react';

const TodoItem = ({todo}) => {
  return (
      <div style={{maxWidth:'900px',margin:'10px auto',fontSize:'20px',fontWeight: '600',color:'#fc4e03',padding: '10px',borderRadius:'5px',border:'2px solid #fc4e03',backgroundColor:'#ffffff',textAlign:'center'}}>
         {todo} 
      </div>
  );
};

export default TodoItem;
