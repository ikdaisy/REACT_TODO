import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <>
      <div className="main">
        <div className="box">
          <h2>TO-DO APP</h2>
          <input type="text" placeholder='ADD TASK' />
          <button className='add-btn'>ADD</button>
          <div className="task"> Task 1 <button className='delete-btn'>DELETE</button></div>
          
         
        </div>
      </div>
    </>
  )
}

export default App
