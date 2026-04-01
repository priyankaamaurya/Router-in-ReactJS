import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    let [data, setData] = useState([])

    useEffect(() => {
        async function fetch() {
            let res = await axios.get("http://localhost:3030/users")
            // console.log(res.data)
            setData(res.data)
        }
        fetch()
    },[])

    console.log(data)

  return (
    <div>
        <h1>Users Data</h1>
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Phone no</td>
                </tr>
            </thead>
            {/* <tbody>
                {
                    data.map
                }
            </tbody> */}
        </table>
    </div>
  )
}

export default Home