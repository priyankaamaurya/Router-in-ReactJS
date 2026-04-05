import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  let [formData, setFormData] = useState({
    name: "",
    phone: ""
  })

  let navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
      axios.post("http://localhost:3030/users", formData)
      .then((res)=>{
        console.log(res)
        navigate("/")
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Add new User</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <label htmlFor="userName">Enter Name</label>
          <input type="text" id='userName' name='name' onChange={(e)=>setFormData({...formData, name : [e.target.value]})} />

        </div>

        <br />

        <div>

          <label htmlFor="no">Enter Number</label>
          <input type="number" id='no' name='phone' onChange={(e)=>setFormData({...formData, phone : [e.target.value]})} />

        </div>

        <br />

        <button type='submit'> Submit </button>

      </form>
    </div>
  )
}

export default Create

// ( ˶ˆ ᗜ ˆ˵ )

// ♡⸜(˶˃ ᵕ ˂˶)⸝♡