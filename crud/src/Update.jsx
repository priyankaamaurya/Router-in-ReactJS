import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  let [formData, setFormData] = useState({
    name : "",
    phone : ""
  })

  let {id} = useParams()
  console.log(id)

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`http://localhost:3030/users/${id}`)
      // console.log(res.data)
      setFormData(res.data)
    }
    getData()
  }, [])

  let navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
      axios.patch(`http://localhost:3030/users/${id}`, formData)
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
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <label htmlFor="userName">Enter Name</label>
          <input type="text" id='userName' value={formData.name} name='name' onChange={(e)=>setFormData({...formData, name : [e.target.value]})} />

        </div>

        <br />

        <div>

          <label htmlFor="number">Enter Number</label>
          <input type="tel" id='number' value={formData.phone} name='phone' onChange={(e)=>setFormData({...formData, phone : [e.target.value]})} />

        </div>

        <br />

        <button type='submit'> Submit </button>

      </form>
    </div>
  )
}

export default Update