import React, { useState, useEffect } from 'react'
import './Home.css'

const getData = () => {
  let Data = localStorage.getItem('students');
  if (Data) {
    return JSON.parse(localStorage.getItem('students'));
  } else {
    return [];
  }
}

const Home = () => {
  const [localStorageData, setLocalStorageData] = useState(getData());

  const [register, setRegister] = useState({
    fname: '',
    class: '',
    phone: '',
    address: '',
  })

  const inputEvent = (e => {
    const { value, name } = e.target
    setRegister((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    })
  })

  const registerNow = () => {
    setLocalStorageData([...localStorageData, register])
  }

  useEffect(() => {
    localStorage.setItem('students', [JSON.stringify(localStorageData)]);
  }, [localStorageData])

  return (
    <>
      <center><h2 className='center-color'>Register Now</h2></center><br />
      <div className='main-div'>
        <div>
          <div className='sub-div div1'>
            <label htmlFor="full-name">Full Name</label><br />
            <input type="text" id="full-name" name="fname" value={register.fname} placeholder='Full Name' autoComplete='off' onChange={inputEvent} /><br /><br />
          </div>
          <div className='sub-div div2'>
            <label htmlFor="class">Class</label><br />
            <input type="text" id="class" name="class" value={register.class} placeholder='Class' autoComplete='off' onChange={inputEvent} /><br /><br />
          </div>
          <div className='sub-div div3'>
            <label htmlFor="phone">Phone</label><br />
            <input type="number" id="phone" name="phone" value={register.phone} placeholder='91' autoComplete='off' onChange={inputEvent} /><br /><br />
          </div>
          <div className='sub-div div4'>
            <label htmlFor="address">Address</label><br />
            <textarea cols="136" rows="4" name="address" value={register.address} placeholder='Type your Address' id="address" autoComplete='off' onChange={inputEvent} />
          </div>
          <button onClick={registerNow}>Register Now</button>
        </div>
      </div>
    </>
  )
}

export default Home;