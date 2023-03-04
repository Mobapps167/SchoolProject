import React from 'react'
import "./AllStudents.css"
import { useState, useEffect } from 'react'

const getdata = () => {
  const data = localStorage.getItem('students')
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

const AllStudents = () => {
  const [fregister, fsetregister] = useState(getdata())
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('students'));
    if (items) {
      fsetregister(items);
    }
  }, []);

  return (
    <>
      <center><h2>Registered Students</h2></center>
      <div className='main-div'>
        <div className='main-div1'>{!fregister.length && <div> Sorry, No Students are Registered Yet</div>}</div>
        <div className='main-div2'>
          {
            fregister.map((item, index) => {
              return (
                <>
                  <div className='main-div3'>{index+1}: 
                  <div className='sub-div'><p><span>Student Name:-</span> {item.fname}</p></div>
                  <div className='sub-div'><p><span>Student Class:-</span> {item.class}</p></div>
                  <div className='sub-div'><p><span>Student Phone:-</span> {item.phone}</p></div>
                  <div className='sub-div'><p><span>Student Address:-</span> {item.address}</p></div>
                  </div>
                </>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default AllStudents