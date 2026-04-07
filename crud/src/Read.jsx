import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {

  let [user, setUser] = useState(null)

  let { id }  = useParams()

  useEffect(()=>{
    async function fetchUser() {
      try {
        let res = await axios.get(`http://localhost:3030/users/${id}`)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
      
    }
    fetchUser()
  }, [id])

  return (
    <div>
      <h1> User Details </h1>

      {
        user ? (
          <div> 
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Phone:</b> {user.phone}</p>

            <br />

            <Link to="/">
              <button>Back</button>
            </Link>

          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  ) 
}

export default Read