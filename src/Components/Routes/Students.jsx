import React from 'react'
import { NavLink } from 'react-router-dom'
import ClickCounter from '../HOC/ClickCounter'
function Students() {
  return (
    <div>Students
      <NavLink to='/student-edit'>Add student </NavLink>
<ClickCounter />
      {/* <div className='list'>
    {formData.myEmployees.map((value,index)=> {
    
      return (
    
          <div key={index} className='wholeDiv' >
        
         
           Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
    
    
    
    
        </div> 
        
      )
    })}
          </div> */}
    </div>
  )
}

export default Students