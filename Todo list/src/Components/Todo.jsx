import React from 'react'

export default function Todo(props) {
  
  return (
    <>
    <div className='todostyle' >
      <p >{props.todo.value}</p>
      <button className='btn1' onClick={() => props.Delete(props.todo.id)}><i class="fa-solid fa-trash "></i></button>
      <button className='btn2' onClick={() => props.Edit(props.todo.id)}><i class="fa-solid fa-pen"></i></button>

         </div>
    </>
  )
}
