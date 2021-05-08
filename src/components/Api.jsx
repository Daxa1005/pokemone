import React, { useState } from 'react'

const Api = () =>{


    const [api,setapi]=useState([])
    const[input,setinput]=useState('')
    const[drop,setdrop]=useState('name')
    

    

    const myapi = ()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>setapi(json) )

       
    }
    //console.log(myapi)

    return(

        <div>
            <button id='api'  onClick={myapi} >API</button><br/>
            <input type="text" name='search' value={input} placeholder='search'
            onChange={e=>{
                setinput(e.target.value)
            }}/>

            <select value={drop} onChange={e=>{setdrop(e.target.value)}}>
                <option disabled selected>selected any fields</option>
                <option value='id'>id</option>
                <option value='name'>name</option>
                <option value='email'>email</option>
                {/* <option value='address.street'>address</option> */}
                <option value='phone'>phones</option>
                <option value='website'>website</option>
            </select>
            <table>
            <tr >
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>address</td>
                <td>phone</td>
                <td>Website</td>
            </tr>

            {
                api.filter((items)=>{
                    if(items[drop].toString().includes(input))
                    return items;
                })
                .map((user) => {
                return (
                    <tr>
                        {" "}
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>

                )
            })
        }

               

         </table>   
        </div>
    )
}

export default Api  