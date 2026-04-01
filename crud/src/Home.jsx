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
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone no</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((a) => {
                        // console.log(a)
                        let{id, name, phone} = a
                        console.log(id, name, phone)

                        return(
                            <tr key={id}>
                                <td> {id} </td>
                                <td> {name} </td>
                                <td> {phone} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home