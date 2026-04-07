import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

    // console.log(data)

    function handleDelete(id) {
        console.log(id)
        let res = confirm("Do you want to delete the data")
        if(res) {
            axios.delete(`http://localhost:3030/users/${id}`)
            .then((res)=>{
                console.log(res)
                console.log("Data is deleted")
                location.reload()
            }).catch((err)=>{
                console.log(err)
            })
        }
    }


  return (
    <div>
        <h1> User's Details </h1>
        <div>
            <button>
                <Link to="/create"> Create </Link>
            </button>
        </div>
        <table border={2} style={{borderCollapse:"collapse"}} cellPadding={8} width={800}>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Phone no </th>                   
                    <th> Action </th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((a) => {
                        let{id, name, phone} = a

                        return(
                            <tr key={id}>
                                <td> {id} </td>
                                <td> {name} </td>
                                <td> {phone} </td>
                                <td> 
                                    <button> 
                                        <Link to={`/update/${id}`}> Update </Link>
                                    </button>
                                    <button> 
                                        <Link to={`/read/${id}`}> Read </Link>
                                    </button>
                                    <button onClick={()=>handleDelete(id)}> Delete </button> 
                                </td>
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