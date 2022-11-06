import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

export default function Todolist() {
    const [value, setValue] = useState('Add an ITEM ')
    const [ todos, setNewtodo] = useState([])
    const [editid,setEditid] = useState(0)
    const addbtn = (e) => {
        e.preventDefault();
        
        if(!value){
            alert('plaesse enter a todo first')
        }
        const newtodo = {value, id: String(new Date().getTime())};
        setNewtodo([...todos,  newtodo]);
        setValue(" write something else")
    }
        const Delbtn = (id) => {
            const updatetodo = todos.filter((todo) => {return todo.id !== id});
             setNewtodo(updatetodo)
        };
      
//    edit btm
    const editbtn =(id) => {
          const edit = todos.find((i) => {return i.id===id})
          setValue(edit.value);
          setEditid(id);
    }
  return (
    <> <h1 className=' text-center text-danger mt-3'>Todo App</h1>
    <div className='wrapper'>
       
        <form onSubmit={addbtn}>
            <input type="text"  value={value}  onChange={(e) => setValue(e.target.value)}/>
            <button type="Sumbit" >{ editid ? "Edit":"GO"}</button>

        </form>
                 {todos.length === 0 ? (<h5>No Todos Availeble</h5>):
    
    (todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} Delete={Delbtn} Edit={editbtn}/>
    })
    )
    }
      <p className='mytodo'>My todo ({todos.length})</p></div>
    </>
  )
}
