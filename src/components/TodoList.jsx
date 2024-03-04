import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more veggies',
        'Read 10 pages of a book'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) =>{
            return(
                <li className='todoItem' key={todoIndex}>{todo}</li>
            )
        
         })}
    </ul>
  )
}
