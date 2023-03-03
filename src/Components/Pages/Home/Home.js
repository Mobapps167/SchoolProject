import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  const [sname, setname] = useState({
    fname: "",
    class: "",
    phone: "",
    address: ""
  });

  const inputEvent = (e => {
    const { value, name } = e.target
    setname((preval) => {
      return {
        ...preval,
        [name]: [value],
      };
    })
  })

  const submit = () => {

  }

  return (
    <>
      <div>
        <p>{sname.fname} {sname.class} {sname.address} {sname.phone}</p>
      </div>
      <center><h2 className='center-color'>Register Now</h2></center><br />
      <div className='main-div'>
        <div className='sub-div div1'>
          <label for="full-name">Full Name</label><br />
          <input type="text" id="full-name" name="fname" value={sname.fname} placeholder='Full Name' autoComplete='off' onChange={inputEvent} /><br /><br />
        </div>
        <div className='sub-div div2'>
          <label for="class">Class</label><br />
          <input type="text" id="class" name="class" value={sname.class} placeholder='Class' autoComplete='off' onChange={inputEvent} /><br /><br />
        </div>
        <div className='sub-div div3'>
          <label for="phone">Phone</label><br />
          <input type="number" id="phone" name="phone" value={sname.phone} placeholder='91' autoComplete='off' onChange={inputEvent} /><br /><br />
        </div>
        <div className='sub-div div4'>
          <label for="address">Address</label><br />
          <textarea cols="136" rows="4" name="address" value={sname.address} placeholder='Type your Address' id="address" autoComplete='off' onChange={inputEvent} />
        </div>
        <button type='button' value='submit' onClick={submit}>submit</button>
      </div>
    </>
  )
}

export default Home;